import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import CountDown from './CountDown';
import { useMutation } from '@apollo/client';
import {UPDATE_TODO_MUTATION} from '../graphql/mutations'


const ToDoHandle = (props) => {
  const [notCompleted, setNotCompleted] = useState([]);
  const [todoId, setToDoId] = useState('')
  const { data, loading } = props;
  const [updateToDo] = useMutation(UPDATE_TODO_MUTATION);

  useEffect(() => {
    getAllUncompleted();
  }, [data]);

  const getAllUncompleted = async () => {
    let allTasks = []
    try {
      if(data) {
        data.todos.map((todo) => {
          if (todo.completed === false) {
            allTasks.push(todo)
          }
        });
      }
      setNotCompleted(allTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleComplete = async () => {
    try {
      console.log('complete', todoId);
      // const { data } = await updateToDo({
      //   variables: {
      //     input: {
      //       id: 
      //       completed:
      //     },
      //   },
      // });
      
    } catch (error) {
      console.error(error)
    }
  };
console.log(todoId)
  return loading && notCompleted ? (
    <Loading />
  ) : (
    <div className="bg-white">
      <div className="overflow-y-auto flex flex-wrap space-y-4">
        {notCompleted.map((todo, i) => {
          let id = todo.id
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
              key={i}
              className="h-18 p-5 w-full border-4 bg-primary-content rounded-3xl border-neutral-content bg-white text-black"
            >
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-6"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold text-white">Priority</h3>
                  <p className="text-red-500">
                    {todo.importance.toUpperCase()}
                  </p>
                  <p className="py-4 text-white">{todo.content}</p>
                  <label
                    htmlFor="my-modal-6"
                    className="btn glass"
                    onClick={() => handleComplete(id)}
                  >
                    Mark Completed
                  </label>
                </div>
              </div>
              <label
                htmlFor="my-modal-6"
                className="modal-button "
                onChange={() => setToDoId(id)}
              >
                <div>
                  <p>DUE</p>

                  <CountDown targetDate={countdown} />
                </div>
                <div className="flex-grow border-t border-black pt-3 pb-3"></div>

                <p className="truncate overflow-hidden text-left">
                  {todo.content}
                </p>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoHandle;
