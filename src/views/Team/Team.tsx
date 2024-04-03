/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Team() {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[url('/image/team.jpg')] h-fit bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center relative mb-[26px]">
        <div className="absolute top-0 left-0 bg-[#00000064] w-full h-full"></div>
        <div className="py-[50px] w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[50px]">
          <h1 className="text-[40px] text-white drop-shadow-md">Our Team | Our Expertise</h1>
          <p className="text-white text-xl drop-shadow-md max-w-[600px]">Advance your search with our vast network</p>
        </div>
      </div>
      <div className="mb-[50px] flex justify-center items-center">
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[14px] text-[#2f2e2e] text-sm text-justify">
          <p>
            Charming Headhunt specializes regionally, led by experienced consultants. We proudly partner with global and local financial leaders, including private banks,
            insurance, and asset management firms.
            <br />
            <br />
            Our consultants offer deep expertise across financial sectors, providing insights on market trends, salaries, and talent management. With a proven track record in
            executive search, we cover recruitment needs from C-suite to middle management, offering comprehensive solutions.
            <br />
            <br />
            Expertise areas include:
          </p>
          <ul className="list-disc -mt-3 pl-7">
            <li>Private Banking and Wealth Management</li>
            <li>Insurance</li>
            <li>IT and Fintech</li>
            <li>Compliance and Risk Management</li>
            <li>Finance and Accounting</li>
            <li>Human Resources</li>
          </ul>
          <p>Choose Charming Headhunt for tailored recruitment solutions.</p>
        </div>
      </div>
    </div>
  )
}
