import React from 'react'
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <>
        <section className='text-center pt-[100px]'>
            <h2 className='text-[#1e6da4] text-[40px] font-bold uppercase'>SUSHMA PROJECTS BRANDS ON BOARD</h2>
            <p className='text-[#5a5454] font-medium pb-[80px]'>Within the premises of the Sushma Township are reputed Schools.</p>
            <div className='w-[80%] mx-auto'>
            <Marquee autoFill>
                <figure><img src="https://staging.adiyogitechnology.com/sushmagroup/assets/11-150x150-BegWhfBn.png" alt="" /></figure>
                <figure><img src="https://staging.adiyogitechnology.com/sushmagroup/assets/10-150x150-C8NYqgcS.png" alt="" /></figure>
                <figure><img src="https://staging.adiyogitechnology.com/sushmagroup/assets/8-150x150-CCKPS7rI.png" alt="" /></figure>
                <figure><img src="https://staging.adiyogitechnology.com/sushmagroup/assets/7-150x150-CNxrUjbv.png" alt="" /></figure>
                <figure><img src="https://staging.adiyogitechnology.com/sushmagroup/assets/6-150x150-PhNqO6bo.png" alt="" /></figure>
                <figure><img src="https://www.metalwarecorporation.com/wp-content/uploads/2024/01/peterengland.jpg" alt="" /></figure>
            </Marquee>
            </div>
        </section>
    </>
  )
}
