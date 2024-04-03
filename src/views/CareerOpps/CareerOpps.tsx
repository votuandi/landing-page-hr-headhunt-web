/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Contact() {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[url('/image/career-opps.jpg')] h-fit bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center relative mb-[26px]">
        <div className="absolute top-0 left-0 bg-[#00000064] w-full h-full"></div>
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col py-[100px]">
          <h1 className="text-[40px] text-white drop-shadow-md">Career Opportunities</h1>
        </div>
      </div>
      <div className="mb-[50px] flex justify-center items-center">
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[14px] text-[#2f2e2e] text-sm text-justify">
          <p>Director of High Net Worth Underwriting</p>
          <p className="font-bold">Position Summary:</p>
          <p>
            The Director of Underwriting is tasked with making equitable and uniform underwriting decisions aligned with the company's underwriting principles, ensuring mortality
            outcomes meet anticipated standards, all while prioritizing exceptional customer service.
          </p>
          <p> Reporting directly to the Chief Underwriter, the Director oversees all underwriting affairs.</p>
          <p className="font-bold">Key Responsibilities:</p>
          <ul className="pl-[14px] list-disc">
            <li>Conduct mortality risk assessment for ultra-high net worth business primarily in Asian markets.</li>
            <li>Exercise approval authority up to $25 million.</li>
            <li>Collaborate with the Chief Underwriter to devise underwriting strategies aligned with enterprise objectives.</li>
            <li>Conduct research on industry benchmarks and implement superior service standards.</li>
            <li>Serve as a mentor and collaborator for the entire underwriting team.</li>
            <li>Foster and manage proactive, positive, and productive relationships within the underwriting department, ensuring client expectations are met.</li>
            <li>Undertake special assignments as required and directed.</li>
          </ul>
          <p className="font-bold">Requirements:</p>
          <ul className="pl-[14px] list-disc">
            <li>Proficiency in comprehending all factors associated with mortality risk management and adeptness in solving intricate problems.</li>
            <li>
              Possession of extensive technical expertise in medical and financial underwriting practices, clinical testing, and contemporary medical procedures to ensure accurate
              risk assessment.
            </li>
            <li>Responsiveness to customer requirements, coupled with sound business acumen and exceptional negotiation skills.</li>
            <li>Advanced understanding of retention schedules and reinsurance agreements.</li>
            <li>Consistent delivery of excellent individual audit results.</li>
            <li>Fluency in Cantonese or Mandarin is desirable due to the Asian focus.</li>
          </ul>
          <p className="font-bold">Requirements:</p>
          <ul className="pl-[14px] list-disc">
            <li>Minimum of 10 years of individual underwriting experience in Canada, the United States, offshore jurisdictions, or equivalent large-case markets.</li>
            <li>
              Completion of the Fellowship, Academy of Life Underwriting (FALU), and the Fellowship, Life Management Institute (FLMI), or a commitment to obtain these
              certifications within the next 5 years.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
