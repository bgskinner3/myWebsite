import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center mt-36 ">
      <div className="justify-center items-center">
        <svg className="ml-6 animate-bounce w-16 h-16 text-netural ...">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </svg>
        <p className="visually-hidden neutral-content p-5 text-2xl">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
