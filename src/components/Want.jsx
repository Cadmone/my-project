import React from 'react'
import maps from "../assets/Maps.png"

const Want = () => {
  return (
    <section className=''>
        <div className="pt-[162px]">
         <img src={maps} alt="" />
        </div>
        <div className=" bg-red-600">
            <div className=" max-w-container mx-auto">
              <div className=" flex justify-between">
                <div className=" pt-11 pb-11">
                <h3 className=' text-4xl font-pops font-bold text-white'>Want to join as member branch in your area?</h3>
                </div>
                <div className=" pt-12">
                    <a className=' py-3 px-8 border-[2px] text-white font-pops font-medium text-base hover:bg-white hover:text-black ' href="#">CONTACT</a>
                </div>
              </div>
            </div>
        </div>
    </section>
    
  )
}

export default Want
