import React from 'react'
import banner from "../assets/banner.png"

const Banner = () => {
  return (
   <section className=' lg:pt-[257px] !bg-cover bg-center bg-no-repeat w-full  relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px] sm:w-[]' style={{background:`url(${banner})`}}>
     <div className='max-w-container mx-auto'>
        <h1 className=' lg:text-6xl w-[842px] text-[#fff] font-bold pb-[31px] sm: text-2xl xm:w-4 '>We exist since 1975 on the oil and gas industry.</h1>
        <a className='py-[14px] px-[40px] bg-[red] hover:bg-white hover:text-black text-[#fff] text-base font-normal  '  href="#">LEARN</a>
    </div>
   </section>
  )
}

export default Banner