import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RiShoppingCartLine } from '@remixicon/react';
import { Link } from 'react-router-dom';
function Cart() {

  // Get cart items from local storage or initialize an empty array
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  // Update local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Increment item count
  const handleIncrement = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  // Decrement item count
  const handleDecrement = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.count > 0 ? { ...cartItem, count: cartItem.count - 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };
 

// Get the cart items from local storage and parse them into an array
const cart = localStorage.getItem('cart');
const cartItemss = cart ? JSON.parse(cart) : [];

// Object to store cart items grouped by product ID
const cartByProductId = [];

// Group cart items by product ID and store the total count inside each array
cartItemss.forEach(item => {
  if (!cartByProductId[item.id]) {
    // If the product ID doesn't exist in the cartByProductId object, create a new array
    cartByProductId[item.id] = [{ ...item, totalCount: 1 }];
  } else {
    // If the product ID exists, increment the total count and update the array
    cartByProductId[item.id][0].totalCount += 1;
  }
});

// Output the cart items grouped by product ID with total count
console.log(cartByProductId);
// Calculate total bill amount
const totalBill = cartItems.reduce((total, item) => total + (item.price * item.count), 0);

const totalItems = cartItems.reduce((total, item) => total + item.count, 0);
  return (
    <div>
                      <div className="w-full fixed bg-white z-50  border-b-2 p-2  flex justify-between  ">
        <div className="p-2">
          <img className="w-32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TATA_1mg_Logo.svg/1024px-TATA_1mg_Logo.svg.png" alt="" />
        </div>
        <div className="flex gap-8 pt-2 uppercase font-bold ">
          <p>Medicines</p>
          <p>Lab Tests</p>
          <p>Consult Doctors</p>
          <p>Cancer care</p>
          <p>Ayurveda</p>

        </div>
        <div className="flex  gap-5 pt-2 pr-5">
        <Link to="/cart">

    <div className="">
    <RiShoppingCartLine
            size={30} // set custom `width` and `height`
            className="my-icon" // add custom class name
        />
        <span className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ">{totalItems}</span>
    </div>
        </Link>
        </div>
      </div><br /><br />  <br />
      <div className="flex">
<div className="p-16 pl-32">
    <p  className='font-semibold text-xl' >Cart Items</p>
    <br /><br />
    <div className="flex flex-col gap-5  w-[60vw] ">
    {cartByProductId.map((item,index)=>(
        <div key={index} className="flex h-[20vh]">
            <div className="w-[30%] flex items-center justify-center ">
                <img className='w-20 ' src={item[0].image} alt="" />
            </div>
            <div className="w-[50%]">
                <p className='font-semibold text-xl' >{item[0].title}</p>
                <br />
                <p className='decoration-' >Rs. {item[0].price}</p>
            </div>
            <div className="w-[20%] ">
                <p className='text-xl font-semibold'>Rs. {(item[0].count)*(item[0].price)}</p><br />
                <div className=" flex justify-between border-2 px-5 py-1 rounded-xl text-red-500 border-red-500 w-[7vw] items-center ">
                <button className='text-3xl mt-[-1vh]' onClick={() => handleDecrement(item[0])} >-</button>
<span className='text-xl'>{item[0].count}</span>
<button className='text-3xl mt-[-1vh]' onClick={() => handleIncrement(item[0])} >+</button>                </div>
            </div>
        </div>
    ))}
    </div>
</div>
    <div className=" pt-32">
      <div className="flex justify-between w-[20vw]">
      <p className='font-semibold text-2xl ' >Bill Summary</p>
      <p className='font-semibold text-2xl ' > Rs. {totalBill} </p>
      </div> <br /><br />
      <div className="flex w-[20vw] items-center justify-center ">
      <button className='px-3 border-2 bg-red-400 text-white py-2 rounded-xl ' >Proceed To pay</button>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Cart