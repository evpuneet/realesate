import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function () {
  let faqArray=[
    {
      id:1,
      ques:"1. What are the ongoing residential Projects by Sushma Group ?",
      ans:"Sushma Belleza , Sushma Joynest Moh, Sushma Valencia ,Sushma Crescent , Sushma Grande NXT & Sushma Grande are the Ongoing Residential Projects in Zirakpur"
    },
    {
      id:2,
      ques:"2. What are the ongoing Commercial Projects by Sushma Group ?",
      ans:"Sushma Pristine , Sushma Empiria, Sushma Metropol ,Sushma Capital & Sushma Infinium are Commercial Projects by Sushma Group"
    },
    {
      id:3,
      ques:"3. What is Sushma Pristine ?",
      ans:"Sushma Pristine is First Organized Commercial Project Offering 12% Assured Returns & Lease Guarantee on Airport Road."
    },
    {
      id:4,
      ques:"4. What is Sushma Service Partner ?",
      ans:"Since Sushma Group Doesn't Sell its Properties Directly Thats why Sushma Group as appointed Sushma Service Partner to sell its Properties."
    }
  ]
  
  
  return (
    <>
        <section className='text-center pt-[100px]'>
            <h2 className='text-[#1e6da4] text-[40px] font-bold uppercase'>FAQ'S</h2>
            <p className='text-[#5a5454] font-medium pb-[80px]'>Within the premises of the Sushma Township are reputed Schools.</p>
        </section>
        <section className='grid grid-cols-[68%_auto] ps-[100px] gap-4'>
          <div className='border-r-[3px] border-r-[#1e6da452] pe-5'>
              {faqArray.map((project)=><FaqPart ject={project} />)}
          </div>
          <figure><img className='h-[426px] object-cover object-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/9500423e943f26118d254c27a17d48bb-BnIM_mCe.png" alt="" /></figure>
        </section>
    </>
  )
}

let FaqPart=({ject})=>{
  let {ans, ques} = ject
  let [status, setStatus] = useState(false)
  let statusChanger=(e)=>{
    setStatus(!status)
    console.log(status)
    console.log(e)
  }
  return(
    <>
      <div className={status?'text-[#1e6da4] mb-5 transition-all p-6 rounded-lg flex justify-between gap-4 border-[2px] h-[160px] border-[#1e6da4]':'text-[white] bg-[#1e6da4] p-6 mb-5 rounded-lg flex justify-between gap-4 border-[2px] transition-all border-[#1e6da4] h-[85px]'} key={1} onClick={(e)=>{statusChanger(e)}}>
            <div className='font-semibold'>
              <h4>{ques}</h4>
            <p className={status?'text-[15px] ps-3 w-[80%]':"invisible"}>{ans}</p>
            </div>
            <IoIosArrowDropdownCircle className={status?'min-w-[50px] text-[50px] rotate-180 transition-all':"min-w-[30px] text-[30px] transition-all"} />
          </div> 
    </>
  )
}