import React from 'react'
import "../../public/style/style.css"
import { Link } from 'react-router-dom';

function SkinCare() {
    const Data=[
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
                <img className='w-[80%]  object-cover' src={item.image} alt="" />
            </div><br />
            <p className='break-words text-ellipsis overflow-hidden whitespace-normal h-12 font-semibold mb-5'  >{item.title}</p>
            <p className='text-xs font-semibold text-green-600 ' >{item.offer} % off</p>
            <p>{item.price}</p>
            
        </div>
        </Link>
                )
            }))}
      </div>
    </div>
  )
}

export default SkinCare