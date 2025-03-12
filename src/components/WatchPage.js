import React from 'react';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../utils/appSlice';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const useVideoId = () => {
  const location = useLocation();
  return new URLSearchParams(location.search).get('v');
};

const WatchPage = () => {
  const videoId = useVideoId();
  console.log(videoId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className='ml-2'>
      <iframe
        width="1100"
        height="700"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
