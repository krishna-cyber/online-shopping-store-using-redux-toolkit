import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//use store to get the how many items in the cart

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <nav className=' bg-[#f5f5f5] flex justify-between p-2 items-center sticky top-0 rounded-lg'>
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

          <Link
            to='/cart'
            className=' text-white p-2 rounded-md font-medium bg-blue-500'>
            Card items: {items.length}
          </Link>
        </menu>
      </nav>
    </>
  );
};

export default Navbar;
