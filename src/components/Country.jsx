import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"

const Country = () => {
  return (
    <section className='bg-[#fffefe] '>
        <div className='max-w-container mx-auto flex justify-between'>
        <h2 className='w-[25%] pt-[78px] leading-[70px] text-black text-5xl font-bold font-pops' >The biggest
         supplier on the country</h2>
        <p className='w-[651px] py-[161px] text-[rgba(108, 108, 108, 1)] text-base font-normal font-pops'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, labore maxime. Deleniti pariatur illo officiis laborum ullam odio quasi! Unde iusto tenetur dolore similique assumenda repellat modi laboriosam reiciendis consectetur.</p>
    </div>
    <div className="flex justify-between pb-4">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
    </div>
    </section>
  )
}

export default Country 