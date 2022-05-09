import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Resume from './Resume';
import nav from '../images/nav.png';
import {GET_ALL_MESSAGES} from '../graphql/queries'
import { useQuery } from '@apollo/client';
const token = process.env.REACT_APP_JWT_SECRET;

const NavBar = () => {
  const admin = localStorage.getItem(token);
  const [navMenuOpen, setNavMenuOpen] = useState(null)
  const [style, setStyle] = useState({})
  const navigate = useNavigate();
  const {data} = useQuery(GET_ALL_MESSAGES)

  useEffect(() => {
    getPing()
  }, [data])


  const getPing = () => {
    if(data) {
      data.messages.map((message) => {
        if(message.read === 'no') {
          setStyle({
            animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            backgroundColor: "rgb(56 189 248)"
          });
        } else {
          setStyle({animation: "none"})
        }
      })
    }
  }
   const handleNavToggle = () => {
     setNavMenuOpen(!navMenuOpen);
   };
  
  return (
    <header className="sticky top-0 p-5 flex justify-between items-center bg-white p-5 shadow-md md:px-10 z-40 ">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <Resume />
        </div>
      </div>
      <Link to="/" className="h-24">
        <img src={nav} alt="" className="h-24 " />
      </Link>

      {admin ? (
        <div className="flex items-center">
          {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <Resume />
            </div>
          </div> */}
          <nav className="md:hidden">
            <button
              className="btn btn-ghost btn-circle mr-16"
              onClick={() => navigate('/adminmessages')}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={style}
                ></span>
              </div>
            </button>
            <label
              tabIndex="0"
              className="btn m-1 bg-base-200 hover:bg-base-200 hover:border-indigo-400 border-violet-400 "
              onClick={() => setNavMenuOpen(!navMenuOpen)}
            >
              {navMenuOpen ? (
                <XIcon className="h-6" />
              ) : (
                <MenuIcon className="h-6 " />
              )}
            </label>
          </nav>
          <div>
            {navMenuOpen ? (
              <div className="md:hidden z-50 w-100% top-20 shadow-md bg-white right-6 absolute border-2 border-b-indigo-500">
                <ul className="relative">
                  <li className="relative">
                    <Link
                      className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                      to="/blog"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="relative">
                    <label
                      htmlFor="my-modal-3"
                      className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                    >
                      Resume
                    </label>
                  </li>
                  <li className="relative">
                    <Link
                      to="/write"
                      className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                    >
                      Create Post
                    </Link>
                  </li>
                  <li className="relative">
                    <div
                      className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                      onClick={() => {
                        localStorage.clear();
                        navigate(`/`);
                      }}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          <nav className="hidden md:flex md:items-center md:justify-end md:space-x-4 text-gray-500">
            <Link
              to="blog"
              className="hover:scale-110  hover:text-indigo-500  hover:transition duration-200 ease-out"
            >
              Blog
            </Link>
            <label
              htmlFor="my-modal-3"
              className="hover:scale-110  hover:text-indigo-500  hover:transition duration-200 ease-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Resume
            </label>
            <Link
              to="/write"
              className="hover:scale-110  hover:text-indigo-500  hover:transition duration-200 ease-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Create Post
            </Link>
            <div
              className="hover:scale-110  hover:text-indigo-500  hover:transition duration-200 ease-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={() => {
                localStorage.clear();
                navigate(`/`);
              }}
            >
              Logout
            </div>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => navigate('/adminmessages')}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>

                <span className="flex h-3 w-3">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                    style={style}
                  ></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              </div>
            </button>
          </nav>
        </div>
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            id="my-modal-3"
            className="modal-toggle md:hidden"
          />
          <div className="modal md:hidden">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <Resume />
            </div>
          </div>
          <nav
            className="md:hidden"
            onClick={() => setNavMenuOpen(!navMenuOpen)}
          >
            <label
              tabIndex="0"
              className="btn m-1 bg-white hover:bg-white hover:border-indigo-400 border-white "
            >
              {navMenuOpen ? (
                <XIcon className="h-6" />
              ) : (
                <MenuIcon className="h-6 bg-white" />
              )}
            </label>
          </nav>
          {navMenuOpen ? (
            <div className="md:hidden z-50 w-100% top-20 shadow-md bg-white right-6 absolute border-2 border-b-indigo-500">
              <ul className="relative">
                <li className="relative">
                  <Link
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    to="/blog"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    Blog
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    to="/message"
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    Message
                  </Link>
                </li>
                <li className="relative">
                  <label
                    htmlFor="my-modal-3"
                    className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-200 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    Resume
                  </label>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
          <nav className="hidden md:flex md:items-center md:justify-end md:space-x-4 text-gray-500">
            <Link
              to="/blog"
              className="hover:scale-110  hover:text-indigo-500  hover:transition duration-200 ease-out"
            >
              Blog
            </Link>
            <Link
              to="/message"
              className="hover:scale-110  hover:text-indigo-500  hover:transition duration-200 ease-out"
            >
              Message
            </Link>
            <label
              htmlFor="my-modal-3"
              className="hover:scale-110  hover:text-indigo-500  hover:transition duration-200 ease-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Resume
            </label>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
