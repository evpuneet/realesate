import React from 'react'
import { FiDownload } from "react-icons/fi";

export default function Presenting() {
  return (
    <>
        <section className='w-[1260px] mx-auto grid grid-cols-[60%_auto] mt-[300px] mb-[50px] justify-between items-center'>
            <div>
                <h2 className='text-[67px] font-extrabold uppercase text-[#1e6da4]'>Presentation of <br />
                the sushma group</h2>
                <button className='text-[#1e6da4] border-[2px] border-[#1e6da4] shadow-[10px_10px_0_0_#1e6da4] text-[31px] py-4 px-16 mt-9 rounded-lg transition-all hover:shadow-none hover:text-white hover:bg-[#1e6da4] flex items-center gap-2 '><FiDownload /><span className='font-semibold'>Brochure</span></button>
            </div>
            <figure><img src="https://staging.adiyogitechnology.com/sushmagroup/assets/5c38dd308d0409a102cb3be9838ca36a-CrQ5igkw.png" alt="" /></figure>
        </section>
    </>
  )
}
