/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function TrackRecord() {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[url('/image/track-record.jpg')] h-fit bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center relative mb-[26px]">
        <div className="absolute top-0 left-0 bg-[#00000064] w-full h-full"></div>
        <div className="py-[50px] w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[50px]">
          <h1 className="text-[40px] text-white drop-shadow-md">Proven Excellence</h1>
          <p className="text-white text-xl drop-shadow-md max-w-[600px]">Your Trusted Executive Search Companion</p>
        </div>
      </div>
      <div className="mb-[50px] flex justify-center items-center">
        <div className="w-full max-w-[900px] px-5 lg:px-0 flex flex-col gap-[14px] text-[#2f2e2e] text-sm text-justify">
          <p>
            We have a robust history of delivering executive search, talent management, market research, and recruitment strategies to leading Global Fortune 500 companies across
            Asia. Our successful placements span various industries and include, but are not limited to, the following:
          </p>
          <p className="font-bold">Private Banking, Wealth & Asset Management Firm (Global and Asia-based)</p>
          <ul className="list-disc -mt-3 pl-7">
            <li className="mt-2.5">
              Front Office:
              <ul className="pl-[14px] list-[circle]">
                <li>Private Bankers: Managing Director, Executive Director, Director, Associate Director</li>
                <li>Investment Advisors, Portfolio Manager/DPM: Executive Director, Director</li>
                <li>Equities/Fixed Income/FX Specialists/Structured Products: Executive Director, Director, Associate Director</li>
                <li>Credit Advisory/Credit Structuring/Financing: Executive Director, Director</li>
              </ul>
            </li>
            <li className="mt-2.5">
              Middle Office:
              <ul className="pl-[14px] list-[circle]">
                <li>Chief Risk Officer, Credit Risk, Operational Risk</li>
                <li>Legal & Compliance Head, Legal Counsel, Compliance Advisor/Manager</li>
                <li>Client Services Head, Business Managers</li>
              </ul>
            </li>
          </ul>
          <p className="font-bold">Insurance</p>
          <ul className="list-disc -mt-3 pl-7">
            <li className="mt-2.5">
              Leadership Roles:
              <ul className="pl-[14px] list-[circle]">
                <li>Chief Executive Officer – Global Health Insurance Company</li>
                <li>Chief Executive Officer – Insurance Division of Global Banking Firm</li>
              </ul>
            </li>
            <li className="mt-2.5">
              Finance and Accounting:
              <ul className="pl-[14px] list-[circle]">
                <li>Regional Financial Controller – Global Reinsurer</li>
              </ul>
            </li>
            <li className="mt-2.5">
              Legal and Compliance:
              <ul className="pl-[14px] list-[circle]">
                <li>Regional Head of Compliance, Asia Pacific – Global Reinsurer</li>
              </ul>
            </li>
            <li className="mt-2.5">
              IT & Transformation:
              <ul className="pl-[14px] list-[circle]">
                <li>Chief Technology Officer – Global Insurer</li>
                <li>Associate Director – Strategic Delivery</li>
                <li>Senior Manager – PMO Office</li>
              </ul>
            </li>
            <li className="mt-2.5">
              Operations:
              <ul className="pl-[14px] list-[circle]">
                <li>Chief Operations Officer – Global Banking Firm</li>
                <li>Chief Underwriter – Global European Firm</li>
                <li>Head of Operations – Global Insurer</li>
                <li>Regional Head of Customer Service – Leading Health Insurer</li>
                <li>Regional Claims Lead – Leading Asian Insurer</li>
              </ul>
            </li>
            <li className="mt-2.5">
              Sales and Marketing:
              <ul className="pl-[14px] list-[circle]">
                <li>Chief Agency Officer – Global European Insurer</li>
                <li>Chief Health Officer – European Insurer</li>
                <li>Head of Sales – Asian Health Insurer</li>
                <li>Regional Employee Benefits Director – Leading Asian Insurer</li>
                <li>Head of Broker – Chinese Leading Insurer</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
