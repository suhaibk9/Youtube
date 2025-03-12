import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Head from './Head';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Body = () => {
  const open = useSelector((state) => state.appSlice.isSideBarOpen);
  
  return (
    <div className="grid grid-flow-col">
      {open && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
