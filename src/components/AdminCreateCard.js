import React, { useState } from 'react';
import { PageNotFound } from '.';
import { useMutation } from '@apollo/client';
import { CREATE_CARD_MUTATION } from '../graphql/mutations';
const token = process.env.REACT_APP_JWT_SECRET;

const CreateCard = () => {
  const [createCard] = useMutation(CREATE_CARD_MUTATION);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const admin = localStorage.getItem(token);

  const handleCardSubmit = async () => {
    try {
     
      const { data } = await createCard({
        variables: {
          input: {
            title: title,
            description: description
          }
        }
      })
    } catch (error) {
      console.error('did not complete', error);
    }
  };

  return admin ? (
    <div className="bg-white pb-20 pl-5 pr-5 md:pl-20 md:pr-20">
      <div className="p-5 w-full border-4 bg-primary-content rounded-3xl border-neutral-content shadow-2xl shadow-black  bg-white">
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Type here"
            required
            className="input w-full input-bordered input-success w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="md:ml-20 md:mr-20">
            <label>Enter Reacto Question</label>
            <textarea
              rows="10"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Card Info"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className="btn btn-active" onClick={() => handleCardSubmit()}>
          Submit
        </button>
      </div>
    </div>
  ) : (
    <PageNotFound />
  );
};

export default CreateCard;
