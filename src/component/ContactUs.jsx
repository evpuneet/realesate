import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactUs() {
  return (
    <>
        <section className='bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/50a47ae02fe827cace4cb04eece57bc8-CW7d-UKq.png)] w-full h-[313px] bg-cover bg-center relative'>
          <div className='w-full h-full bg-[#0000007d] absolute top-0 '></div>
          <div className='text-[white] absolute w-[80%] left-[50%] top-[90px] translate-x-[-50%] text-center'>
            <h2 className='text-[40px] font-extrabold uppercase'>contact us</h2>
            <p className='font-bold text-[18px]'>Within the premises of the Sushma Township are reputed Schools.</p>
            <div className='grid grid-cols-5 gap-5 px-4 py-[80px] bg-[#1e6da4]'>
              <input type="text" className='border-b-white border-b-[2px] pb-3 bg-transparent outline-none cursor-text placeholder:text-white' placeholder='Name'/>
              <input type="text" className='border-b-white border-b-[2px] pb-3 bg-transparent outline-none cursor-text placeholder:text-white' placeholder='Email'/>
              <input type="text" className='border-b-white border-b-[2px] pb-3 bg-transparent outline-none cursor-text placeholder:text-white' placeholder='Phone'/>
              <input type="text" className='border-b-white border-b-[2px] pb-3 bg-transparent outline-none cursor-text placeholder:text-white' placeholder='Query'/>
              <button className='uppercase bg-white text-[#1e6da4] transition-all border-white border-[1px] font-semibold rounded-lg hover:bg-[#1e6da4] hover:text-white outline-none '>Submit</button>
            </div>
            <div className='grid grid-cols-4 justify-between py-[25px] px-[10px] text-[#464646] bg-[#f4f4f4]'>
              <h2 className='uppercase text-[29px] font-extrabold'>get in touch</h2>
              <div className='flex items-center gap-2 text-[22px] font-semibold'>
                <PiPhoneCallFill className='bg-[#1e6da4] rounded-full text-white w-[50px] h-[50px] p-2'/>
                <span>
                  <p>+91 1234567890</p>
                  <p>+91 1234567890</p>
                </span>
                </div>
              <div className='flex items-center gap-2 text-[22px] font-semibold'>
                <BiSolidMessageRounded className='bg-[#1e6da4] rounded-full text-white w-[50px] h-[50px] p-2'/>
                <span>Needhelp@gmail.com</span>
              </div>
              <div className='flex items-center gap-2 text-[22px] font-semibold'>
                <IoLocationSharp className='bg-[#1e6da4] rounded-full text-white w-[50px] h-[50px] p-2'/>
                <span>PR-7 Airport Road, <br />
                Zirakpur, Punjab</span>
              </div>
            </div>
          </div>
        </section>
        
    </>
  )
}
