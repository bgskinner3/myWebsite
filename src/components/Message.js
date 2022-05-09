import React, {useState} from 'react';
import { CREATE_MESSAGE_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const Message = () => {
  const [messageContent, setMessageContent] = useState('')
  const [email, setEmail] = useState('')
  const [createMessage] = useMutation(CREATE_MESSAGE_MUTATION);

  const handleSubmit = async () => {
    try {
      const { data } = await createMessage({
        variables: {
          input: {
            content: messageContent,
            email: email
          }
        }
      })
      console.log(data)
    } catch (error) {
      console.error('message didnt go thorugh', error)
    }
  }
  return (
    <div>
      <div className="p-5 pt-20 m-10 items-center border-4 bg-neutral-focus rounded-3xl border-neutral  shadow-2xl shadow-black bg-base h-screen">
        <form
          className="space-y-12 items-center"
          onSubmit={() => handleSubmit()}
        >
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
            onChange={(e) => setMessageContent(e.target.value)}
          ></textarea>
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-success"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
