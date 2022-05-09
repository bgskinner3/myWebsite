import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { GET_ALL_BLOG_POSTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import skylinefixed from '../images/skylinefixed.jpeg';
import profile from '../images/profile.jpg';
import Button from '@mui/material/Button';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import Projects from './Projects';
import Resume from './Resume';
import SwipeableMoblie from './SwipeableMoblie';

const Home = () => {
  const [recentPost, setRecentPost] = useState({});
  const { data, loading } = useQuery(GET_ALL_BLOG_POSTS);
  const navigate = useNavigate();
  const style = {
    height: '600px',
    backgroundImage: `url(${skylinefixed})`,
    backgorundSize: 'contain',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    getRecent();
  }, [data]);

  const getRecent = () => {
    if (data) {
      setRecentPost(data.posts[0]);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="w-full bg-fixed flex">
        <img src={skylinefixed} alt="" className="w-full" />
      </div>
      <div className="h-screen bg-white md:flex sm:grid">
        <div className="bg-neutral-content grid  lg:w-1/2 md:w-1/2 sm:w-full ">
          <div className="flex flex-col pb-20">
            <img
              className="mask mask-circle sm:w-96 ml-24 mr-24 "
              src={profile}
              alt=""
            />
            <p className="text-black text-xs lg:text-lg object-contain text-left font-serif ml-10 mr-10">
              My name is Brennan Skinner and im a software engineer. Here is my
              personal website where you can checkout my most recent projects,
              view my personal blog and even leave comments or messages. Thank
              you for stopping by and please leave a comment or message.
            </p>
          </div>
        </div>
        <div className="flex-1 md:flex overflow-hidden hidden">
          <div className="flex-1 overflow-y-scroll">
            {/* <div>
              <ArrowCircleDownTwoToneIcon
                className="animate-bounce mt-10"
                sx={{ fontSize: 70 }}
              />
            </div> */}
            <div className="justify-end absolute flex mt-96 pt-36 pl-10">
              <ArrowCircleDownTwoToneIcon
                className="animate-bounce mt-10"
                sx={{ fontSize: 80 }}
              />
            </div>
            <div className="grid items-center justify-center ">
              {data
                ? data.posts.map((post) => {
                    const date = String(new Date(post.createdAt));
                    return (
                      <div
                        key={post.id}
                        className="wrapper p-5 w-96 antialiased text-gray-900"
                      >
                        <img
                          src={post.image}
                          alt=" random imgee"
                          className="w-96 h-56 object-cover object-center rounded-lg shadow-md shadow-2xl shadow-black "
                        />
                        <div className="relative px-4 -mt-12 ">
                          <div className="bg-base-200 p-6 rounded-lg shadow-lg w-84 shadow-2xl shadow-black ">
                            <div className="flex items-baseline"></div>

                            <h4 className="mt-1 text-xl font-semibold uppercase text-white leading-tight truncate">
                              {post.title}
                            </h4>

                            <div className="mt-1">
                              <span className="text-white text-sm line-clamp-3">
                                {post.content}
                              </span>
                            </div>

                            <div>
                              <p className="text-white">{date.slice(0, 16)}</p>
                            </div>
                            <div className="mt-4">
                              <Button
                                className="btn btn-primary"
                                onClick={() => navigate(`/blog/${post.id}`)}
                              >
                                Read more...
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : 'nothing'}
            </div>
          </div>
        </div>

        <div className="md:hidden ">
          <SwipeableMoblie data={data} loading={loading} />
        </div>
      </div>

      <div className="md:hidden flex-grow border-t border-white pb-20 bg-white"></div>
      <div className="">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
