import React from 'react';
import Loading from './Loading';
import { GET_ALL_BLOG_POSTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import skylinefixed from '../images/skylinefixed.jpeg';
import profile from '../images/profile.jpg';
import Button from '@mui/material/Button';

const Home = () => {
  const { data, loading } = useQuery(GET_ALL_BLOG_POSTS);
  const navigate = useNavigate();
  const style = {
    height: '600px',
    backgroundImage: `url(${skylinefixed})`,
    backgorundSize: 'contain',
    backgroundPosition: 'center',
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div
        className="w-full bg-fixed flex justify-center items-center "
        style={style}
      >
        <div className="relative">
          {/* <img
            src={skylinefixed}
            alt=""
            className="w-screen  object-cover opacity-40"
          /> */}

          <div className="justify-center items-center">
            <p className="italic  text-5xl text-bold text-black bd-red-100 font-serif">
              Welcome
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen flex">
        <div className="bg-gray-600 grid justify-items-center w-1/2">
          <div className="m-5 p-10 text-xl text-left font-serif">
            <img className="mask mask-circle w-full" src={profile} alt="" />
            My name is Brennan Skinner and im a software engineer. Here is my
            personal website where you can checkout my most recent projects,
            view my personal blog and even leave comments or messages. Thank you
            for stopping by and please leave a comment or message.
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            <div className="flex-grow border-t border-gray-400 mt-10"></div>
            {data.posts
              ? data.posts.map((post) => {
                  const date = String(new Date(post.createdAt));
                  return (
                    <div
                      key={post.id}
                      className="ml-24 wrapper p-5 w-96 antialiased text-gray-900"
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
      <div>fdas</div>
    </div>
  );
};

export default Home;

// <div className="m-10 flex">
//   <img className="mask mask-circle h-96 w-96" src={profile} alt="" />
//   <div className="grid pl-5">
//     <p className="m-20 text-xl text-left font-serif">
//       My name is Brennan Skinner and im a software engineer. Here is my
//       personal website where you can checkout my most recent projects, view my
//       personal blog and even leave comments or messages. Thank you for
//       stopping by and please leave a comment or message.
//     </p>
//     <div className="flex space-x-4">
//       <p className="italic text-bold text-xl font-serif">Proficent: </p>
//       <p className="text-xl font-serif">
//         Javascript, React/Redux, PostgreSQL, Node, Sequelize, Express,
//       </p>
//     </div>
//     <div className="flex space-x-4">
//       <p className="italic text-bold text-xl font-serif">Knowledgeable:</p>
//       <p className="text-xl font-serif">
//         GraphQL, ApolloClient/ApolloServer, Supabase
//       </p>
//     </div>
//     <div className="flex space-x-4">
//       <p className="italic text-bold text-xl font-serif">Familar:</p>
//       <p className="text-xl font-serif">Firebase, Docker, Kubernetes</p>
//     </div>
//   </div>
// </div>;
