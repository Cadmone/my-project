import React from 'react'
import logo from "../assets/Logo.png"
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import cadr from "../assets/Cert1.png"
import cadr1 from "../assets/Cert2.png"

const Footer = () => {
  return (
    <section className=' bg-[#151515]'>
        <div className=" max-w-container mx-auto">
         <div className=" flex">
            <div className=" w-[40%] pb-[140px]">
                <img className=' pt-[149px]' src={logo} alt="" />
                <div className=" flex items-center text-white pt-3">
                <MdOutlineMail />
                    <p>mail@yourcompany.com</p>
                </div>
                <div className="flex items-center text-white pt-2">
                <FaPhoneAlt />
                    <p>+896 120 5889 (Toll free)</p>
                </div>
                <div className="flex items-center text-white pt-2 pb-7">
                <MdOutlineLocationOn />
                    <p className=' '>101 Baker Street, New York, USA, 12345</p>
                </div>
                <div className=" flex space-x-4">
                <div className="py-[10px] px-[10px] bg-[red] rounded-full w-[7%] hover:bg-white">
                    <a className='' href="#"><FaFacebookF /></a>
                </div>
                <div className="py-[10px] px-[10px] bg-[red] rounded-full w-[7%] hover:bg-white">
                    <a className='' href="#"><FaTwitter /></a>
                </div>
                <div className="py-[10px] px-[10px] bg-[red] rounded-full w-[7%] hover:bg-white">
                    <a className='' href="#"><FaLinkedinIn /></a>
                </div>
                <div className="py-[10px] px-[10px] bg-[red] rounded-full w-[7%] hover:bg-white">
                    <a className='' href="#"><FaInstagramSquare /></a>
                </div>
                </div>
                      
            </div>
            <div className=" w-[17%]">
                <div className="">
                    <h5 className=' pt-[155px] text-white font-semibold text-xl font-pops'>Company</h5>
                    <p className=' pt-2 text-white font-normal font-p text-base'>Home</p>
                    <p className=' pt-2 text-white font-normal font-p text-base'>About</p>
                    <p className=' pt-2 text-white font-normal font-p text-base'>Services</p>
                    <p className=' pt-2 text-white font-normal font-p text-base'>Gallery</p>
                </div>
            </div>
            <div className=" w-[20%]">
            <div className="">
                    <h5 className=' pt-[155px] text-white font-semibold text-xl font-pops'>Others</h5>
                    <p className=' pt-2 text-white font-normal font-p text-base'>Blog</p>
                    <p className=' pt-2 text-white font-normal font-p text-base'>Contact</p>
                    <p className=' pt-2 text-white font-normal font-p text-base'>Terms & Conditions</p>
                    <p className=' pt-2 text-white font-normal font-p text-base'>Privacy Policy</p>
                </div>
            </div>
            <div className=" w-[22%]">
               <div className="">
               <h5 className=' pt-[155px] text-white font-semibold text-xl font-pops'>Certificate</h5>
               </div>
               <div className=" flex space-x-2 pt-3">
                <img src={cadr} alt="" />
                <img src={cadr1} alt="" />
               </div>
            </div>

         </div>
        </div>
        <div className=" bg-[#252424]">
            <div className="max-w-container mx-auto">
             <h4 className=' pt-10 pb-10 text-[#4d4848] text-lg font-semibold font-pops'>© Copyright 2022 by AltDesain Studio – All right reserved.</h4>
            </div>
        </div>
    </section>
  )
}

export default Footer