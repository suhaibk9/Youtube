import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 text-black rounded-lg text-sm font-medium hover:bg-gray-300 active:bg-gray-400">
      {name}
    </button>
  );
};

export default Button;
