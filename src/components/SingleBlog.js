import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_BLOG_POST } from '../graphql/queries';
import Loading from './Loading';

const SingleBlog = () => {
  const [getDate, setDate] = useState('');
  const [getReadingTime, setReadingTime] = useState('');
  const { id } = useParams();
  const { data, loading } = useQuery(GET_SINGLE_BLOG_POST, {
    variables: {
      postId: id,
    },
  });
  


  useEffect(() => {
    readingTime();
    getPostDate();
  }, [data]);

  const getPostDate = () => {
    if (data) {
      const date = String(new Date(data.post.createdAt));
      console.log(data.post);
      setDate(date.slice(0, 16));
    }
  };

  const readingTime = () => {
    //the average adult reads 200-250 words in one minute.
    //here we are converting the words count into minutes and seconds
    // which will provide a reading time for each blog post
    if (data) {
      const { length } = data.post.content.split(' ');
      const decimal = String(length / 200);
      const end = decimal.indexOf('.');
      const minutes = decimal.slice(0, end);
      const seconds = String(Number(decimal.slice(end)) * 0.6).slice(
        end + 1,
        4
      );
      setReadingTime(`Read- ${minutes} minutes, ${seconds} seconds`);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white">
      <div>
        <div className="p-24">
          <img src={data.post.image} alt="" className="w-full rounded" />
        </div>
        <div className="flex pl-24 items-stretch gap-x-4 pb-10">
          <h1 className=" text-3xl font-serif underline text-black">
            {data.post.title}
          </h1>
          <div className='flex mt-3 '>
            <p className="mr-5">{getDate}</p>
            <p className="italic">{getReadingTime}</p>
          </div>
        </div>
      </div>

      <div className="text-left pb-20 pl-24">
        <article className="prose text-xl text-black font-serif prose-slate max-w whitespace-pre-line indent-8">
          {data.post.content}
        </article>
      </div>
    </div>
  );
};

export default SingleBlog;
