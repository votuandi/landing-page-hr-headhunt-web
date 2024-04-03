/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Candidate() {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[url('/image/candidate.jpg')] h-fit bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center relative mb-[26px]">
        <div className="absolute top-0 left-0 bg-[#00000064] w-full h-full"></div>
        <div className="py-[50px] w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[50px]">
          <h1 className="text-[40px] text-white drop-shadow-md">Our Approach Candidates</h1>
          <p className="text-white text-xl drop-shadow-md max-w-[600px]">We accompany you on your journey every step of the way.</p>
        </div>
      </div>
      <div className="mb-[50px] flex justify-center items-center">
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[14px]">
          <p className="text-[#2f2e2e] text-sm text-justify">
            At Charming Headhunt, our seasoned consultants offer extensive expertise, blending industry know-how with local insights. We prioritize respect, honesty, and integrity
            in guiding your career journey.
            <br />
            <br />
            We believe in fostering partnerships with organizations that share our values, enabling both businesses and individuals to thrive. Through networking and market
            intelligence, we tailor opportunities to match your aspirations.
            <br />
            <br />
            Beyond filling vacancies, we're dedicated to empowering you to shape your career path. With our local knowledge, we're here to help you navigate the dynamic Hong Kong
            job market and reach your goals.
          </p>
        </div>
      </div>
    </div>
  )
}
