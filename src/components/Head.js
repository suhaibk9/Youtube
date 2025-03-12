// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { toggleSideBar } from '../utils/appSlice';
// import { YOUTUBE_SEARCH_API } from '../utils/constants';
// const Head = () => {
//   const dispatch = useDispatch();
//   const [suggestions, setSuggestions] = React.useState([]);
//   const [query, setQuery] = React.useState('');
//   const toggle = () => {
//     dispatch(toggleSideBar());
//   };
//   const searchYoutube = async () => {
//     console.log('QUERY URL', `${YOUTUBE_SEARCH_API}${query}`);
//     const response = await fetch(`${YOUTUBE_SEARCH_API}${query}`);
//     const data = await response.json();
//     if (data.message === 'success') {
//       console.log('DATA', data.data[1]);
//       setSuggestions(data.data[1]);
//     }
//   };
//   useEffect(() => {
//     if (query === '') return;
//     //Debounce
//     const timer = setTimeout(() => {
//       searchYoutube();
//     }, 200);
//     return () => clearTimeout(timer);
//   }, [query]);
//   const handleQuery = (e) => {
//     setQuery(e.target.value);
//   };
//   return (
//     <div className="grid grid-flow-col p-4 m-2 shadow-lg">
//       <div className="flex col-span-1">
//         <img
//           onClick={toggle}
//           className="h-8 w-8 mr-2 hover:bg-gray-100 rounded-full cursor-pointer"
//           alt="menu"
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
//         />

//         {/* <Link to="/"> */}
//         <a href="/">
//           <img
//             className="h-8 w-25"
//             alt="logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
//           />
//         </a>
//         {/* </Link> */}
//       </div>
//       <div className="flex col-span-10 justify-center">
//         <div className="flex border border-gray-300 rounded-full overflow-hidden w-[45%]">
//           <input
//             type="text"
//             value={query}
//             onChange={handleQuery}
//             placeholder="Search"
//             className="w-full px-4 py-2 outline-none"
//           />
//           <button className="px-4 bg-gray-100 hover:bg-gray-200">🔍</button>
//         </div>
//         <div>
//           <ul>
//             {suggestions.length > 0 &&
//               suggestions.map((suggestion, index) => (
//                 <li key={index}>{suggestion}</li>
//               ))}
//           </ul>
//         </div>
//       </div>
//       <div className="flex col-span-1">
//         <img
//           className="h-8 w-8"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
//           alt="user"
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggle = () => {
    dispatch(toggleSideBar());
  };

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`${YOUTUBE_SEARCH_API}${query}`);
        const data = await response.json();
        if (data.message === 'success') {
          setSuggestions(data.data[1]);
        }
      } catch (error) {
        console.error('Error fetching suggestions', error);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative grid grid-flow-col p-4 m-2 shadow-lg">
      {/* Left Section */}
      <div className="flex col-span-1">
        <img
          onClick={toggle}
          className="h-8 w-8 mr-2 hover:bg-gray-100 rounded-full cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8 w-25"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      {/* Search Bar - Centered */}
      <div className="flex col-span-10 justify-center relative">
        <div className="relative w-[40%]">
          <div className="flex border border-gray-300 rounded-full overflow-hidden bg-white">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search"
              className="w-full px-4 py-2 outline-none"
            />
            <button className="px-4 bg-gray-100 hover:bg-gray-200">🔍</button>
          </div>

          {/* Suggestion Box - Now Centered Below Search Bar */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setQuery(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex col-span-1">
        <img
          className="h-8 w-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
