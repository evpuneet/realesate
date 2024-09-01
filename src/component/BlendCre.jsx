import React from 'react'

export default function BlendCre() {
  return (
    <>
        <section className='py-[100px] mx-[80px]'>
            <p className='text-center uppercase text-lg text-[#6f6f6f] font-semibold'>We blend creativity with intelligence to craft homes <br />
            that enhance your living experience and deliver on our promises.</p>
            <div className='grid grid-cols-2 mt-[50px] justify-center gap-6 text-white'>
                <figure className='bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/908591d6ce0a9de4cc9885a71d34cf63-Cxdsnp97.png)] bg-cover grid grid-cols-1 items-center'>
                    <div className='bg-[#1e6ca4cc] h-[114px] text-center text-[33px]'>
                    <p>The Art of CUSTOMER <br />
                  <span className='font-semibold'>CENTRIC DESIGN</span></p>
                    </div>
                </figure>
                <figure className='bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/a083c685dacc3cc178999bbd2187624d-BnQl13Qp.png)] bg-cover h-[372px] grid grid-cols-1 items-center'>
                  <div className='bg-[#1e6ca4cc] h-[114px] text-center text-[33px]'>
                  <p className='w-[100%]'>The Science of <br />
                  <span className='font-semibold'>CONSTRUCTION TECHNOLOGY</span></p>
                  </div>
                </figure>
            </div>
        </section>
    </>
  )
}
