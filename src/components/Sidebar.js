import React from 'react';

const Sidebar = () => {
  return (
    <div className="p-4 shadow-lg col-span-2 w-60 bg-white h-screen">
      <ul className="pb-2 text-[15px] font-medium">
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🏠 Home
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🔥 Trending
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🎥 Live
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🎬 Shorts
        </li>
      </ul>
      <h1 className="font-bold mt-4 mb-2 text-gray-700 text-sm">
        Subscriptions
      </h1>
      <ul className="pb-2 text-[15px] font-medium">
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🎵 Music
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🏅 Sports
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🎮 Gaming
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🎞️ Movies
        </li>
      </ul>
      <h1 className="font-bold mt-4 mb-2 text-gray-700 text-sm">
        More from YouTube
      </h1>
      <ul className="pb-2 text-[15px] font-medium">
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          💎 YouTube Premium
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          📡 Live
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          📖 Learning
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🎼 YouTube Music
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          🎬 YouTube Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
