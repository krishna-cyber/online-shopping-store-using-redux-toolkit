import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../app/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  return (
    <>
      <h1 className=' font-bold text-2xl'>Cart</h1>
      <div className=' flex flex-col gap-4'>
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className=' flex justify-between items-center p-4 border border-gray-300 rounded-md'>
              <div className=' flex gap-4 items-center'>
                <img
                  src={item.image}
                  alt={item.title}
                  className=' w-20 h-20 object-cover'
                />
                <div className=' flex flex-col gap-1'>
                  <h2 className=' font-bold text-lg'>{item.title}</h2>
                  <p className=' text-gray-500'>${item.price}</p>
                </div>
              </div>
              <div className=' flex gap-4 items-center'>
                <button
                  onClick={() => {
                    handleRemove(item.id);
                  }}
                  className=' p-2 rounded-md bg-blue-500 text-white'>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className=' font-bold text-2xl'>No items in the cart</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
