import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function LocationCard() {
  return (
    <>
        <section>
        <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        // keyboard={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        navigation={false}
        onSlideChange={() => console.log('slide change')}
        
        className="mySwiper py-[100px]"
        id='swiper2flip'
      >
        <SwiperSlide>
        <div className='shadow-2xl rounded-2xl'>
            <div className='relative w-[100%] h-[267px] overflow-hidden group'>
              <img className='w-[100%] h-[100%] object-cover object-center transition-all group-hover:scale-125 rounded-[20px_20px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/9d95386c59fb7f87098341337c885dd7-ChpRKkUI.png" alt="" />
              <img className='absolute bottom-[-25px] left-[-70px] p-4 scale-50 bg-white' src="https://staging.adiyogitechnology.com/sushmagroup/assets/SUSHMA_Valencia-z6fNb-Tq.png" alt="" />
            </div>
            <div className='p-[15px]'>
              <h3 className='text-[#1e6da4] text-[22px] uppercase font-extrabold'>Shushma Valencia</h3>
              <div className='flex items-center gap-2 mt-[15px]'><CiLocationOn className='text-[#1e6da4]'/><span className='text-[16px]'>Dholakpur</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl rounded-2xl w-[500px]'>
            <div className='relative w-[100%] h-[267px] overflow-hidden group'>
              <img className='w-[100%] h-[100%] object-cover object-center transition-all group-hover:scale-125 rounded-[20px_20px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/sushmacrescentPH-2-gbF4qj6T.png" alt="" />
              <img className='absolute bottom-[-25px] left-[-70px] p-4 scale-50 bg-white' src="https://staging.adiyogitechnology.com/sushmagroup/assets/SUSHMA_Valencia-z6fNb-Tq.png" alt="" />
            </div>
            <div className='p-[15px]'>
              <h3 className='text-[#1e6da4] text-[22px] uppercase font-extrabold'>Shushma Valencia</h3>
              <div className='flex items-center gap-2 mt-[15px]'><CiLocationOn className='text-[#1e6da4]'/><span className='text-[16px]'>Dholakpur</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl rounded-2xl'>
            <div className='relative w-[100%] h-[267px] overflow-hidden group'>
              <img className='w-[100%] h-[100%] object-cover object-center transition-all group-hover:scale-125 rounded-[20px_20px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/JoynestAEROCITY-CgNsSHde.png" alt="" />
              <img className='absolute bottom-[-25px] left-[-70px] p-4 scale-50 bg-white' src="https://staging.adiyogitechnology.com/sushmagroup/assets/SUSHMA_Valencia-z6fNb-Tq.png" alt="" />
            </div>
            <div className='p-[15px]'>
              <h3 className='text-[#1e6da4] text-[22px] uppercase font-extrabold'>Shushma Valencia</h3>
              <div className='flex items-center gap-2 mt-[15px]'><CiLocationOn className='text-[#1e6da4]'/><span className='text-[16px]'>Dholakpur</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl rounded-2xl'>
            <div className='relative w-[100%] h-[267px] overflow-hidden group'>
              <img className='w-[100%] h-[100%] object-cover object-center transition-all group-hover:scale-125 rounded-[20px_20px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/sushmaelementa-BXeWt6ZZ.png" alt="" />
              <img className='absolute bottom-[-25px] left-[-70px] p-4 scale-50 bg-white' src="https://staging.adiyogitechnology.com/sushmagroup/assets/SUSHMA_Valencia-z6fNb-Tq.png" alt="" />
            </div>
            <div className='p-[15px]'>
              <h3 className='text-[#1e6da4] text-[22px] uppercase font-extrabold'>Shushma Valencia</h3>
              <div className='flex items-center gap-2 mt-[15px]'><CiLocationOn className='text-[#1e6da4]'/><span className='text-[16px]'>Dholakpur</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-2xl rounded-2xl'>
            <div className='relative w-[100%] h-[267px] overflow-hidden group'>
              <img className='w-[100%] h-[100%] object-cover object-center transition-all group-hover:scale-125 rounded-[20px_20px_0_0]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/joynestimgmoh-1-B7wqbqSc.png" alt="" />
              <img className='absolute bottom-[-25px] left-[-70px] p-4 scale-50 bg-white' src="https://staging.adiyogitechnology.com/sushmagroup/assets/SUSHMA_Valencia-z6fNb-Tq.png" alt="" />
            </div>
            <div className='p-[15px]'>
              <h3 className='text-[#1e6da4] text-[22px] uppercase font-extrabold'>Shushma Valencia</h3>
              <div className='flex items-center gap-2 mt-[15px]'><CiLocationOn className='text-[#1e6da4]'/><span className='text-[16px]'>Dholakpur</span></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </section>
        <section className='text-center pt-[50px] pb-[50px]'>
            <h2 className='text-[#1e6da4] text-[40px] font-bold uppercase'>our Success story</h2>
            <p className='text-[#5a5454] font-medium'>Within the premises of the Sushma Township are reputed Schools.</p>
        </section>
        <section>
        <Marquee className='h-[500px] pb-[100px]'> 
        <div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
              <div className="h-[210%] flex flex-col justify-between items-center  absolute left-[100%] top-[0] ">
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div><div className="h-full border border-dashed border-[#1E6DA4]  "></div>
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div>
              </div>
              <div className="absolute border border-dashed border-[#1E6DA4] w-full left-0 top-[100%] "></div>
        </div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4 ">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
        </div>
        </div>
        <div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
              <div className="h-[210%] flex flex-col justify-between items-center  absolute left-[100%] top-[0] ">
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div><div className="h-full border border-dashed border-[#1E6DA4]  "></div>
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div>
              </div>
              <div className="absolute border border-dashed border-[#1E6DA4] w-full left-0 top-[100%] "></div>
        </div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4 ">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
        </div>
        </div>
        <div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
              <div className="h-[210%] flex flex-col justify-between items-center  absolute left-[100%] top-[0] ">
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div><div className="h-full border border-dashed border-[#1E6DA4]  "></div>
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div>
              </div>
              <div className="absolute border border-dashed border-[#1E6DA4] w-full left-0 top-[100%] "></div>
        </div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4 ">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
        </div>
        </div>
        <div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
              <div className="h-[210%] flex flex-col justify-between items-center  absolute left-[100%] top-[0] ">
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div><div className="h-full border border-dashed border-[#1E6DA4]  "></div>
                <div className="w-3 h-3 rounded-full bg-[#1E6DA4]"></div>
              </div>
              <div className="absolute border border-dashed border-[#1E6DA4] w-full left-0 top-[100%] "></div>
        </div>
        <div className=" relative flex justify-start items-start gap-2 w-[447px] pt-5 pb-1 pl-[22px] pr-4 ">
          <div className="min-w-[113px] h-[129px] rounded-[4px]  ">
            <img className='w-[100%] h-[100%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" />
          </div>
            <div>
              <p className="text-[#353535] font-semibold text-[20px]">2009</p>
              <p className="text-[20px] text-[#1E6DA4] uppercase font-black">Villas</p>
              <p className="text-[#5A5454] text-[12.14px] leading-[17px] ">Sushma Group delivered Luxury Duplex Villas in Swastik Vihar, Zirakpur</p>
            </div>
        </div>
        </div>
        </Marquee>
        </section>
    </>
  )
}
