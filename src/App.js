// src/App.js
import React from 'react';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';

import { toggleSideBar } from './utils/appSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './utils/store';

const App = () => {
  const isSideBarOpen = useSelector((state) => state.appSlice.isSideBarOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(toggleSideBar());
  };
  return (
    <>

      <Head handleOpen={handleOpen} />
      <Body open={isSideBarOpen} />
    </>
  );
};

export default App;
