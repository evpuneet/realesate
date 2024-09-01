import React from 'react'

export default function Enquire() {
  return (
    <>
        <section className='bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/edffdb6cad0937fc0c25eb85cfd9bd5c-Dalyr-VQ.png)] h-[453px] bg-cover bg-no-repeat bg-center w-[100%] relative z-[-1]'>
            <div className='text-white ms-[168px] absolute bg-black/[.5] backdrop-blur px-20 pb-7 pt-4 rounded-xl top-[50%] translate-y-[-50%]'>
                <p className='text-[18px] pt-5 font-extrabold'>UPTO</p>
                <div className='flex'>
                <span className='flex flex-col items-center font-black text-[122px] pe-7 border-e-2'>12%
                    <p className='text-[22px] font-medium'>ASSURED RETURNS</p>
                </span>
                <span className='flex flex-col items-center font-black text-[122px] ps-7'>09
                    <p className='text-[22px] font-medium uppercase'>Years lease guarantee</p>
                </span>
                </div>
                <p className='text-center text-[10px] font-medium pt-4'>T&C Apply*</p>
                <button className='py-1 px-4 border rounded-lg'>Enquire Now</button>
            </div>
        </section>
    </>
  )
}
