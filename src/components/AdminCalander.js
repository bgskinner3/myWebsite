import React, { useState, useEffect } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_TODO_MUTATION } from '../graphql/mutations';
import { toast } from 'react-toastify';
import { PageNotFound } from '.';
import ToDoHandle from './AdminHandleToDo';

const token = process.env.REACT_APP_JWT_SECRET;

const AdminCalanderAndToDos = () => {
  const [content, setContent] = useState('');
  const [importance, setImportance] = useState({
    display: 'Select Importance',
    create: ''
  });
  const [createToDo] = useMutation(CREATE_TODO_MUTATION);
  const navigate = useNavigate();
  const admin = localStorage.getItem(token);

  const handleCreateToDo = async () => {
    try {
      const {data} = await createToDo({
        variables: {
          input: {
            content: content,
            importance: importance.create
          }
        }
      })
      if(data) {
          toast.success('🦄  You Have a new TO-DO', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
    } catch (error) {
      console.error('did not create todo', error);
    }
  };
 
  return admin ? (
    <div className="bg-white pt-20 pb-20">
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white border-4 rounded-3xl border-neutral-content  shadow-2xl shadow-black">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <p className="text-2xl font-serif text-bold text-black">
              {importance.display}
            </p>
          </div>
          <div className="flex justify-evenly mb-5 mt-5">
            <button
              type="button"
              className="text-error border text-xl border-error text-center rounded-xl p-3"
              onClick={(e) =>
                setImportance({
                  display: 'Tomorrow',
                  create: 'urgent',
                })
              }
            >
              Tomorrow
            </button>
            <button
              className="text-warning border text-xl border-warning text-center rounded-xl p-3"
              onClick={(e) =>
                setImportance({
                  display: 'Three Days',
                  create: 'moderate',
                })
              }
            >
              Three Days
            </button>
            <button
              className="text-info-content border text-xl border-info-content text-center rounded-xl p-3"
              onClick={(e) =>
                setImportance({
                  display: 'Week',
                  create: 'taketime',
                })
              }
            >
              Week
            </button>
          </div>
          <div className="ml-10 mr-10">
            <textarea
              rows="10"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Whats Next..."
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <label
            htmlFor="my-modal-5"
            className="btn btn-active mt-10"
            onClick={() => handleCreateToDo()}
          >
            Add To Do
          </label>
        </div>
      </div>
      <div className="p-5 ml-10 border-4 bg-primary-content rounded-3xl border-neutral-content  shadow-2xl shadow-black w-96 h-screen inset-y-0 left-0 bg-white">
        <div className="flex justify-center justify-evenly">
          <label
            htmlFor="my-modal-5"
            className="flex justify-center text-neutral-content overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <div>
              <PlaylistAddIcon sx={{ fontSize: 100 }} />
              <p className="text-lg">create todo</p>
            </div>
          </label>
          <div
            className="flex justify-center text-neutral-content overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            onClick={() => navigate('/admincalanderandtodos/createreacto')}
          >
            <div>
              <AddBoxIcon sx={{ fontSize: 100 }} />
              <p className="text-lg">create reacto</p>
            </div>
          </div>
        </div>
        <div>this weeks todos?</div>
        <ToDoHandle />
      </div>
    </div>
  ) : (
    <PageNotFound />
  );
};

export default AdminCalanderAndToDos;
