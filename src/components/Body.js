import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Head from './Head';
import MainContainer from './MainContainer';
const Body = ({ open }) => {
  return (
    <div className="grid grid-flow-col">
      {open && <Sidebar />}
      <MainContainer />
    </div>
  );
};

export default Body;
