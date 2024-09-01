import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
export default function Footer() {
  return (
    <>
        <section className='bg-[#104367] text-center pt-[60px]'>
            <figure><img className='mx-auto pb-8' src="https://staging.adiyogitechnology.com/sushmagroup/assets/footerlogo-m57807hP.png" alt="" /></figure>
            <div className='text-center w-[80%] mx-auto text-white border-t-[2px] border-t-gray-500 border-b-[2px] border-b-gray-500 py-8'>
                <ul className='flex gap-10 justify-center text-[17px] font-medium uppercase mb-8'>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Location map</li>
                    <li>Floor plans</li>
                    <li>Price</li>
                    <li>Amenities</li>
                    <li>Gallery</li>
                    <li>Faq</li>
                    <li>Contact us</li>
                </ul>
                <div className='flex gap-10 justify-center'>
                    <span className='flex items-center text-white gap-2 text-[20px] font-semibold'><PiPhoneCallFill/> +91 1234567890</span>
                    <span className='flex items-center text-white gap-2 text-[20px] font-semibold'><PiPhoneCallFill/> +91 1234567890</span>
                    <span className='flex gap-3'>
                        <FaInstagram className='bg-white text-[#104367] rounded-full w-6 h-6 p-1'/>
                        <BiLogoFacebook className='bg-white text-[#104367] rounded-full w-6 h-6 p-1'/>
                        <FaXTwitter className='bg-white text-[#104367] rounded-full w-6 h-6 p-1'/>
                        <FaPinterestP className='bg-white text-[#104367] rounded-full w-6 h-6 p-1'/>
                        <FaYoutube className='bg-white text-[#104367] rounded-full w-6 h-6 p-1'/>
                    </span>
                </div>
            </div>
            <article className='flex items-center justify-center gap-4 text-white py-4 text-[17px]'>
                    <span className='uppercase font-bold text-[23px]'>Sales Partner</span>
                    <FaLocationArrow />
                    <span className='text-[#fc6602] uppercase'>Reality Nivesh :</span>
                    <span>Showroom No. 12 level 2, UPTOWN INSIGNIA PR-7 Airport Road, Zirakpur, Punjab</span>
                </article>
        </section>
        <section className='bg-[f1f1f1] flex justify-between text-[#104367] text-xs font-semibold px-[50px] py-2'>
          <article className='flex gap-6'><p>Disclaimer</p><p>Disclaimer</p><p>Disclaimer</p></article>
          <article className=''>© Copyright 2024 sushma GROUP. REALTY NIVESH All Rights Reserved</article>
        </section>
    </>
  )
}
