import React from 'react'
import { Swiper, SwiperSlide,} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';

export default function SwpierVideo() {
  return (
    <>
      
      <section className='grid grid-cols-[43%_auto] relative'>
      <div className="bg-[url('https://staging.adiyogitechnology.com/sushmagroup/assets/aa3adfea8ebb38b3b1b10f40dabc929a-BGc6J0a9.png')] h-screen bg-no-repeat ps-[38px] flex flex-col justify-center bg-cover">
        <div className='ps-[60px]'>
          <h2 className='text-[40px] lg:text-[45px] xl:text-[50px] text-start xl:leading-[77px] text-white font-semibold'>
            WE MAKE <br /> HOMES THAT <br /> UNDERSTAND <br /> YOU
          </h2>
          <button className='border text-white rounded-3xl px-[45px] py-2 text-[28px] my-[40px]'>SEE ALL PROJECTS</button>
        </div>
      </div>
      
        <Swiper
          id='homeSwiper'
          modules={[Autoplay, EffectFade, Navigation, Keyboard, Pagination]}
          className='w-[1500px] mySwiper'
          pagination={{
            dynamicBullets: true,
            clickable:true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          // navigation={true}
          spaceBetween={30}
          effect={'fade'}
          // effect={'flip'}
          keyboard={{
            enabled: true,
          }}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='firstSlideTop'>
              <video loop autoPlay muted className='max-w-[864px] h-screen object-cover b-[0px]' src="https://staging.adiyogitechnology.com/sushmagroup/videos/suahmatour.mp4"></video>
              <video loop autoPlay muted className='w-[616.8px] h-[180px] absolute left-[0px] bottom-0 object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/videos/sushmamaintour.mp4"></video>
            </SwiperSlide>
            <SwiperSlide className='firstSlideTop'>
              <video loop autoPlay muted className='max-w-[864px] h-screen object-cover b-[0px]' src="https://staging.adiyogitechnology.com/sushmagroup/videos/sushmamaintour.mp4"></video>
              <video loop autoPlay muted className='w-[616.8px] h-[180px] absolute left-[0px] bottom-0 object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/videos/suahmatour.mp4" ></video>
            </SwiperSlide>
            <SwiperSlide className='firstSlideTop'>
              <video loop autoPlay muted className='max-w-[864px] h-screen object-cover b-[0px]' src="https://staging.adiyogitechnology.com/sushmagroup/videos/suahmatour.mp4"></video>
              <video loop autoPlay muted className='w-[616.8px] h-[180px] absolute left-[0px] bottom-0 object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/videos/sushmamaintour.mp4"></video>
            </SwiperSlide>
            <SwiperSlide className='firstSlideTop'>
              <video loop autoPlay muted className='max-w-[864px] h-screen object-cover b-[0px]' src="https://staging.adiyogitechnology.com/sushmagroup/videos/sushmamaintour.mp4"></video>
              <video loop autoPlay muted className='w-[616.8px] h-[180px] absolute left-[0px] bottom-0 object-cover' src="https://staging.adiyogitechnology.com/sushmagroup/videos/suahmatour.mp4" ></video>
            </SwiperSlide>
      </Swiper>
    </section>
      
    </>
  )
}
