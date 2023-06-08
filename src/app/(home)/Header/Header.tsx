import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col w-full h-[3.5em] bg-slate-300 bg-opacity-5 border-b-[1px] border-gray-500 border-opacity-20 justify-center items-center ">
      <div className="w-11/12 flex justify-between">
        <p className="text-white font-medium text-sm">Active Issues</p>
      </div>
    </div>
  );
};

export default Header;
