import React, { useState, useEffect } from 'react';
import { PageNotFound } from '.';

const token = process.env.REACT_APP_JWT_SECRET;

const AdminCalanderAndToDos = () => {
  const admin = localStorage.getItem(token);


  return admin ? (
    <div className='bg-white'>
     <div>
       <h1>React-O</h1>
     </div>
    </div>
  ) : (
    <PageNotFound />
  );
};

export default AdminCalanderAndToDos;
