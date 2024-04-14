import { RiSearchLine, RiShoppingCartLine } from '@remixicon/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import  axios from "axios";
import Suppliment from './Suppliment';
import SkinCare from './SkinCare';


function Home() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <div  className='bg-[#F6F6F6]'  >
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
        <div className="">
          <Link  >Login</Link> | <Link  >SignUp</Link>
        </div>
        <Link to='/cart'>
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
      <div className="w-full flex items-center justify-center">
        <div className="mt-5 border-2 flex items-center pr-5 border-gray-200">
          <input className=' pl-2 w-[60vh] h-10 outline-none ' type="text" placeholder='search for medicines and health products' />
          <RiSearchLine
            size={20} // set custom `width` and `height`
            className="my-icon text-gray-500" // add custom class name
        />
        </div>
      </div>
      <div className="w-full flex mt-5 h-[30vh]">
        <div className="w-[65%] h-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/8427bb90-4ab8-4867-bf49-793b7fc30b94_1712919154.png?w=1024&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/f50cdcfd-2c10-4d95-acbb-53a6dd4816e2_1700120354.png?w=1013&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/3bae5085-de99-4170-b411-06118f562649_1711117731.jpg?w=1024&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/3d64dd10-ba44-4ed2-a6b2-18416434f0c0_1707730034.jpg?w=1024&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/9bbd3b5d-aebb-475c-8c7c-e9fec1e0450b_1712919259.png?w=1024&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/49c3d7f4-2c53-4785-a537-ffffe0b4910c_1711087711.png?w=1024&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/397c1135-c26a-46bd-bede-22d767f35064_1712216663.jpg?w=1013&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/e0686aa4-1aab-4f47-a576-696dcec8cf12_1709298575.png?w=1024&h=250&format=auto" alt="" /></SwiperSlide>
        <SwiperSlide className='w-full h-full '  ><img className='h-full w-full object-cover' src="https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=1024&h=250&format=auto" alt="" /></SwiperSlide>
      </Swiper>
        </div>
        <div className="w-[35%] h-full ">
          <img className='h-full w-full object-cover' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712845533_Range_1948x800.png" alt="" />
        </div>
      </div>
      <div className="w-full text-center mt-5 text-2xl text-gray-500">
        <p>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</p>
      </div>
      <div className=" w-full mt-5 flex items-center justify-center">
        <img className='w-[80%]' src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" alt="" />
      </div>
      <div className="w-full h-fit p-5 pl-44 mt-5 text-2xl">
<p>Shop by health concerns</p>
      </div>
      <div className="w-full h-56 flex items-center justify-center">
        <div className="w-[90%] flex items-center justify-evenly   h-full shadow-2xl border-2">
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl">
            <img className='w-32' src="https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto" alt="" />
            <p className='text-center'  >Diabetes</p>
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto" alt="" />
            <p className='text-center'  >Heart Care</p>
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto" alt="" />
            <p className='text-center'  >Stomach Care</p>
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto" alt="" />
            <p className='text-center'  >Liver Care</p>
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto" alt="" />
            <p className='text-center'  >Bone Joint & <br /> Muscle care</p>
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-full hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto" alt="" />
            <p className='text-center'  >Kidney care</p>
          </div>
          
        </div>
      </div>
      <div className="w-full h-fit p-5 pl-44 mt-5 text-2xl">
<p>Featured brands</p>
      </div>
      <div className="w-full h-56 flex items-center justify-center ">
        <div className="w-[90%] flex items-center justify-evenly bg-white  h-full shadow-2xl border-2 shado">
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl">
            <img className='w-32' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712900523_Optimum+Nutrition.png?format=auto" alt="" />
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712900537_MuscleBlaze.png?format=auto" alt="" />
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712900549_Dabur.png?format=auto" alt="" />
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712900562_Kapiva.png?format=auto" alt="" />
          </div>
          <div className="w-[12%] flex flex-col items-center  justify-center h-[95%] hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712900583_Dr.+vaid.png?format=auto" alt="" />
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-full hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712900592_Accu+Chek.png?format=auto" alt="" />
          </div>
          <div className="w-[12%] flex flex-col items-center justify-center h-full hover:shadow-2xl ">
            <img className='w-32' src="https://onemg.gumlet.io/diagnostics%2F2024-04%2F1712900607_Morepen.png?format=auto" alt="" />
          </div>
          
        </div>
      </div>
        
      <Suppliment/>
      <SkinCare/><br /><br /><br />
      <div className="p-10 bg-white">
        <p className='font-semibold text-xl' >Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</p>
        <p className='font-semibold text-lg mt-5'>We Bring Care to Health.</p>
        <p className='text-lg mt-5 text-gray-600' >Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.</p>
        <p className='font-semibold text-lg mt-5'>Tata 1mg: Your Favourite Online Pharmacy!</p>
        <p className='text-lg mt-5 text-gray-600' >Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines.</p>
        <p className='text-lg mt-5 text-gray-600' >With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.</p>
        <p className='text-lg mt-5 text-gray-600' >In case you need assistance, just give us a call and we will help you complete your order.</p>
        <p className='text-lg mt-5 text-gray-600' >And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.</p>
        <p className='text-lg mt-5 text-gray-600' >Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.</p>
        <p className='font-semibold text-lg mt-5'>The Feathers in Our Cap</p>
        <p className='text-lg mt-5 text-gray-600' >At Tata 1mg, our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, and have come a long way since then. Along the way, we have been conferred with prestigious titles like BML Munjal Award for 'Business Excellence through Learning and Development', Best Online Pharmacy in India Award and Top 50 venture in The Smart CEO-Startup50 India. We have been selected as the only company from across the globe for SD#3 "Health & Well Being for all" by Unreasonable group, US State Department. In 2019 alone we received three awards including the BMW Simply Unstoppable Award.</p>
        <p className='font-semibold text-lg mt-5'>The Services We Offer</p>
        <p className='text-lg mt-5 text-gray-600' >Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.</p>
        <p className='text-lg mt-5 text-gray-600' >We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.</p>
        <p className='text-lg mt-5 text-gray-600' >Visit our online medical store now, and avail online medicine purchase at a discount.
Stay Healthy!</p>




      </div>
    </div>
  )
}

export default Home