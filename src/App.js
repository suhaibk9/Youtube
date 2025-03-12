// // src/App.js
// import React from 'react';
// import './App.css';
// import Head from './components/Head';
// import Body from './components/Body';

// import { toggleSideBar } from './utils/appSlice';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import store from './utils/store';

// const App = () => {
//   const isSideBarOpen = useSelector((state) => state.appSlice.isSideBarOpen);
//   const dispatch = useDispatch();
//   const handleOpen = () => {
//     dispatch(toggleSideBar());
//   };
//   return (
//     <>

//       <Head handleOpen={handleOpen} />
//       <Body open={isSideBarOpen} />
//     </>
//   );
// };

// export default App;
import React from 'react';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';

import { toggleSideBar } from './utils/appSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
const App = () => {
  const isSideBarOpen = useSelector((state) => state.appSlice.isSideBarOpen);
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Body open={isSideBarOpen} />
        </>
      ),
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: '/watch',
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Head  />
      <div
        className={` ${
          isSideBarOpen ? 'ml-64' : 'ml-0'
        } transition-all duration-300`}
      >
        {/* Body (and Sidebar) */}
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export default App;
