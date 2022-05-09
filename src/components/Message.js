import React, { useState } from 'react';
import { CREATE_MESSAGE_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Message = () => {
  const [messageContent, setMessageContent] = useState('');
  const [email, setEmail] = useState('');
  const [createMessage] = useMutation(CREATE_MESSAGE_MUTATION);
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      await createMessage({
        variables: {
          input: {
            content: messageContent,
            email: email,
          },
        },
      });
      toast.success('🦄  Message Has Been Sent!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('An Error has Occured, Please Try Again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error('message didnt go thorugh', error);
    } finally {
      navigate('/')
    }
  };
  return (
    <div>
      <div className="p-5 pt-10 m-10 md:pl-20 md:pr-20 items-center border-4 bg-neutral-focus rounded-3xl border-neutral  shadow-2xl shadow-black bg-base h-full">
        <div className="space-y-12 items-center">
          <input
            type="text"
            placeholder="Enter Email"
            required
            className="input input-bordered input-success w-full max-w-xs bg-white text-black"
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            className="textarea textarea-success  w-full h-56 bg-white text-black"
            placeholder="Message"
            required
            onChange={(e) => setMessageContent(e.target.value)}
          ></textarea>
          <button
            className="btn sm:btn-md md:btn-md lg:btn-lg btn-outline btn-success"
            type="button"
            onClick={() => handleSubmit()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
