import React from 'react'
import "../../public/style/style.css"
import { Link } from 'react-router-dom';

function Suppliment() {
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
            price: 1000,
            offer: 10,
            count:0,
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

        
    ]
  return (
    <div>
        <div className="w-full h-fit p-5 pl-44 mt-5 text-2xl">
<p>Collagen | supplement of the week</p>
      </div>
      <div className=" supliment flex h-[50vh] p-10 gap-10 overflow-x-scroll bg-white ">
            {(Data.map((item,index)=>{
                return(
                    <Link  key={index} to={`/product/${item.id}`} className="h-full w-[12vw] shrink-0">
                    <div className="h-full w-[12vw] shrink-0">
            <div className="w-full flex items-center justify-center h-[60%] p-10">
                <img className='w-[100%]  object-fill' src={item.image} alt="" />
            </div><br />
            <p className='break-words text-ellipsis overflow-hidden whitespace-normal h-12 font-semibold mb-5'  >{item.title}</p>
            <p className='text-xs font-semibold text-green-600 ' >{item.offer} % off</p>
            <p>Rs.{item.price}</p>
            
        </div>
        </Link>
                )
            }))}
      </div>
    </div>
  )
}

export default Suppliment