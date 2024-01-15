import React from 'react'
import logo from "../assets/Logo.png"

const Nav = () => {
  return (
    <section className='bg-[red] py-3'>
        <div className='max-w-container mx-auto'>
        <div className="flex justify-between items-center">
            <div className="">
            <img src={logo} alt="" />
            </div>
            <div className="">
                <ul className='flex gap-x-7'>
                    <li><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">Home</a></li>
                    <li><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">About</a></li>
                    <li><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">Services</a></li>
                    <li><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">Gallery</a></li>
                    <li><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#">Blog</a></li>
                    <li><a className='font-pops text-white text-[16px] font-semibold border-2 border-white p-2 px-3 hover:text-[#222] hover:bg-white' href="#">CONTACT</a></li>
                </ul>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Nav