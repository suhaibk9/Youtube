import React, { useState, useRef } from 'react';
import Button from './Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const list = [
  'All',
  'Comedy',
  'Horror',
  'Romance',
  'Cricket',
  'Football',
  'Gaming',
  'Music',
  'Live',
  'News',
  'Movies',
  'Technology',
  'Fashion',
  'Travel',
  'Food',
  'Education',
  'Sports',
  'Science',
  'Health',
  'Motivation',
  'Business',
  'DIY',
  'Cars',
  'Pets',
  'Animation',
  'Photography',
];

const ButtonList = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollHandler = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 200;

      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }

      setTimeout(() => {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft + container.clientWidth < container.scrollWidth
        );
      }, 200);
    }
  };

  return (
    <div className="relative flex items-center w-full px-4">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scrollHandler('left')}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
      )}

      {/* Scrollable List */}
      <div
        ref={scrollRef}
        className="flex space-x-4 p-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
      >
        {list.map((item) => (
          <Button key={item} name={item} />
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scrollHandler('right')}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
