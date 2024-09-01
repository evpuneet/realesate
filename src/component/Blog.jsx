import React from 'react'
import { SlCalender } from "react-icons/sl";
import { CiLocationArrow1 } from "react-icons/ci";
export default function BLog() {
  return (
    <>
        <section className='text-center py-[100px]'>
            <h2 className='text-[#1e6da4] text-[40px] font-bold uppercase'>BLOGS</h2>
            <p className='text-[#5a5454] font-medium pb-[80px]'>Within the premises of the Sushma Township are reputed Schools.</p>
            <div className='flex justify-center gap-4'>
              <div className='w-[400px] shadow-xl rounded-xl'>
                <figure><img className='w-[400px] h-[221px] object-cover object-center rounded-[15px_15px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/1f402e905205374dd3bc5a348c4daa3c-BAXa_HFL.png" alt="" /></figure>
                <div className='p-4 text-left'>
                  <div className='flex items-center gap-2'><SlCalender /><p>Published on June 20,2023</p></div>
                  <h3 className='text-[20px] pt-[10px] font-bold'>
                    What is a Short-Term Apartment Rentals? | Confident Group
                  </h3>
                  <p className='text-[14px] mt-[15px]'>
                  Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.
                  </p>
                  <button className='flex items-center gap-2 border p-[10px_15px] rounded-lg mt-5 text-[12.5px]'> Read More <CiLocationArrow1 /></button>
                </div>
              </div>
              <div className='w-[400px] shadow-xl rounded-xl'>
                <figure><img className='w-[400px] h-[221px] object-cover object-center rounded-[15px_15px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/94e93e85275be3359bd08525d53be9ec-B8gV-QY6.png" alt="" /></figure>
                <div className='p-4 text-left'>
                  <div className='flex items-center gap-2'><SlCalender /><p>Published on June 20,2023</p></div>
                  <h3 className='text-[20px] pt-[10px] font-bold'>
                    What is a Short-Term Apartment Rentals? | Confident Group
                  </h3>
                  <p className='text-[14px] mt-[15px]'>
                  Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.
                  </p>
                  <button className='flex items-center gap-2 border p-[10px_15px] rounded-lg mt-5 text-[12.5px]'> Read More <CiLocationArrow1 /></button>
                </div>
              </div>
              <div className='w-[400px] shadow-xl rounded-xl'>
                <figure><img className='w-[400px] h-[221px] object-cover object-center rounded-[15px_15px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/1f16aa257afa528aa03a0272a4aeb9bf-Cmt7pQVi.png" alt="" /></figure>
                <div className='p-4 text-left'>
                  <div className='flex items-center gap-2'><SlCalender /><p>Published on June 20,2023</p></div>
                  <h3 className='text-[20px] pt-[10px] font-bold'>
                    What is a Short-Term Apartment Rentals? | Confident Group
                  </h3>
                  <p className='text-[14px] mt-[15px]'>
                  Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.
                  </p>
                  <button className='flex items-center gap-2 border p-[10px_15px] rounded-lg mt-5 text-[12.5px]'> Read More <CiLocationArrow1 /></button>
                </div>
              </div>
            </div>
            <button className='p-[10px_40px] rounded-full bg-[#1e6da4] text-white uppercase text-[20px] font-bold mt-[100px]'>seel all blog</button>
        </section>
    </>
  )
}
