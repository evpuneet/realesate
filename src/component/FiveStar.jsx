import React from 'react'
import { MdOutlineStar } from "react-icons/md";

export default function FiveStar() {
  return (
    <>
        <section className='text-center py-[100px]'>
            <div className='text-[30px] text-yellow-500 flex justify-center gap-4'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
            </div>
            <h2 className='text-[#1e6da4] text-[40px] font-bold uppercase'>SUSHMA SERVICE PARTNER</h2>
            <p className='text-[#5a5454] font-medium pb-[80px]'>Within the premises of the Sushma Township are reputed Schools.</p>
            <div className='bg-[#3e3c3c] grid grid-cols-[40%_auto] mx-[80px] p-4 relative'>
              <figure><img className=' object-cover object-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/705febab1eba783bdb74e0f6f6db3a90-CS-YPTjC.png" alt="" /></figure>
              <div className='text-white text-left p-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci.</p>
                <p className='border-b my-[20px] pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis</p>
              </div>
              <div className='absolute right-0 bottom-0 p-4 text-white text-right'>
                <h3 className='font-bold text-3xl'>PAWAN KUMAR</h3>
                <p className='text-sm'>FOUNDER REALITY NIVESH</p>
              </div>
            </div>
        </section>
    </>
  )
}
