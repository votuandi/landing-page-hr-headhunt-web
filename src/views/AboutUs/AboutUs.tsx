/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function AboutUs() {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[url('/image/about.jpg')] h-fit bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center relative mb-[26px]">
        <div className="absolute top-0 left-0 bg-[#00000064] w-full h-full"></div>
        <div className="py-[50px] w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[50px]">
          <h1 className="text-[40px] text-white drop-shadow-md">About Us</h1>
          <p className="text-white text-xl drop-shadow-md max-w-[600px]">
            Our Vision To be your trusted partner, spreading inspiration and making a positive difference in our communities by linking people together in lasting relationships.
          </p>
        </div>
      </div>
      <div className="mb-[50px] flex justify-center items-center">
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[14px]">
          <p className="text-[#2f2e2e] text-sm text-justify">
            At Charming Headhunt, we specialize in finding top talent and matching them with ideal organizations for mutual success. Understanding each client's unique needs is key
            to building lasting relationships.
          </p>
          <p className="text-[#2f2e2e] text-sm text-justify">
            With extensive experience in Asia's dynamic markets, our team provides personalized industry advisory and leverages our vast network for effective results.
          </p>
          <p className="text-[#2f2e2e] text-sm text-justify">
            We've earned a strong reputation in specialized industry knowledge and talent acquisition, particularly in prestigious financial institutions.
            <b />
            Driven by a shared passion, we offer tailored solutions that meet the needs of both clients and candidates, fostering lasting relationships through honesty, integrity,
            and loyalty.
          </p>
          <p className="text-[#2f2e2e] text-sm text-justify">
            Driven by a shared passion, we offer tailored solutions that meet the needs of both clients and candidates, fostering lasting relationships through honesty, integrity,
            and loyalty.
          </p>
        </div>
      </div>
    </div>
  )
}
