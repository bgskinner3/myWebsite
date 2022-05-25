import React, { useState, useEffect } from 'react';
import { PageNotFound } from '.';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARDS } from '../graphql/queries';
import CreateCard from './AdminCreateCard';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
const token = process.env.REACT_APP_JWT_SECRET;

const CardPractice = () => {
  const [fieldFilter, setFieldFilter] = useState([]);
  const [displayCard, setDisplayCard] = useState([])
  const [fieldType, setFieldType] = useState('all');
  const { data, loading, refetch } = useQuery(GET_ALL_CARDS);
  const admin = localStorage.getItem(token);
  const navigate = useNavigate()
  useEffect(() => {
    filterCategories();
    setFilterType()
  }, [data]);

  //more catergories will eventually be added to the server, 
  // this allows us to display any categories that may be added or
  //deleted withiut having to change anything in the front end
  const filterCategories = () => {
    let type = ['All'];
    if (data) {
      data.cards.forEach((card) => {
        if (!type.includes(card.field)) {
          type.push(card.field)
        }
      });
    }
    setFieldFilter(type);
  };

  const setFilterType = async (type) => {
    try {
      if(type) {
        setFieldType(type);
      }
      let cardsArray = [];
      if(fieldType !== "all") {
        data.cards.map((card) => {
          if(card.field === fieldType) {

            cardsArray.push(card)
          }
        })
        setDisplayCard(cardsArray);
      } else {
        setDisplayCard(data.cards);
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  return admin ? (
    loading ? (
      <Loading />
    ) : (
      <div className="bg-white">
        <div className="dropdown pt-10">
          <label tabindex="0" className="btn m-1">
            Filter
          </label>
          <ul
            tabindex="0"
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 w-full border-4 bg-primary-content rounded-3xl border-neutral-content shadow-2xl shadow-black "
            onClick={(e) => setFilterType(e.target.innerHTML.toLowerCase())}
          >
            {fieldFilter.map((type) => {
              return (
                <li className="text-black">
                  <div>{type}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="carousel rounded-box pt-10 pb-10">
          {displayCard.map((card) => {
            return (
            <div>
                <label key={card.id} className="swap swap-flip w-screen pr-10 pl-10 ">
                  <input type="checkbox" />
                  <div className="swap-on">
                    <div className="card md:w-96 h-96 overflow-scroll lg:card-side bg-white shadow-xl shadow-black p-10">
                      <div className="text-left prose text-xs md:text-md text-black font-serif prose-slate max-w whitespace-pre-line">
                        {card.description}
                      </div>
                    </div>
                  </div>
                  <div className="swap-off">
                    <div className="card md:w-96 h-96 overflow-scroll lg:card-side bg-white shadow-xl shadow-black p-10">
                      <div className="card-body text-black">{card.title}</div>
                      <button
                        className="btn btn-active"
                        onClick={() => navigate(`/cards/${card.id}`)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </label>
             </div>
            );
          })}
        </div>
        <CreateCard refetch={refetch} />
      </div>
    )
  ) : (
    <PageNotFound />
  );
};

export default CardPractice;
