import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from '../graphql/queries';

const ToDoHandle = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_TODOS);


  
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white p-20">
      <div>create</div>
      <div className="p-5 w-full border-4 bg-primary-content rounded-3xl border-neutral-content shadow-2xl shadow-black  bg-white"></div>
    </div>
  );
};

export default ToDoHandle;
