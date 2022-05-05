import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import { GET_ALL_BLOG_POSTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import skylinefixed from '../images/skylinefixed.jpeg';
import profile from '../images/profile.jpg';
import Button from '@mui/material/Button';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';

const Home = () => {
  const [recentPost, setRecentPost] = useState({})
  const { data, loading } = useQuery(GET_ALL_BLOG_POSTS);
  const navigate = useNavigate();
  const style = {
    height: '600px',
    backgroundImage: `url(${skylinefixed})`,
    backgorundSize: 'contain',
    backgroundPosition: 'center',
  };

  useEffect(() => {
   getRecent()
  }, [data])

  const getRecent = () => {
    if(data) {
      setRecentPost(data.posts[0])
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="w-full bg-fixed flex">
        <img src={skylinefixed} alt="" className="w-full" />
        <div className="text-4xl md:text-5xl lg:text-7xl pt-10 absolute inset-y-56 pl-24">
          <p className="italic text-4xl text-bold text-black bd-red-100 font-serif">
            Welcome,
          </p>
        </div>
        <div className="absolute flex inset-y-96 ml-96 sm:ml-[300px]  md:ml-[500px] lg:ml-[700px] xl:ml-[900px]">
          <button
            type="button"
            className="btn btn-active w-36 m-5"
            onClick={() => navigate('/blog')}
          >
            Blog
          </button>
          <button
            type="button"
            className="btn glass w-36 m-5 text-black"
            onClick={() => navigate('/projects')}
          >
            Resume
          </button>
        </div>
      </div>
      <div className="h-screen bg-white md:flex sm:grid sm:overflow-y-scroll">
        <div className="bg-neutral-content grid justify-items-center lg:w-1/2 md:w-1/2 sm:w-full sm:overflow-y-scroll">
          <div className="grid grid-cols-1 content-center">
            <img
              className="mask mask-circle sm:w-96 "
              src={profile}
              alt=""
            />
            <p className="text-black text-xl object-contain text-left font-serif">
              My name is Brennan Skinner and im a software engineer. Here is my
              personal website where you can checkout my most recent projects,
              view my personal blog and even leave comments or messages. Thank
              you for stopping by and please leave a comment or message.
            </p>
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-black"></div>
              <span className="flex-shrink mx-4 text-gray-400 italic text-3xl">
                Recent
              </span>

              <div className="flex-grow border-t border-black"></div>
            </div>

            {/* <button onClick={() => navigate(`/blog/${recentPost.id}`)}>
              <div className="mx-2 h-96 w-96 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded-lg overflow-hidden">
                <div className="absolute w-full h-full bg-black z-10 opacity-40">
                  <img
                    src={recentPost ? recentPost.image : ''}
                    alt=""
                    className="w-screen h-full object-cover"
                  />
                </div>
                <div className="relative z-20 text-center p-5">
                  <div className="flex-grow border-t border-gray-900"></div>
                  <span className="font-serif text-black text-bold uppercase text-2xl tracking-wide">
                    {recentPost.title}
                  </span>
                  <div className="flex-grow border-t border-gray-900"></div>
                </div>
              </div>
            </button> */}
            <div>
              <ArrowCircleDownTwoToneIcon
                className="animate-bounce mt-10"
                sx={{ fontSize: 70 }}
              />
            </div>

            <div className="flex-grow border-t border-black mt-10"></div>
            <div className="grid items-center justify-center">
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
      </div>
      <div></div>
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
