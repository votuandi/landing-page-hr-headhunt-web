/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Client() {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[url('/image/client.jpg')] h-fit bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center relative mb-[26px]">
        <div className="absolute top-0 left-0 bg-[#00000064] w-full h-full"></div>
        <div className="py-[50px] w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[50px]">
          <h1 className="text-[40px] text-white drop-shadow-md">Our Approach Clients</h1>
          <p className="text-white text-xl drop-shadow-md max-w-[600px]">Our strengths translate into your success!</p>
        </div>
      </div>
      <div className="mb-[50px] flex justify-center items-center">
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[14px]">
          <p className="text-[#2f2e2e] text-sm text-justify">
            Navigating talent acquisition can be challenging. At Charming Headhunt, we provide expert guidance and support for clients expanding into evolving markets.
            <br />
            <br />
            Our experienced consultants offer comprehensive services tailored to your industry, ensuring access to the right talent pool.
            <br />
            <br />
            With a proven track record, we excel in overcoming talent acquisition challenges and advising on securing the right talent at the right time.
            <br />
            <br />
            Our team of seasoned specialist consultants offers practical and innovative recruitment solutions to meet your business needs, drawing on their expertise, which
            includes:
            <br />
            <br />* Deep expertise in management and industry to source key executives
            <br />* UP-to-date market knowledge in Financial Services
            <br />* Assessing job descriptions against candidate requirements and organizational issues
            <br />* Understanding talent supply, demand, and remuneration packages in Asia region
            <br />* Proven track record in building lasting strategic relationships and advocating for clients
            <br />* Flexible approach to adapt search strategy to your changing needs
          </p>
          <img className="w-full h-auto mt-5" src="/image/client-chart.png" alt="" />
        </div>
      </div>
    </div>
  )
}
