import React from 'react'
import img8 from "../assets/img8.png"
import logo1 from "../assets/Logo1.png"

const About = () => {
  return (
    <section className=' bg-[#e0dddd]'>
        <div className="max-w-container mx-auto">
            <div className="flex">
                <div className=" bg-[red] w-[35%]  mt-[136px] mb-[136px]">
                  <h3 className='pt-[100px] pl-[74px] text-white text-4xl font-pops font-bold w-[292px] pb-[100px] leading-[54px]'>Learn more about our company</h3>
                </div>
                <div className='pt-4 h-[361px] mt-[136px] w-[55%] bg-no-repeat bg-cover  relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px]' style={{background:`url(${img8})`}}>
                <div className=" mt-[161px]">
                <a className=' ml-[282px]  py-[14px] px-[30px] bg-[#f8f7f7] text-black font-medium text-base hover:text-white hover:bg-[red]' href="#">Learn More</a>
                </div>
                </div>
            </div>
        </div>
        <div className=" bg-[white]">
            <div className=" max-w-container mx-auto">
                <div className=" pt-[117px] pb-[117px] ">
                    <img className=' w-full' src={logo1} alt="" />
                </div>
              </div>
        </div>
    </section>
  )
}

export default About