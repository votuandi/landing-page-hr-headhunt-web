/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col relative">
      <div className="w-full relative h-[70vh] md:h-[70vh]">
        <div className="w-full fixed top-0 left-0 -z-10 h-[90vh] overflow-hidden bg-[url('/image/banner.jpg')] bg-cover bg-center md:bg-[url()]">
          {/* <div className="w-full h-full bg-[#71717158]"></div> */}
          <video className="object-cover object-center h-full lg:w-full lg:h-auto hidden md:block" src="/video/banner.mp4" playsInline loop muted autoPlay></video>
        </div>
        <div className="absolute top-[20%] left-0 w-full h-fit flex flex-col justify-start items-center">
          <div className="w-full max-w-[900px] h-fit px-5 lg:px-0">
            <div className="w-fit h-fit flex flex-col justify-start items-stretch gap-12">
              <h1 className="text-[70px] text-white font-bold text-center md:text-left">Executive Search</h1>
              <div className="px-5 flex flex-col md:flex-row justify-center items-center md:justify-between gap-5 md:gap-0">
                <button className="solid border-[2px] border-white rounded-[20px] shadow-xl bg-transparent text-white text-xl w-[210px] h-[52px] hover:bg-[#ffd45a] hover:border-[#ffd45a] transition-colors duration-700">
                  CLIENTS
                </button>
                <button className="solid border-[2px] border-white rounded-[20px] shadow-xl bg-transparent text-white text-xl w-[210px] h-[52px] hover:bg-[#ffd45a] hover:border-[#ffd45a] transition-colors duration-700">
                  CANDIDATES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
