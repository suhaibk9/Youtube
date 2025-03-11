// src/App.js
import React from 'react';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Head handleOpen={handleOpen} />
      <Body open={open} />
    </>
  );
};

export default App;
