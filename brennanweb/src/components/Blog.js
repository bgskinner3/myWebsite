import React, { useState, useEffect } from 'react';
import { GET_ALL_BLOG_POSTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import personal from '../defaultImages/personal.jpeg';
import nycskylinetrain from '../images/nycskylinetrain.jpeg';
import Button from '@mui/material/Button';

const Blog = () => {
  const [recentPosts, setrecentPosts] = useState([]);
  const { data, loading } = useQuery(GET_ALL_BLOG_POSTS);
  const navigate = useNavigate();
  const style = {
    backgroundImage: `url(${nycskylinetrain})`,
  };

  useEffect(() => {
    getRecentPosts();
  }, [data]);

  const getRecentPosts = async () => {
    try {
      if (data) {
        const recent = data.posts.slice(-3);
        setrecentPosts(recent);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // bg-fixed bg-contain bg-cover
  //bg-[length:2000px_2000px]
  // console.log(data.posts[0])
  // const x = data.posts[0]
  // const date = String(new Date(x.createdAt))

  // console.log(date.slice(0, 16));

  return loading ? (
    <Loading />
  ) : (
    <div>
      {/* <div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 italic text-3xl">
            Recent Posts
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="">
          <div className="max-w-5xl mx-auto py-10">
            <ul className="grid grid-cols-1 -mx-2 overflow-hidden">
              {recentPosts ? (
                recentPosts.map((post) => {
                  return (
                    <li
                      key={post.id}
                      className="my-2 px-2 w-full overflow-hidden md:w-full lg:w-full xl:w-full"
                    >
                      <button onClick={() => navigate(`/blog/${post.id}`)}>
                        <div className="mx-2 h-96  flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded-lg overflow-hidden">
                          <div className="absolute w-full h-full bg-black z-10 opacity-40">
                            <img
                              src={post.image}
                              alt=""
                              className="w-screen h-full object-cover"
                            />
                          </div>
                          <div className="relative z-20 text-center p-5">
                            <div className="flex-grow border-t border-gray-900"></div>
                            <span className="font-serif text-black text-bold uppercase text-2xl tracking-wide">
                              {post.title}
                            </span>
                            <div className="flex-grow border-t border-gray-900"></div>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div> */}
      <div className="bg-fixed h-full bg-cover bg-center flex grid grid-cols-1 content-center ">
        {/* <img src={nycskylinetrain} alt="" className="bg-scroll"/> */}

        {data
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
          : 'nothing currently'}
      </div>
    </div>
  );
};

export default Blog;
// <div className="w-96 glass" key={post.id}>
//   <figure>
//     <img src={post.image} alt="car!" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{post.title}</h2>
//     <p className="line-clamp-3">{post.content}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Learn now!</button>
//     </div>
//   </div>
// </div>
// <div className="wrapper p-5 bg-gray-400 w-96 antialiased text-gray-900 ">
//   <div>
//     <img
//       src={personal}
//       alt=" random imgee"
//       className="w-96 object-cover object-center rounded-lg shadow-md"
//     />

//     <div className="relative px-4 -mt-16">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-84">
//         <div className="flex items-baseline">
//           {/* <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
//   New
// </span>
// <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
//   2 baths &bull; 3 rooms
// </div> */}
//         </div>

//         <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
//           A random Title
//         </h4>

//         <div className="mt-1">
//           $1800
//           <span className="text-gray-600 text-sm"> /wk</span>
//         </div>
//         <div className="mt-4">
//           <span className="text-teal-600 text-md font-semibold">
//             4/5 ratings{' '}
//           </span>
//           <span className="text-sm text-gray-600">
//             (based on 234 ratings)
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
