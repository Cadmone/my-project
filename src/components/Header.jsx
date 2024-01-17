import React from 'react'
import { RiMailLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Header = () => {
  return (
    <section className='py-3 bg-[#282828]'>
    <div className='max-w-container mx-auto'>
     <div className='flex flex-wrap'>
      <div className=" w-full lg:w-1/6">
       <div className='flex items-center text-white'>
        <RiMailLine />
        <p>mail@yourcompany.com</p>
        </div>
      </div>
      <div className=" w-full lg:w-4/6">
        <div className="flex items-center text-white">
        <FaPhoneAlt />
        <p>+896 120 5889 (Toll free)</p>
        </div>
      </div>
      <div className="w-full lg:w-1/6 ">
      <div className="flex text-white justify-end space-x-4">
      <FaFacebookF className="" />
      <FaTwitter />
      <FaLinkedinIn />
      <FaInstagramSquare />
      </div>
      </div>
     </div>
    </div>
    </section>
    
  )
}

export default Header