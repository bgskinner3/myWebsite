import React, { useState, useEffect } from "react";
import { CREATE_COMMENT_MUTATION } from '../graphql/mutations';
import {  GET_ALL_COMMENTS } from '../graphql/queries';
import { useQuery, useMutation } from '@apollo/client';
import {  useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Loading from './Loading';
import { toast } from 'react-toastify';

const Comments = (props) => {
  const [comment, setComment] = useState('');
  const [postComments, setPostComments] = useState([]);
  const { data: comments, refetch, loading } =  useQuery(GET_ALL_COMMENTS);
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION);
  const navigate = useNavigate();
  const {id, data } = props

  useEffect(() => {
    getAllPostComments();
  }, [data]);



  const getAllPostComments = async () => {
    try {
      if(data) {
      let array = [...comments.comments];
      array = array.map((comment) => {
        if (comment.postId === id) {
          return comment;
        }
      });
      setPostComments(array);
    }
    } catch (error) {
      console.error(error);
    }
  };


  const handleCommentSubmit = async () => {
    try {
      if (comment) {
         await createComment({
          variables: {
            input: {
              postId: id,
              content: comment,
            },
          },
        });
        refetch()
      }
       toast.success('🦄  Thank You For Your Comment!', {
         position: 'top-center',
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
       
    } catch (error) {
      console.error('comment could not be sent', error);
    } finally {
      navigate('/blog')
    }
  };
  return loading ? (<Loading />) : ( 
    <div>
      <div className="pl-5 pr-5 md:pl-56 md:pr-56">
        <textarea
          className="textarea textarea-success w-full h-56 bg-white text-black"
          placeholder="Leave a comment"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          type="button"
          onClick={() => handleCommentSubmit()}
        >
          Submit
        </button>
      </div>
      <div className=" pl-5 pr-5 md:pl-56 md:pr-56 flex flex-col space-y-4 pt-10 pb-10">
        {postComments
          ? postComments.map((comment) => {
              const date = String(new Date(comment.createdAt));
              //setCommentDate(date.slice(0, 16));
              return (
                <div
                  key={comment.id}
                  className="card card-bordered boarder-success w-full bg-base-100 shadow-xl"
                >
                  <div className="avatar bg-white p-5">
                    <div className="rounded-full">
                      <PersonOutlineIcon
                        sx={{ fontSize: 40 }}
                        className="bg-black"
                      />
                    </div>
                    <p className="text-black pt-4 pl-3">{date.slice(0, 16)}</p>
                  </div>

                  <div className="card-body border-success bg-white">
                    <p className="text-black text-lg text-left">
                      {comment.content}
                    </p>
                  </div>
                </div>
              );
            })
          : 'currently none'}
      </div>
    </div>
  );
}

export default Comments