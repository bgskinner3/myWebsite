import React, { useState } from 'react';
import { LOGIN_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import pic3 from '../images/pic3.jpg';
import nycskylinetrain from '../images/nycskylinetrain.jpeg';
const jwtAuth = process.env.REACT_APP_JWT_SECRET;
const getUser = process.env.REACT_APP_USER;

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [login] = useMutation(LOGIN_USER);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: {
          username: username,
          password: password,
        },
      });
      const {
        login: { token },
      } = data;

      localStorage.setItem(jwtAuth, token);
      navigate('/');
    } catch (error) {
      console.error('in handlelogin', error);
    }
  };
  
  return (
    <div>
      <div className="w-full  h-screen flex justify-center items-center">
        <div className="relative z-0">
          <img src={pic3} alt="" className="w-screen object-cover opacity-40 h-screen" />
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
              <div className="w-full max-w-lg">
                <div className="leading-loose">
                  <form
                    className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
                    onSubmit={handleLogin}
                  >
                    <p className="mb-8 text-2xl font-light text-center text-white">
                      Admin Login
                    </p>
                    <div className="mb-2">
                      <div className=" relative ">
                        <input
                          id="username"
                          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          type="username"
                          placeholder="Your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className=" relative ">
                        <input
                          id="password"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          type="password"
                          placeholder="Your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <button
                        type="submit"
                        className="py-2 px-4 btn glass bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Validate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex justify-center ">
    //   <div className="lg:w-2/4" aria-live="polite">
    //     <div className="w-full max-w-s">
    //       <form
    //         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //         onSubmit={handleLogin}
    //       >
    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="email"
    //           >
    //             Username
    //           </label>
    //           <input
    //             id="username"
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             type="username"
    //             placeholder="Your username"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //             htmlFor="password"
    //           >
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             type="password"
    //             placeholder="Your password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <button
    //           className=" cursor-pointer mt-5 rounded-lg bg-indigo-500 px-4 py-2 text-sm text-white w-full hover:bg-indigo-600"
    //           aria-live="polite"
    //         >
    //           Login
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AdminLogin;
