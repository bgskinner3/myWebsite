import React from 'react';
import { PageNotFound } from '.';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARDS } from '../graphql/queries';
import CreateCard from './AdminCreateCard';
import Loading from './Loading';

const token = process.env.REACT_APP_JWT_SECRET;

const CardPractice = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_CARDS);
  const admin = localStorage.getItem(token);
  console.log(data);
  return admin ? (
    loading ? (
      <Loading />
    ) : (
      <div className="bg-white">
        <div className="flex h-56 flex-no-wrap overflow-x-scroll scrollbar-hide  scrolling-touch items-start mb-8">
          {data.cards.map((card) => {
            return (
              <label className="swap swap-flip p-10">
                <input type="checkbox" />
                <div className="swap-on">
                  <div className="card lg:card-side bg-white shadow-xl shadow-black ">
                    <div className="card-body">{card.description}</div>
                  </div>
                </div>
                <div className="swap-off">
                  <div className="card lg:card-side bg-white shadow-xl shadow-black ">
                    <div className="card-body">{card.title}</div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        <CreateCard />
      </div>
    )
  ) : (
    <PageNotFound />
  );
};

export default CardPractice;
