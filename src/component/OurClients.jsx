import React from 'react'
import { FaStar } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';

export default function OurClients() {
  return (
    <>
        <section className='text-center'>
            <h2 className='text-[#1e6da4] text-[40px] font-bold uppercase'>What Our Clients Say</h2>
            <p className='text-[#5a5454] font-medium pb-[80px]'>Within the premises of the Sushma Township are reputed Schools.</p>
        </section>
        <section className='bg-[#f8f8f8] pt-[100px]'>
          
          <Swiper
        modules={[EffectCards, Autoplay]}
        slidesPerView={3}
        grabCursor={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        id='reviewSlider'
        className="mySwiper h-[600px]"
      >
        <SwiperSlide>
          <div class="relative">
            <div class="duration-600 bg-white text-[#747373] font-light text-sm shadow-xl rounded-[15px] blueDiv">
              <p class="px-2 cmd:px-5 xl:px-5 pt-4 xl:pt-6 pb-10 text-center   ">
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
              </p>
            </div>
            <div class="absolute left-[50%] translate-x-[-50%] top-[90%]">
              <div class="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                <img className='w-[100px] h-[100px] object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
              </div>
              <div class="text-center lg:mt-4 mt-1">
                <p class="sm:text-[22px] lg:text-[24px] text-[15px] font-supera800 text-[#1E6DA4] ">Mukesh</p>
                <p class="text-[9.65px] text-[#636363] pb-1 sm:pb-2">Corporate Employee- SAP India </p>
                <div class="text-[#FBB245] flex gap-1 md:gap-2 lg:gap-3 justify-center items-center text-[16px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative">
            <div class="duration-600 bg-white text-[#747373] font-light text-sm shadow-xl rounded-[15px] blueDiv ">
              <p class="px-2 cmd:px-5 xl:px-5 pt-4 xl:pt-6 pb-10 text-center   ">
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
              </p>
            </div>
            <div class="absolute left-[50%] translate-x-[-50%] top-[90%]">
              <div class="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                <img className='w-[100px] h-[100px] object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
              </div>
              <div class="text-center lg:mt-4 mt-1">
                <p class="sm:text-[22px] lg:text-[24px] text-[15px] font-supera800 text-[#1E6DA4] ">Mukesh</p>
                <p class="text-[9.65px] text-[#636363] pb-1 sm:pb-2">Corporate Employee- SAP India </p>
                <div class="text-[#FBB245] flex gap-1 md:gap-2 lg:gap-3 justify-center items-center text-[16px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative">
            <div class="duration-600 bg-white text-[#747373] font-light text-sm shadow-xl rounded-[15px] blueDiv ">
              <p class="px-2 cmd:px-5 xl:px-5 pt-4 xl:pt-6 pb-10 text-center   ">
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
              </p>
            </div>
            <div class="absolute left-[50%] translate-x-[-50%] top-[90%]">
              <div class="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                <img className='w-[100px] h-[100px] object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
              </div>
              <div class="text-center lg:mt-4 mt-1">
                <p class="sm:text-[22px] lg:text-[24px] text-[15px] font-supera800 text-[#1E6DA4] ">Mukesh</p>
                <p class="text-[9.65px] text-[#636363] pb-1 sm:pb-2">Corporate Employee- SAP India </p>
                <div class="text-[#FBB245] flex gap-1 md:gap-2 lg:gap-3 justify-center items-center text-[16px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative">
            <div class="duration-600 bg-white text-[#747373] font-light text-sm shadow-xl rounded-[15px] blueDiv ">
              <p class="px-2 cmd:px-5 xl:px-5 pt-4 xl:pt-6 pb-10 text-center   ">
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
              </p>
            </div>
            <div class="absolute left-[50%] translate-x-[-50%] top-[90%]">
              <div class="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                <img className='w-[100px] h-[100px] object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
              </div>
              <div class="text-center lg:mt-4 mt-1">
                <p class="sm:text-[22px] lg:text-[24px] text-[15px] font-supera800 text-[#1E6DA4] ">Mukesh</p>
                <p class="text-[9.65px] text-[#636363] pb-1 sm:pb-2">Corporate Employee- SAP India </p>
                <div class="text-[#FBB245] flex gap-1 md:gap-2 lg:gap-3 justify-center items-center text-[16px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative">
            <div class="duration-600 bg-white text-[#747373] font-light text-sm shadow-xl rounded-[15px] blueDiv ">
              <p class="px-2 cmd:px-5 xl:px-5 pt-4 xl:pt-6 pb-10 text-center   ">
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
              </p>
            </div>
            <div class="absolute left-[50%] translate-x-[-50%] top-[90%]">
              <div class="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                <img className='w-[100px] h-[100px] object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
              </div>
              <div class="text-center lg:mt-4 mt-1">
                <p class="sm:text-[22px] lg:text-[24px] text-[15px] font-supera800 text-[#1E6DA4] ">Mukesh</p>
                <p class="text-[9.65px] text-[#636363] pb-1 sm:pb-2">Corporate Employee- SAP India </p>
                <div class="text-[#FBB245] flex gap-1 md:gap-2 lg:gap-3 justify-center items-center text-[16px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
        </section>
    </>
  )
}
