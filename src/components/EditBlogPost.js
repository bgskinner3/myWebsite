import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_SINGLE_BLOG_POST } from '../graphql/queries';
import { UPDATE_POST_MUTATION } from '../graphql/mutations';
import Loading from './Loading';
import PageNotFound from './PageNotFound';
const token = process.env.REACT_APP_JWT_SECRET;


const EditBlogPost = () => {
  const [getContent, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [getImage, setImage] = useState('');
  const [updatePost] = useMutation(UPDATE_POST_MUTATION);

  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_BLOG_POST, {
    variables: {
      postId: id,
    },
  });
  const admin = localStorage.getItem(token);

  useEffect(() => {
    getPost();
  }, [data]);

  const getPost = () => {
    if (data) {
      setContent(data.post.content);
      setImage(data.post.image);
      setTitle(data.post.title);
      setSubject(data.post.subject);
    }
  };

  const HandleUpdate = async () => {
    try {
      await updatePost({
        variables: {
          input: {
            id: id,
            title: title,
            content: getContent,
            image: getImage,
            subject: subject,
          },
        },
      });
    } catch (error) {
      console.error('update did not work', error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className='bg-white pt-20 pb-20'>
      {admin ? (
        <div className="p-5 ml-10 mr-10 border-4 bg-neutral-focus rounded-3xl border-neutral  shadow-2xl shadow-black bg-base">
          <div className="avatar w-56">
            <div className="w-full rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
              <img src={getImage} alt="" />
            </div>
          </div>
          <form onSubmit={() => HandleUpdate()}>
            <div className="flex m-10 justify-center">
              <div className=" flex grid mr-10">
                <label>TITLE</label>
                <input
                  type="text"
                  value={title}
                  className="input input-bordered bg-neutral-focus input-success input-lg w-screen max-w-xs "
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className=" flex grid">
                <label>SUBJECT</label>
                <div className="dropdown">
                  <label
                    tabIndex="0"
                    className="btn m-1 btn-lg w-full btn-outline btn-success"
                  >
                    {subject}
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-screen max-w-xs"
                    onClick={(e) => setSubject(e.target.innerHTML)}
                  >
                    <li>
                      <div>Personal</div>
                    </li>
                    <li>
                      <div>Technology</div>
                    </li>
                    <li>
                      <div>Blockchain</div>
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Other subject"
                        className="input input-bordered bg-neutral-focus input-success w-full max-w-xs "
                        onChange={(e) => setSubject(e.target.value)}
                      ></input>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <textarea
              className="textarea textarea-success bg-neutral-focus p-5 w-full h-screen"
              value={getContent}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="btn btn-primary" type="submit">
              submit
            </button>
          </form>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default EditBlogPost;
