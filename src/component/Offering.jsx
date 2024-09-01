import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
export default function Offering() {
  return (
    <>
        <section className='text-center mt-[50px]'>
            <h2 className='text-[#1e6da4] pt-[100px] text-[40px] font-bold uppercase'>Our Offering</h2>
            <p className='text-[#5a5454] font-medium pb-[80px]'>Within the premises of the Sushma Township are reputed Schools.</p>
            <div className='border-t-[2px] border-t-[#b8c7cb] border-b-[2px] border-b-[#b8c7cb] flex justify-around mb-6 py-[10px]'>
                <div className='text-[#8f9495] text-[22px] font-extrabold'>RESIDENTIAL</div>
                <div className='text-[#8f9495] text-[22px] font-extrabold'>RESIDENTIAL</div>
                <button className='bg-[#1e6da4]'>SEE MORE</button>
            </div>
            <div className='flex justify-between'>
              <figure className='relative'>
                <img className='h-full' src="https://staging.adiyogitechnology.com/sushmagroup/assets/d172e02422ee757c63b0a92502f6001f-Cd_o3t6P.png" alt="" />
                <img className='absolute right-0 top-0 animate-spin-slow' src="https://staging.adiyogitechnology.com/sushmagroup/assets/circle_img-ClLblvDr.png" alt="" />
              
              </figure>
              <section className='p-[20px_10px_0_50px] text-left grow'>
                <figure className='w-[220px]'><img className='h-[51px]'  src="https://staging.adiyogitechnology.com/sushmagroup/assets/shushmalogoupcominfg-C4Xqp7kU.png" alt="" /></figure>
                <h2 className='uppercase mt-[35px] text-[30px] text-[#4e4a4a] font-semibold'>Shushma elementa</h2>
                <article className='border-b-[#e8e7e7] border-b-[4px] text-left my-2'>
                  <p className='text-[17px] text-[#1e6da4] uppercase font-semibold'>rera number</p>
                  <p className='text-[19px] pt-1 pb-[15px] uppercase font-semibold text-[#4e4a4a]'>kndfs-sad45-fr1452</p>
                </article>
                <article className='border-b-[#e8e7e7] border-b-[4px] text-left my-2'>
                  <p className='text-[17px] text-[#1e6da4] uppercase font-semibold'>rera number</p>
                  <p className='text-[19px] pt-1 pb-[15px] uppercase font-semibold text-[#4e4a4a]'>kndfs-sad45-fr1452</p>
                </article>
                <article className='border-b-[#e8e7e7] border-b-[4px] text-left my-2'>
                  <p className='text-[17px] text-[#1e6da4] uppercase font-semibold'>rera number</p>
                  <p className='text-[19px] pt-1 pb-[15px] uppercase font-semibold text-[#4e4a4a]'>kndfs-sad45-fr1452</p>
                </article>
                <article className='text-left my-2'>
                  <p className='text-[17px] text-[#1e6da4] uppercase font-semibold'>size available</p>
                  <p className='text-[19px] pt-1 pb-[15px] uppercase font-semibold text-[#4e4a4a]'>kndfs-sad45-fr1452 sq YARD</p>
                </article>
                <div className='flex justify-between text-2xl text-[#1e6da4]'>
                <FiPhoneCall className='rounded-full border-[#1e6da4] border-[1px] w-[50px] h-[50px] p-2'/>
                <CiLocationArrow1 className='rounded-full border-[#1e6da4] border-[1px] w-[50px] h-[50px] p-2' />
                <FaWhatsapp className='rounded-full border-[#1e6da4] border-[1px] w-[50px] h-[50px] p-2' />
                </div>
                <button className='rounded-lg p-2 border-[#1e6da4] border-[1px] my-4 capitalize text-[#1e6da4] '>explore now</button>
              </section>
              <section className='bg-[#1e6da4] text-center text-white '>
                <p className='uppercase rotate-90 origin-left translate-x-[50%] scale-150 opacity-20'>residensial</p>
              </section>
            </div>
        </section>
    </>
  )
}
