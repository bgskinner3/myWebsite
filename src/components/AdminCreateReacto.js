import React, {useState, useEffect} from 'react';
import { PageNotFound } from '.';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import {CREATE_REACTO_MUTATION} from '../graphql/mutations'
const token = process.env.REACT_APP_JWT_SECRET;

const CreateReacto = () => {
  const [question, setQuestion] = useState('')
  const [markdownnumber, setMarkDownNumber] = useState('')
  const [title, setTitle] = useState('')
  const [answer, setAnswer] = useState('')
  const [createReacto] = useMutation(CREATE_REACTO_MUTATION)
  const navigate = useNavigate()
  const admin = localStorage.getItem(token);

  const handleReactoSubmit = async () => {
    try {
      console.log('state', question, markdownnumber)
      const { data } = await createReacto({
        variables: {
          input: {
            question: question,
            markdownnumber: markdownnumber,
            answer: answer,
            title: title
          },
        },
      });
      if(data) {
        navigate('/admincalanderandtodos');
      }
    } catch (error) {
      console.error('reacto didnt go through', error)
    }
  }

  return admin ? (
    <div className="bg-white p-20">
      <div className="p-5 w-full border-4 bg-primary-content rounded-3xl border-neutral-content shadow-2xl shadow-black  bg-white">
        <div className="grid justify-center">
          <label>enter markdown number</label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full input-bordered input-success w-full max-w-xs"
            onChange={(e) => setMarkDownNumber(e.target.value)}
          />
        </div>
        <div className="grid justify-center">
          <label>Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full input-bordered input-success w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="ml-20 mr-20">
          <label>Enter Reacto Question</label>
          <textarea
            rows="10"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Reacto Question"
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>
        <div className="ml-20 mr-20">
          <label>Enter Reacto Answer</label>
          <textarea
            rows="10"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Reacto Answer"
            
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-active" onClick={() => handleReactoSubmit()}>
          Submit
        </button>
      </div>
    </div>
  ) : (
    <PageNotFound />
  );
};

export default CreateReacto;
