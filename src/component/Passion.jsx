import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";

export default function Passion() {
  return (
    <>
    {/* here z-index not working */}
        <section className='py-[100px] px-[120px] mx-[44px] flex relative'>
            <div className='relative bg-white py-[80px] ps-[45px] pe-[100px] text-[65px] border-4 border-[#1e6da4] border-s-[14px] leading-[80px] z-[9]'>
              <span className='text-[#767676]'>PASSION FOR</span> <br />
              <span className='font-semibold text-[#1e6da4]'>PERFECTION</span>
            </div>
            <figure className='absolute left-[40%] top-[50%] z-[3] translate-y-[-50%] w-[728px] rounded-md'><img className='w-[728px] relative rounded-md' src="https://staging.adiyogitechnology.com/sushmagroup/assets/685ddec8f310242e1fd0a6a4bc54c0c8-CcEGxz4J.png" alt="" /><FaRegPlayCircle className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[100px]' /></figure>
        </section>
    </>
  )
}
