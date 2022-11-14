import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//use store to get the how many items in the cart

const Navbar = () => {
  const items = useSelector((state) => state.cart);
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
