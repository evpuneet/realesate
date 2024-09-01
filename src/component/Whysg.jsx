import React from 'react'
import { IoTimerOutline } from "react-icons/io5";

export default function Whysg() {
  return (
    <>
        <section className='grid grid-cols-[30%_auto] h-[600px] pt-[100px] text-white'>
            <div className=''>
            <video loop autoPlay muted className="object-cover object-center w-full h-[100%]" src="https://staging.adiyogitechnology.com/sushmagroup/videos/whysushmavideo.mp4" type="video/mp4"></video>
            </div>
            <div className='bg-[#1e6da4] pt-[50px] pb-[40px] px-[35px] flex flex-col justify-center text-center'>
                <h2 className='text-[40px] font-bold'>Why Sushma Group</h2>
                <p className='text-[18px] font-semibold'>Within the premises of the Sushma Township are reputed Schools.</p>
                <div className='grid grid-cols-2 gap-x-[70px] gap-y-[60px] py-4'>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                    <div className='flex items-center gap-4 text-sm font-semibold border-b'><IoTimerOutline className='text-[40px]'/>On Time delivery</div>
                </div>
            </div>
        </section>
    </>
  )
}

