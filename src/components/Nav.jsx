import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Nav = () => {
  let [show, setshow] =useState(false)

  let jun = () =>{
    setshow(!show)
  }
  return (
    <section className='bg-[red] py-3'>
        <div className='max-w-container mx-auto'>
        <div className="flex justify-between items-center">
            <div className="">
            <img src={logo} alt="" />
            </div>
            <div className="">
                <ul className={`lg:flex lg:gap-x-7 absolute last:-0 top-0 lg:static z-10 ${show ? "top-[150px] w-full left-0 bg-[green] transition duration-300 ease-in-out "  : "top-[-300px] left-0 transition duration-300 ease-in-out "}`}>
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">Home</a></li>
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">About</a></li>
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">Services</a></li>
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">Gallery</a></li>
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222] ' href="#">Blog</a></li>
                    <li className='py-5 lg:py-0'><a className=' mt-3 font-pops text-white text-[16px] font-semibold border-2 border-white p-2 px-3 hover:text-[#222] hover:bg-white' href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className=" lg:hidden" onClick={jun}>
              {show == true ? <ImCross /> : <FaBars /> }
            </div>
        </div>
        </div>
    </section>
  )
}

export default Nav