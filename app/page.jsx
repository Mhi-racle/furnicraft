import Feed from '@components/Feed';
import Image from 'next/image';

// images
import grid from "@public/assets/images/9.jpg"

const Home = () => {
  return (
    <section className="w-full  flex-col">

      {/*header of our customisation website*/}
     <p className='font-bold text-5xl mt-[90px]'>Create custom-made furniture online:</p>
      
     <section className='mt-[50px] bg-gray-200 w-[320px] h-[400px] absolute app '>
      <p className='relative right-[70px] -top-[40px] text-[10px] '>Made-to-measure</p>
      <Image className='mt-[10px]'
          src={grid}
          alt='grid'
          height= {300}
          width= {300}
      />
      <p>Made to measure</p>
      <button className=' bg-black text-white w-[140px] h-[40px] text-[12px]'>START NOW</button>


     </section>





    </section>
   
  )
}

export default Home