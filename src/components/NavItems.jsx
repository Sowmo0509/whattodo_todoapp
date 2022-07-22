import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="nav flex pb-8 justify-between items-center">
      <Link to="/">
        <h1 className="text-white font-bold text-xl cursor-pointer transition opacity-60 hover:-translate-y-2 hover:opacity-100">WhatToDo.</h1>
      </Link>
      <Link to="/add">
        <i class="fas fa-plus animate-pulse text-white p-2.5 border cursor-pointer rounded-full opacity-60 hover:-translate-y-2 hover:opacity-100 transition"></i>
      </Link>
    </div>
  );
};

export default NavItems;
