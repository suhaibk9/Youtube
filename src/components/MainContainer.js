// import React from 'react';
// import ButtonList from './ButtonList';
// import VideoContainer from './VideoContainer';

// const MainContainer = () => {
//   return (
//     <div className='col-span-10'>
//       <ButtonList />
//       <VideoContainer />
//     </div>
//   );
// };

// export default MainContainer;

import React, { useEffect } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useDispatch } from 'react-redux';
import { openSideBar } from '../utils/appSlice';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openSideBar());
  }, []);
  return (
    <div className=" overflow-y-auto">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
