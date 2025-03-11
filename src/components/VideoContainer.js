import React, { useEffect } from 'react';
import { YOUTUBE_POPULAR_API } from '../utils/constants';
const VideoContainer = () => {
  const fetchPopularVideos = async () => {
    const response = await fetch(YOUTUBE_POPULAR_API);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchPopularVideos();
  }, []);
  return <div>VideoContainer</div>;
};

export default VideoContainer;
