import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=' flex justify-between p-7 items-center'>
        <Link to='/'>
          <h2 className=' font-bold text-lg'>Redux Store</h2>
        </Link>

        <menu className=' flex gap-4 items-center'>
          <Link to='/'>
            <li className=' text-purple-500 font-medium'>Home</li>
          </Link>

          <Link to='/cart'>
            <li className=' text-purple-500 font-medium'>Cart</li>
          </Link>

          <li className=' text-white p-2 rounded-md font-medium bg-blue-500'>
            Card items: 0
          </li>
        </menu>
      </nav>
    </>
  );
};

export default Navbar;
