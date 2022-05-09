import React from 'react';
import './App.css';
import Routing from './Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from './components';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ToastContainer />
      <Routing />
    </div>
  );
};

export default App;
