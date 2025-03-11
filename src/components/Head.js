import React from 'react';

const Head = ({ handleOpen }) => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={handleOpen}
          className="h-8 w-8 mr-2 hover:bg-gray-100 rounded-full cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />
        <img
          className="h-8 w-25"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="flex col-span-10 justify-center">
        <div className="flex border border-gray-300 rounded-full overflow-hidden w-[45%]">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 outline-none"
          />
          <button className="px-4 bg-gray-100 hover:bg-gray-200">🔍</button>
        </div>
      </div>
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
