import React from 'react'
import img11 from '../assets/img11.png'
import img10 from '../assets/img10.png'
import img9 from '../assets/img9.png'

const Member = () => {
  return (
    <section>
      <div className=" max-w-container mx-auto">
        <div className="flex justify-between w-[90%] mx-auto">
          <div className='pt-4 h-[401px] w-[339px] bg-no-repeat bg-cover  relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px]' style={{background:`url(${img11})`}}>
           <h4 className=' pt-[80px] pl-[45px] w-[249px] text-2xl font-bold text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
           <a className='py-[14px] px-[30px] bg-[#a19f9f] text-center ml-[45px] text-base font-pops text-white hover:bg-red-600 ' href="#">Read more</a>
          </div>

          <div className='pt-4  h-[401px] w-[339px] bg-no-repeat bg-cover  relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px]' style={{background:`url(${img10})`}}>
          <h4 className=' pt-[80px] pl-[45px] w-[249px] text-2xl font-bold text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
           <a className='py-[14px] px-[30px] bg-[#a19f9f] text-center ml-[45px] text-base font-pops text-white hover:bg-red-600 ' href="#">Read more</a>
          </div>
          <div className='pt-4  h-[401px] w-[339px] bg-no-repeat bg-cover  relative z-[1] after:absolute after:top-0 after:left-0 after:content[""] after:h-full after:w-full after:bg-[#0c0c0c7d] after:z-[-1] pb-[340px]' style={{background:`url(${img9})`}}>
          <h4 className=' pt-[80px] pl-[45px] w-[249px] text-2xl font-bold text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
           <a className='py-[14px] px-[30px] bg-[#a19f9f] text-center ml-[45px] text-base font-pops text-white hover:bg-red-600 ' href="#">Read more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Member
