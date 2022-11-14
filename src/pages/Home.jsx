import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { add, remove } from "../app/CartSlice";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../app/PostSlice";

//Component code starts here
const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(fetchPosts, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <h2 className=' font-bold text-lg'>Welcome to Redux Store</h2>

      <h3 className=' font-bold text-md mt-2 text-center mb-4'>Products:</h3>
      <div className='grid grid-cols-4 gap-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className=' bg-[#f5f5f5] shadow-xl rounded-md flex justify-center gap-4 flex-col items-center '>
            <img
              src={product.image}
              alt={product.title}
              className='mt-3 w-[80px]'
            />
            <h2 className=' font-bold mt-3 w-[80%] text-center'>
              {product.title}
            </h2>
            <p className=' font-medium text-amber-800'>${product.price}</p>
            <button
              onClick={() => {
                handleAdd(product);
              }}
              className='text-white font-medium bg-purple-800 p-2 rounded-lg mb-4'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
