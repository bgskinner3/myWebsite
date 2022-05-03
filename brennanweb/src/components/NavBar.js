import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const token = process.env.REACT_APP_JWT_SECRET;

const NavBar = () => {
  const admin = localStorage.getItem(token);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 p-5 flex justify-between items-center bg-white p-5 shadow-md md:px-10 z-40 ">
      <Link to="/">
        <h1 className="text-bold text-lg md:text-2xl">Home</h1>
      </Link>

      {admin ? (
        <nav className="flex sm:justify-center space-x-4">
          <div
            className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => navigate('/blog')}
          >
            Blog
          </div>
          <div
            className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => navigate('/write')}
          >
            Create Post
          </div>
          <div
            className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
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
      ) : (
        <nav className="flex sm:justify-center space-x-4">
          <div
            className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => navigate('/blog')}
          >
            Blog
          </div>
          <div
            className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => {
              navigate('/admin');
            }}
          >
            Admin Login
          </div>
        </nav>
      )}
    </header>
    // <div>
    //   <div className="navbar bg-neutral-focus p-5">
    //     <div className="navbar-start ">
    //       <div className="dropdown">
    //         <label tabIndex="0" className="btn btn-ghost btn-circle">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h7"
    //             />
    //           </svg>
    //         </label>
    //         <ul
    //           tabIndex="0"
    //           className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box bg-neutral-focus border-neutral shadow-2xl shadow-black  w-52"
    //         >
    //           {' '}
    //           {admin ? (
    //             <div>
    //               <li>
    //                 <div onClick={() => navigate('/')}>Homepage</div>
    //               </li>
    //               <li>
    //                 <div onClick={() => navigate('/blog')}>Blog</div>
    //               </li>
    //               <li>
    //                 <div>Current Projects</div>
    //               </li>
    //               <li>
    //                 <div onClick={() => navigate('/write')}>Create Post</div>
    //               </li>
    //               <li>
    //                 <div
    //                   onClick={() => {
    //                     localStorage.clear();
    //                     navigate(`/`);
    //                   }}
    //                 >
    //                   Logout
    //                 </div>
    //               </li>
    //             </div>
    //           ) : (
    //             <div>
    //               <li>
    //                 <div onClick={() => navigate('/')}>Homepage</div>
    //               </li>
    //               <li>
    //                 <div onClick={() => navigate('/blog')}>Blog</div>
    //               </li>
    //               <li>
    //                 <div>Current Projects</div>
    //               </li>
    //               <li>
    //                 <div onClick={() => navigate('admin')}>Admin Login</div>
    //               </li>
    //               <li>
    //                 <div>About</div>
    //               </li>
    //             </div>
    //           )}
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="navbar-center">
    //       <button
    //         className="btn btn-ghost normal-case text-xl"
    //         onClick={() => navigate('/')}
    //       >
    //         Brennan
    //       </button>
    //     </div>
    //     <div className="navbar-end">
    //       <button className="btn btn-ghost btn-circle">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //           />
    //         </svg>
    //       </button>
    //       <button className="btn btn-ghost btn-circle">
    //         <div className="indicator">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //             />
    //           </svg>
    //           <span className="badge badge-xs badge-primary indicator-item"></span>
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
