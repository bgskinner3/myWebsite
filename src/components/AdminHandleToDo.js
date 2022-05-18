import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from '../graphql/queries';
import CountDown from './CountDown';
const ToDoHandle = (props) => {

  const {data, loading} = props
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white">
      <div>To-Dos</div>
      <div className="overflow-y-auto">
        {data.todos.map((todo) => {
          let countdown;
          let date = todo.createdAt;
          if (todo.importance === 'urgent') {
            countdown = date + 1 * 24 * 60 * 60 * 1000;
          } else if (todo.importance === 'moderate') {
            countdown = date + 3 * 24 * 60 * 60 * 1000;
          } else {
            countdown = date + 7 * 24 * 60 * 60 * 1000;
          }
          return (
            <div
              key={todo.id}
              className="h-18 p-5 w-full border-4 bg-primary-content rounded-3xl border-neutral-content bg-white"
            >
              <p className="truncate overflow-hidden text-black text-left">
                {todo.content}
              </p>
              <CountDown targetDate={countdown} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoHandle;
