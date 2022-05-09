import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_SINGLE_BLOG_POST, GET_ALL_COMMENTS } from '../graphql/queries';
import { CREATE_COMMENT_MUTATION } from '../graphql/mutations';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Loading from './Loading';

const SingleBlog = () => {
  const [getDate, setDate] = useState('');
  const [getReadingTime, setReadingTime] = useState('');
  const [comment, setComment] = useState('');
  const [postComments, setPostComments] = useState([]);
  const [getCommentDate, setCommentDate] = useState('')
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION);
  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_BLOG_POST, {
    variables: {
      postId: id,
    },
  });
  const { data: comments, refetch } =  useQuery(GET_ALL_COMMENTS);

  console.log(comments);

  useEffect(() => {
    readingTime();
    getPostDate();
    getAllPostComments();
  }, [data]);

  const getPostDate = () => {
    if (data) {
      const date = String(new Date(data.post.createdAt));
      console.log(data.post);
      setDate(date.slice(0, 16));
    }
  };

  const readingTime = () => {
    //the average adult reads 200-250 words in one minute.
    //here we are converting the words count into minutes and seconds
    // which will provide a reading time for each blog post
    if (data) {
      const { length } = data.post.content.split(' ');
      const decimal = String(length / 200);
      const end = decimal.indexOf('.');
      const minutes = decimal.slice(0, end);
      const seconds = String(Number(decimal.slice(end)) * 0.6).slice(
        end + 1,
        4
      );
      setReadingTime(`Read- ${minutes} minutes, ${seconds} seconds`);
    }
  };
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
        const { data } = await createComment({
          variables: {
            input: {
              postId: id,
              content: comment,
            },
          },
        });
      
          setComment('');

        refetch()
      }
    } catch (error) {
      console.error('comment could not be sent', error);
    }
  };


  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white">
      <div>
        <div className="p-10 md:pl-56 md:pr-56">
          <img src={data.post.image} alt="" className="w-full rounded" />
        </div>
        <div className="grid grid-cols-1 text-center p-5 items-stretch gap-x-4 pb-10">
          <h1 className="text-3xl font-serif underline text-black">
            {data.post.title}
          </h1>
          <div className="flex mt-3 justify-center">
            <p className="mr-5 text-center">{getDate}</p>
            <p className="italic">{getReadingTime}</p>
          </div>
        </div>
      </div>

      <div className="text-left pb-20  pl-5 pr-5 md:pl-24 md:pr:24">
        <article className="prose text-xl text-black font-serif prose-slate max-w whitespace-pre-line indent-8">
          {data.post.content}
        </article>
      </div>

      <div className="pl-5 pr-5 md:pl-56 md:pr-56">
        <form onSubmit={() => handleCommentSubmit()}>
          <textarea
            className="textarea textarea-success w-full h-56 bg-white text-black"
            placeholder="Leave a comment"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
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
};

export default SingleBlog;
