import { RiShoppingCartLine } from '@remixicon/react'
import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link, useParams } from 'react-router-dom'

function ProductDetail() {


    const Data=[
        {
            id:1,
            category:"Suppliment",
            title:"Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/mp9qoget2jwnf7u6tjj9.jpg",
            description:{
                1:"Provides antioxidant support and reduce free radicals formed in the body",
                2:"Promotes formation of natural collagen which vitally improves skin health and reduce wrinkles"
            },
            offer: 10,
            count:0,
            price: 1000,
        },
        {
            id:2,
            category:"Suppliment",
            title:"Healthkart HK Vitals Disolve with Marine Collagen & Resveratrol | Strip for Healthy Skin | Flavour Mango",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6433e3a7dfb649e8ba0d81d8a4d1491c.jpg",
            description:{
                1:"Helps replenish the skin’s lost collagen",
                2:"Helps protect the skin from oxidative damage",
                3:"Promotes even skin tone"
            },
            offer: 20,
            count:0,
            price: 449
        },
        {
            id:3,
            category:"Suppliment",
            title:"Power Gummies for Jaw-Dropping Skin with Vitamin C | Gluten Free",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3ab53077d4c44f3c9fdbc83d5d3948b0.jpg",
            description:{
                1:"Reduces sun exposure giving a smooth texture and radiant glow",
                2:"Revitalize the skin building collagen, with reduced pigmentation",
                3:"Reduces acne and skin inflammation",
                4:"Helps brighten with a natural glow",
            },
            offer: 33,
            count:0,

            price: 975
        },
        {
            id:4,   
            category:"Suppliment",
            title:"Swisse Collagen + Hyaluronic Acid | With Vitamin C & E for Anti-Wrinkle Support | Tablet",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e6abfe99bf324feea25a46f383cca8b4.jpg",
            description:{
                1:"Supports collagen formation",
                2:"Maintains skins elasticity and firmness",
                3:"Keep your skin healthy",
            },
            offer: 42,
            count:0,

            price: 962
        },
        {
            id:5,

            category:"Suppliment",
            title:"Nature's Island Hydrolysed Marine Collagen with Vitamin C | For Joints, Skin, Hair & Nails | Flavour Berry Blast",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/a569ab4a9eb843e9b9890f9965b92027.jpg",
            description:{
                1:"Helps in improving the elasticity of the skin which ultimately gives younger- looking feel to the skin",
                2:"It helps in smoother joint functioning and strengthens weak bones which can minimize the risk of future injuries",
                3:"Makes hair strong and imparts shine, improving the overall texture and helps in making fragile nails stronger",
            },
            offer: 10,
            count:0,

            price: 1240
        },
        {
            id:6,
            category:"Suppliment",
            title:"Eur Health Plant Based Collagen Builder Mix Fruit",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/85d94e897a59427aadf99eed6ba02caa.jpg",
            description:{
                1:"Supports healthy skin and hair",
                2:"Helps prevent signs of ageing",
                3:"Supports healthy joints and bones",
                4:"Dietary supplement"
            },
            offer: 25,
            count:0,

            price: 583
        },
        {
            id:7,
            category:"Suppliment",
            title:"Inlife Hydrolyzed Type 1 & 3 Collagen Peptides | Powder for Skin, Joints & Muscles | Blueberry",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/baed73a1b23544248aea1e88e073d2cd.jpg",
            description:{
                1:"Comes in 2 delicious and delectable flavours",
                2:"Each serving offers 10 g of hydrolyzed collagen peptides",
                3:"Supports the healthy growth of hair, nails and skin",
                4:"Helps promote lean muscle building"
            },
            offer: 20,
            count:0,

            price: 899
        },
        {
            id:8,
            category:"Suppliment",
            title:"VedaneQ Collagen Capsule",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/jqjwbayqlojmiyfz2h8a.jpg",
            description:{
                1:"Promotes formation of natural collagen which vitally improves skin health and reduce wrinkles",
                2:"Provides antioxidant support and reduce free radicals formed in the body",
            },
            offer: 5,
            count:0,

            price: 685
        },
        {
            id:9,
            category:"Suppliment",
            title:"Oziva Plant Based Collagen Builder with Vitamin C & Biotin | Effervescent Tablet for Skin Health | Flavour",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c1b3daf7175b446fab7678ae07c8a712.jpg",
            description:{
                1:"Aids in collagen productions",
                2:"Helps to enhance skin health",
                3:"Enhances skin elasticity",
                4:"Provides hydration to the body"
            },
            offer: 32,
            count:0,

            price: 949
        },
        {
            id:10,
            category:"skincare",
            title:"Acne-UV Sunscreen with Broad Spectrum UVA/UVB Protection | Oil Free & Water Resistant | Gel SPF 50",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e30284a0c35441f28a513513a2a10483.jpg",
            description:{
                1:"It is a broad-spectrum sunscreen that protects against UVA and UVB rays by creating a physical and chemical barrier to sunlight",
                2:"It helps to protect from tanning and sunburns",
                3:"It delays premature ageing and maintains the texture of your skin",
                4:"It is a non-comedogenic and oil-free formula that does not clog your pores"
            },
            offer: 6,
            count:0,
            price: 863,
        },
        {
            id:11,
            category:"skincare",
            title:"Photostable Gold Matte Finish Sunscreen Gel | PA+++ SPF 55",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/x6glemtu4whgp6c4iw91.jpg",
            description:{
                1:"Enriched with antioxidants and Vitamin E",
                2:"Helps delay premature skin ageing",
                3:"Hypoallergenic, non-comedogenic, and sweat-resistant"
            },
            offer: 20,
            count:0,
            price: 823
        },
        {
            id:12,
            category:"skincare",
            title:"Sesderma Azelac RU Liposomal Serum with Tranexamic Acid Booster | For Skin Depigmentation",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/88216bf6e3694ff9a66125b4045e9373.jpg",
            description:{
                1:"Helps prevent the formation of blemishes",
                2:"Clarifies and reduces existing blemishes",
                3:"Makes the skin soft and smooth",
                4:"Suitable for all skin types",
            },
            offer: 5,
            count:0,

            price: 2650
        },
        {
            id:13,
            category:"skincare",
            title:"Episoft AC Sunscreen SPF 30 | Lightweight & Paraben-Free Cream",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/0b4c977dd3084bc7888e2d0a289f02fd.jpg",
            description:{
                1:"It has been dermatologically tested, irritation-free and paraben-free cream",
                2:"It is a skin moisturiser that could also work as a sunscreen",
                3:"It can be suitable for acne-prone skin",
                4:"Provides broad spectrum protection against both UVA and UVB rays"
            },
            offer: 12,
            count:0,

            price: 540
        },
        {
            id:14,
            category:"skincare",
            title:"C-Vit Facial Liposomal Serum",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/21e177529079430cab79f5055e8587a5.jpg",
            description:{
                1:"Makes the skin radiant and luminous",
                2:"Provides antioxidant effect against radicals",
                3:"Fights signs of ageing and fatigue",
                4:"Improves skin tone and complexion"
            },
            offer: 10,
            count:0,

            price: 2850
        },
        {
            id:15,
            category:"skincare",
            title:"Cetaphil Moisturising Lotion with Avocado Oil, Vitamin E, B3 & B5 | For Normal to Combination, Sensitive Skin",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/b52913282bb04d18bcabdde6431b001b.jpg",
            description:{
                1:"Moisturizes without leaving residue that can clog pores",
                2:"Suitable for all skin types",
                3:"Mild, non-irritating formulation that soothes skin",
            },
            offer: 15,
            count:0,

            price: 1439
        },
        {
            id:16,
            category:"skincare",
            title:"UV Doux Silicone Sunscreen Gel SPF 50 PA+++ | Oil-Free, Matte Finish & Water-Resistant",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/b136454dfe29475fb31ee05e6cae380f.jpg",
            description:{
                1:"Non irritant, preservative free sunscreen gel",
                2:"Broad protection against both UVA/UVB radiations",
                3:"Provides a matte finish and inhibits formation of radicals",
                4:"Helps in blocking almost 98% of UVB rays"
            },
            offer: 6,
            count:0,

            price: 699
        },
        {
            id:17,
            category:"skincare",
            title:"Cetaphil DAM Daily Advance Ultra-Hydrating Lotion | For Continuously Dry, Sensitive Skin",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/62ee5a32eff740818ad0e4649773fff5.jpg",
            description:{
                1:"Helps restore and retain the skin’s moisture",
                2:"Instantly nourishes and hydrates dry skin",
                3:"Provides 48-hour hydration for all skin types"
            },
            offer: 5,
            count:0,

            price: 685
        },
        {
            id:18,
            category:"skincare",
            title:"La Shield SPF 40 Sunscreen | Broad Spectrum UVA/UVB Protection Gel",
            image:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pyi9q0yr37l1559kkprm.jpg",
            description:{
                1:"Provides effective sun protection",
                2:"Helps to protect the skin from UVA and UVB rays",
                3:"Facilitates oil-free effect",
                4:"Suitable for all skin types"
            },
            offer: 15,
            count:0,

            price: 689
        },
        
    ]    

    const id = useParams();
    const filterdata = Data.filter((item)=>item.id==id.id)
    

    const addToCart = () => {
        // Get the existing cart items from local storage or initialize an empty array
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if the item with the same ID already exists in the cart
        const existingItemIndex  = existingCartItems.findIndex(item => item.id === filterdata[0].id);
    
        if (existingItemIndex !== -1) {
            // If the item exists, increment its count value
            existingCartItems[existingItemIndex].count += 1;
        } else {
            // If the item doesn't exist, add it to the cart items array with count 1
            existingCartItems.push({ ...filterdata[0], count: 1 });
        }
        
        // Update the cart items in local storage
        localStorage.setItem('cart', JSON.stringify(existingCartItems));
        
    };
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
      );
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
      <div className="w-full flex items-center justify-center h-[90vh] ">
        <div className="w-[30%] h-full flex items-center justify-center">
            <img src={filterdata[0].image} alt="" />
        </div>
        <div className="w-[30%] h-full pt-[20vh]  ">
            <p className='font-semibold text-2xl'  >{filterdata[0].title}</p>
            <br />
            <p>Product Highlights</p>
            {
    filterdata[0] && filterdata[0].description && Object.values(filterdata[0].description).map((item, index) => (
        <li key={index}>{item}</li>
    ))
}
    <br />
        <p className='text-2xl' >Rs.{filterdata[0].price}</p>
        <br />
        <div className="w-full flex items-center justify-center">
            
        <button onClick={addToCart} className='px-5 py-2 bg-green-300 rounded-xl' >Add To Cart</button>

        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail