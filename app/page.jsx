
import Image from 'next/image';
import Link from 'next/link';

import PromptCard from '@/components/PromptCard';
import Homepage from "@/public/assets/images/homepage.jpg";
import grid from "public/assets/images/9.jpg"
import wardrobeimg from "public/assets/images/bilal-mansuri-RHARVor_ydc-unsplash.jpg"
import chair from "public/assets/images/steve-johnson-MqP5vi4IuSU-unsplash.jpg"
import bed from "public/assets/images/deconovo-gVKmonDbotU-unsplash.jpg"
import table from "public/assets/images/side-view-cup-coffee-small-round-table-horizontal.jpg"
import phone from "public/assets/images/PngItem_202171.png"
import email from "public/assets/images/NicePng_email-icon-white-png_2226601.png"
import facebook from "public/assets/images/NicePng_facebook-logo-png_4625.png"
import instagram from "public/assets/images/NicePng_instagram-png-logo_51215.png"

const Home = () => {
  return (
    <section className="w-screen font-Poppins  bg-white flex-col select-none overflow-x-hidden">
      
    <section className=' bg-black'>
    <Image className='h-full  w-full'
      src= {Homepage}
      alt= 'homeimage'
      width ={800}
      height={300}
      
    />
    </section>
    
    {/* Created to create thr illusion on gradient */}
    <section className=' w-screen h-[460px] absolute top-6 bg-gradient-to-t from-neutral-100 to-transparent md:bg-gradient-to-r md:from-neutral-100 md:to-transparent md:h-[911px]'>
  
    </section>

      {/*header of our customisation website*/}
     <p className='font-bold text-5xl mt-[90px] app'>Create custom-made furniture online:</p>
      
    <div className='app flex w-full md:flex-row gap-4 '>
    <PromptCard/>
    <PromptCard/>
    <PromptCard/>
    <PromptCard/>
    </div>

{/* Table Section */}
    <section className=' flex app w-full md:flex-row gap-20 '>
    <section className=' hover:scale-95 duration-300 bg-amber-300 mt-28 w-[580px] h-[300px]'>
    <Image className='ml-[22px] -mt-5 w-[580px] h-[300px] hover:relative duration-300 hover:scale-95'
        src={table}
        alt='table'
    /> 
    </section>
    

    <section className=' mr-48 ml-12 w-96'>
    <p className='font-bold text-[33px]  mt-[70px]'>Tables</p>
    <p className='mt-[50px] text-[15px] font-serif'>Discover timeless elegance with our stylish table collection.  
    From sleek and modern design, our tables are the perfect addition to any space. 
    Create the table of your dreams with our furniture customization platform, that brings your vision to life and watch your space transform with a table that's truly one-of-a-kind. 
    Start customizing today and make your home a reflection of your style and personality.
    </p>

    <div className='mt-[20px] text-[15px] font-serif '>
      <ul className='list-disc' >
        <li className='ml-[19px]'>A variety of wood types to the finish and textures </li>
        <li className='ml-[19px]'> Different shapes and sizes</li>
        <li className='ml-[19px]'> Integrated Drawers</li>
      </ul>
    </div>

    <button className=' font-serif bg-black text-white mt-[50px] w-[250px] h-[60px]
     text-[15px] hover:scale-105 duration-300'>

    <Link href="/pages/customizer/tables" className=' w-full'>
      Open Configurator
    </Link>
     
      </button>
    </section>

  {/* Chairs */}
    </section>
    <section className=' flex app w-full md:flex-row-reverse'>
    <section className=' hover:scale-95 duration-300 bg-amber-300 mt-28 w-[580px] h-[300px]'>
    <Image className='ml-[22px] -mt-5 w-[580px] h-[300px] hover:relative duration-300 hover:scale-95'
        src={chair}
        alt='grid'
    /> 
    </section>


  
    <section className=' mr-48 ml-12 w-96 '>
    <p className='font-bold text-[33px]  mt-[70px]'>Chairs</p>
    
    <p className='mt-[50px] text-[15px] font-serif'> Our stylish chair models offers you the option to modify one of our available designs by giving you the option to:
    </p>

    <div className='mt-[20px] text-[15px] font-serif'>
      <ul className='list-disc' >
        <li className='ml-[19px]'><span className='font-bold '>Dimensions:</span> Choose the size in terms of height and width </li>
        <li className='ml-[19px]'><span className='font-bold '>Material and Texture:</span> Select from a variety of texture that suits you </li>
        <li className='ml-[19px]'><span className='font-bold '>Colour:</span> Choose from different colours</li>
        
      </ul>
    </div>

    <button className=' font-serif bg-black text-white mt-[50px] w-[250px] h-[60px] text-[15px] hover:scale-105 duration-300'>
    <Link href="/pages/customizer/chairs" className=' w-full'>
      Open Configurator
    </Link>
      </button>
    </section>

    </section>

  {/* Wardrobes */}
    <section className=' flex app w-full md:flex-row gap-16'>
    <section className=' hover:scale-95 duration-300 bg-amber-300 mt-28 w-[580px] h-[300px]'>
    <Image className='ml-[22px] -mt-5 w-[580px] h-[300px] hover:relative duration-300 hover:scale-95'
        src={wardrobeimg}
        alt='grid'
    /> 
    </section>

  
    <section className=' mr-48 ml-12 w-96'>
    <p className='font-bold text-[33px]  mt-[70px]'>Wardrobes</p>
    
    <p className='mt-[50px] text-[15px] font-serif'>Choose from a spectrum of materials, colors,
     patterns, and finishes to craft a wardrobe that perfectly complements your space and taste. This can be achieved with just a few clicks.
    </p>

    <div className='mt-[20px] text-[15px] font-serif'>
      <ul className='list-disc' >
        <li className='ml-[19px]'><span className='font-bold '>Dimensions:</span> Up to 2 metres wide and 1.5 metres high </li>
        <li className='ml-[19px]'><span className='font-bold '>Materials:</span> Different wood textures  and colours</li>
        <li className='ml-[19px]'><span className='font-bold '>Fronts:</span> Doors and drawers</li>
      </ul>
    </div>

    <button className=' font-serif bg-black text-white mt-[50px] w-[250px] h-[60px] text-[15px] hover:scale-105 duration-300'>
    <Link href="/pages/customizer/wadrobes" className=' w-full'>
      Open Configurator
    </Link>
      </button>
    </section>

    </section>

 {/* Beds */}
    <section className=' flex app w-full md:flex-row-reverse'>
    <section className=' hover:scale-95 duration-300 bg-amber-300 mt-28 w-[580px] h-[300px]'>
    <Image className='ml-[22px] -mt-5 w-[580px] h-[300px] hover:relative duration-300 hover:scale-95'
        src={bed}
        alt='grid'
    /> 
    </section>


   
    <section className=' mr-48 ml-12 w-96 '>
    <p className='font-bold text-[33px]  mt-[70px]'>Chairs</p>
    
    <p className='mt-[50px] text-[15px] font-serif'> 
   
Embrace the transformative power of a well-chosen bed as it becomes the centerpiece of your bedroom. Elevate your space with the harmonious blend of design, comfort, and craftsmanship that our beds bring. 
  Explore our collection today and embark on a journey to create a haven of relaxation and style in your home.
   This is possible by modifying one of our available designs by giving you the opportunity to change:
    </p>

    <div className='mt-[20px] text-[15px] font-serif'>
      <ul className='list-disc' >
        <li className='ml-[19px]'><span className='font-bold '>Dimensions:</span> Choose the size in terms of height and width </li>
        <li className='ml-[19px]'><span className='font-bold '>Material and Texture:</span> Select from a variety of texture that suits you </li>
        <li className='ml-[19px]'><span className='font-bold '>Colour:</span> Choose from different colours</li>
        
      </ul>
    </div>

    <button className=' font-serif bg-black text-white mt-[50px] w-[250px] h-[60px] text-[15px] hover:relative duration-300 hover:scale-95'>
    <Link href="/pages/customizer/bed" className=' w-full'>
      Open Configurator
    </Link>
      </button>
    </section>

    </section>


    <footer className=' text-white p-10 grid m-0 bg-black w-screen h-[250px] mt-[50px]'>
      <p className='  ml-10 '>Contact us</p>
      <section className='   md:flex-row'>
      <div className='flex gap-4 mt-8 ml-10'>
      <Image className=' w-10'
      src={phone}
      alt='phone icon'
      width={35}
      height={25}
      />
      <p  >Telephone: +233 593098984<br/>Monday-Friday, 8am-5pm</p>
      </div>

      <div className='flex gap-4 mt-8 ml-10'>
      <Image className=' w-10'
      src={email}
      alt='email icon'
      width={35}
      height={25}
      />
      <p>Email:<span className='  font-bold'> furnicraftproject@gmail.com</span></p>
      </div>
      </section>

     
      

    </footer>


    </section>
    
   
  )
}

export default Home