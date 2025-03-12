import React, { useEffect, useState } from 'react';

import VideoCard from './VideoCard';

import { YOUTUBE_POPULAR_API } from '../utils/constants';
import ShimmerCard from './ShimmerCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPopularVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_POPULAR_API);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {loading
        ? [...Array(12)].map((_, index) => <ShimmerCard key={index} />)
        : videos.map((video) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <VideoCard key={video.id} video={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
