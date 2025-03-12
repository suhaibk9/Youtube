// import React, { Component } from 'react';
// const VideoCard = ({ video }) => {
//   const { snippet, statistics } = video;
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       <img
//         className="w-full h-40 object-cover"
//         src={snippet.thumbnails.high.url}
//         alt={snippet.title}
//       />
//       <div className="p-3">
//         <h3 className="text-sm font-bold line-clamp-2">{snippet.title}</h3>
//         <p className="text-gray-600 text-xs">{snippet.channelTitle}</p>
//         <p className="text-gray-500 text-xs">{statistics.viewCount} views</p>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;
import React from 'react';

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;

  // Format view count (e.g., 1234567 -> "1.2M views")
  const formatViews = (views) => {
    const num = parseInt(views, 10);
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M views`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K views`;
    return `${num} views`;
  };

  // Format published date (e.g., "2 days ago")
  const formatDate = (dateString) => {
    const now = new Date();
    const published = new Date(dateString);
    const diffInMs = now - published;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  return (
    <div className="w-full max-w-[360px] shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg bg-white">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={snippet.thumbnails.high.url}
          alt={snippet.title}
        />
      </div>

      {/* Video Info */}
      <div className="pt-3 pb-2 px-3">
        {/* Title */}
        <h3 className="text-[16px] font-medium text-black line-clamp-2 leading-tight mb-1">
          {snippet.title}
        </h3>

        {/* Channel Name */}
        <p className="text-[13px] text-gray-600 hover:text-gray-800">
          {snippet.channelTitle}
        </p>

        {/* Metadata (Views and Time) */}
        <p className="text-[12px] text-gray-500">
          {formatViews(statistics.viewCount)} •{' '}
          {formatDate(snippet.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;