import React from 'react'
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"

const Services = () => {
  return (
    <section className=''>
        <div className="flex justify-between">
            <div className="pt-[138px] pl-[360px] w-[50%] ">
              <h2 className='text-[#000] text-[64px] font-bold font-pops'>Our Services</h2>
              <p className='w-[405px] text-base text-black font-medium font-pops'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className=' pt-4 w-[945px] h-[410px] bg-no-repeat  relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px]' style={{background:`url(${img5})`}}>
            <h3 className='text-4xl text-[#ffff] text-center mt-[147px] font-bold font-pops pb-5'>Modern natural oil and gas refineries.</h3>
            <div className="">
                <a className=' ml-[135px] py-[14px] px-[30px] bg-[red] text-white font-medium text-base hover:text-black hover:bg-white' href="#">Learn More</a>
            </div>
            </div>
        </div>
        <div className="flex justify-between">
            <div className='pt-4 w-full h-[410px] bg-no-repeat bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px]' style={{background:`url(${img6})`}}>
            <h3 className='text-4xl text-[#ffff] text-center mt-[147px] font-bold font-pops pb-[25px]'>Supply of national industries.</h3>
            <div className="">
                <a className=' ml-[205px] py-[14px] px-[30px] bg-[red] text-white font-medium text-base hover:text-black hover:bg-white' href="#">Learn More</a>
            </div>
            </div>

            <div className='pt-4 w-full h-[410px] bg-no-repeat  relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px]' style={{background:`url(${img7})`}}>
            <h3 className='text-4xl text-[#ffff] text-center mt-[147px] font-bold font-pops pb-[25px]'>National fuel distribution and supply.</h3>
            <div className="">
                <a className=' ml-[142px] py-[14px] px-[30px] bg-[red] text-white font-medium text-base hover:text-black hover:bg-white' href="#">Learn More</a>
            </div>

            </div>
        </div>
    </section>
  )
}

export default Services

