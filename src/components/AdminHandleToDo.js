import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from '../graphql/queries';

const ToDoHandle = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_TODOS);
  const urgent = {
    importance: 'urgent'
  }
  const moderate = {
    importance: 'moderate'
  }
  const taketime = {
    importance: 'taketime',
  };
  // const threeDayExperation = 3 * 24 * 60 * 60 * 1000;
  // const currentTime = bounty.createdAt;
  // const dateTimeAfterThreeDays = currentTime + threeDayExperation;
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white p-20">
      <div>To-Dos</div>
      <div className="p-5 w-full border-4 bg-primary-content rounded-3xl border-neutral-content shadow-2xl shadow-black  bg-white"></div>
    </div>
  );
};

export default ToDoHandle;
