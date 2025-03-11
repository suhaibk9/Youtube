import React from 'react';
import Button from './Button';
const list = ['All', 'Comedy', 'Horror', 'Romance', 'Cricket', 'Football'];
const ButtonList = () => {
  return (
    <div className="flex space-x-4 p-4">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
