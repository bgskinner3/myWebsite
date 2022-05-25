import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_SINGLE_CARD } from '../graphql/queries';
import { UPDATE_CARD_MUTATION } from '../graphql/mutations';
import Loading from './Loading';

const EditCard = () => {
  const [field, setField] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const [updateCard] = useMutation(UPDATE_CARD_MUTATION);
  const { data, loading } = useQuery(GET_SINGLE_CARD, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    getCard();
  }, [data]);
console.log(id)
  const getCard = () => {
    if (data) {
      setField(data.card.field);
      setDescription(data.card.description);
      setTitle(data.card.title);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateCard({
        variables: {
          input: {
            id: id,
            title: title,
            description: description,
            field: field.toLowerCase().split(' ').join(''),
          },
        },
      });
    } catch (error) {
      console.error('updateissue', error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white pt-20 pb-20">
      <div className="p-5 ml-10 mr-10 border-4 bg-neutral-focus rounded-3xl border-neutral  shadow-2xl shadow-black bg-base">
        <form onClick={() => handleUpdate()}>
          <div className="flex m-10 justify-center">
            <div className="grid gap-4 ">
              <label>TITLE</label>
              <input
                type="text"
                value={title}
                className="input input-bordered bg-neutral-focus input-success input-lg max-w-xs "
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>SUBJECT</label>
              <div className="dropdown">
                <label tabIndex="0" className="btn m-1 w-full">
                  {field}
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  onClick={(e) => setField(e.target.innerHTML.toLowerCase())}
                >
                  <li>
                    <div>Bar</div>
                  </li>
                  <li>
                    <div>General</div>
                  </li>
                  <li>
                    <div>Data Science</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <textarea
            className="textarea textarea-success bg-neutral-focus p-5 w-full h-screen"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default EditCard;