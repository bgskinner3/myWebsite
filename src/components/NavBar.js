import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Resume from './Resume';
const token = process.env.REACT_APP_JWT_SECRET;

const NavBar = () => {
  const admin = localStorage.getItem(token);
  const [navMenuOpen, setNavMenuOpen] = useState(null)
  const navigate = useNavigate();

   const handleNavToggle = () => {
     setNavMenuOpen(!navMenuOpen);
   };
  return (
    <header className="sticky top-0 p-5 flex justify-between items-center bg-white p-5 shadow-md md:px-10 z-40 ">
      <Link to="/">
        <h1 className="text-bold italic font-sans text-lg md:text-2xl">
          <HomeIcon sx={{ fontSize: 50 }} />
        </h1>
      </Link>

      {admin ? (
        <div className="flex items-center">
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
          <nav
            className="md:hidden"
            onClick={() => setNavMenuOpen(!navMenuOpen)}
          >
            <label
              tabIndex="0"
              className="btn m-1 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 border-violet-400 "
            >
              {navMenuOpen ? (
                <XIcon className="h-6" />
              ) : (
                <MenuIcon className="h-6 " />
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
            <button className="btn btn-ghost btn-circle">
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
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </nav>
        </div>
      ) : (
        <div className="flex items-center">
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
          <nav
            className="md:hidden"
            onClick={() => setNavMenuOpen(!navMenuOpen)}
          >
            <label
              tabIndex="0"
              className="btn m-1 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 border-violet-400 "
            >
              {navMenuOpen ? (
                <XIcon className="h-6" />
              ) : (
                <MenuIcon className="h-6 " />
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
