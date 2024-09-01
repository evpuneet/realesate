import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";

export default function Header() {
  useGSAP(()=>{
    gsap.to('header',{
      scrollTo:100,
      background:"transparent",
    })
  })
  return (
    <>
      <header className='w-[100%] bg-black text-white py-[10px] px-[80px] flex justify-between items-center fixed z-[9999]'>
        <figure>
          <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/Group%203960-BLB6eVGP.png" alt="" />
        </figure>
        <div className='flex items-center gap-5 text-2xl'>
          <button className='text-xs bg-white text-[#1E6DA4] rounded-xl py-[2px] px-4 font-medium'>Call Now</button>
          <FaBarsStaggered />
        </div>
      </header>
      
    </>
  )
}
