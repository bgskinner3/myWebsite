import React, { useState } from 'react';
import { CREATE_POST_MUTATION, UPLOAD_FILE } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import personal from '../defaultImages/personal.jpeg';
import blockchain from '../defaultImages/blockchain.jpeg';
import technology from '../defaultImages/technology.jpeg';
import PageNotFound from './PageNotFound';
const token = process.env.REACT_APP_JWT_SECRET;

const CreateBlogPost = () => {
  const [path, setPath] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [subject, setSubject] = useState('');
  const defaultImages = [personal, blockchain, technology];
  const admin = localStorage.getItem(token);

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => {
      if (data) {
        setPath(data.uploadFile.url.slice(21));
      }
    },
  });
  const [createPost] = useMutation(CREATE_POST_MUTATION);

  const handleBlogUpload = async (e) => {
    const blob = URL.createObjectURL(e.target.files[0]);
    setPreviewImage(blob);

    const file = e.target.files[0];
    if (file) {
      const { data } = await uploadFile({ variables: { file } });
    }
  };

  const handleSubjectAndDefault = (e) => {
    setSubject(e.target.innerHTML.toLowerCase());
    if (subject) {
      defaultImages.map((image) => {
        const end = image.indexOf('.');
        const check = image.slice(14, end);
        if (subject === check) {
          setPath(image);
        }
      });
    }
  };

  const HandleSubmit = async () => {
    try {
      const { data } = await createPost({
        variables: {
          input: {
            content: content,
            title: title,
            image: path,
            subject: subject,
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return admin ? (
    <div className='bg-white pb-20 pt-20'>
      <div className="p-5 ml-10 mr-10  border-4 bg-neutral-focus rounded-3xl border-neutral  shadow-2xl shadow-black bg-base">
        <div className="avatar w-56">
          <div className="w-full rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
            {path ? (
              <img src={path} alt="" />
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-56 pt-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={() => HandleSubmit()}>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-4"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="wrapper p-5 md:p-20  w-full antialiased text-gray-900">
                <img
                  src={path}
                  alt=""
                  className="w-full h-56 object-cover object-center rounded-lg shadow-md shadow-2xl shadow-black "
                />

                <div className="relative px-4 -mt-12 ">
                  <div className="bg-base-200 p-6 rounded-lg shadow-lg w-84 shadow-2xl shadow-black ">
                    <div className="flex items-baseline"></div>

                    <h4 className="mt-1 text-xl font-semibold uppercase text-white leading-tight truncate">
                      {title}
                    </h4>

                    <div className="mt-1">
                      <span className="text-white text-sm line-clamp-3">
                        {content}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                htmlFor="my-modal-4"
                className="btn btn-outline btn-accent w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="grid md:flex m-10 justify-center">
            <div className=" flex grid md:mr-10">
              <label>TITLE</label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered bg-neutral-focus input-success input-lg w-56 md:w-screen max-w-xs "
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex grid">
              <label>SUBJECT</label>
              <div className="dropdown">
                <label
                  tabIndex="0"
                  className="btn m-1 btn-lg w-56 md:w-full btn-outline btn-success"
                >
                  Select Subject
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-screen max-w-xs"
                  onClick={(e) => handleSubjectAndDefault(e)}
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

            <div className="flex grid md:ml-10">
              <label>UPLOAD IMAGE</label>
              <input
                type="file"
                className=" input input-bordered input-success bg-neutral-focus input-lg pt-3  w-56 md:w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                onChange={(e) => {
                  handleBlogUpload(e);
                }}
              />
            </div>
          </div>
          <textarea
            className="textarea textarea-success bg-neutral-focus p-5 w-full h-screen"
            placeholder="What Happened Today"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <label htmlFor="my-modal-4" className="btn modal-button m-10">
            Preview Blog Post
          </label>
        </form>
      </div>

    </div>
  ) : (
    <PageNotFound />
  );
};

export default CreateBlogPost;
