import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

type MainProps = {
  children: React.ReactNode
}

const HEADER_MENU = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Approach',
    path: undefined,
    sub: [
      {
        name: 'Clients',
        path: '/client',
      },
      {
        name: 'Candidates',
        path: '/candidate',
      },
    ],
  },
  {
    name: 'Team',
    path: '/practices',
    sub: [
      {
        name: 'Track Record',
        path: '/track-record',
      },
      {
        name: 'Career Opps',
        path: '/career-opps',
      },
    ],
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const Main = (props: MainProps) => {
  const { children } = props

  const [hoverIndex, setHoverIndex] = useState<number>(-1)
  const [mbIndex, setMbIndex] = useState<number>(-1)
  const [isShowMbMenu, setIsShowMbMenu] = useState<boolean>(false)

  return (
    <div className="h-full w-full relative z-0 bg-white">
      <div className="w-full h-[106px] bg-white shadow-md fixed top-0 left-0 z-30 flex justify-center items-center flex-nowrap">
        <div className="w-[900px] h-full flex flex-row justify-between items-center md:gap-20 px-5 lg:px-0">
          <img className="h-[64px] w-[64px] md:hidden cursor-pointer" src="/icon/menu.png" alt="" onClick={() => setIsShowMbMenu(true)} />
          <img className="h-[90%] w-auto flex-1 md:mr-0" src="/icon/logo.svg" alt="" />
          {isShowMbMenu && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-[#0505052c] flex flex-row">
              <div className=" w-[72px] h-[72px] rounded-[50%] p-1 bg-white m-4 shrink-0">
                <img className="w-full h-full" src="/icon/close.png" alt="" onClick={() => setIsShowMbMenu(false)} />
              </div>
              <div className="w-full h-full bg-white shadow-lg px-10 pt-[20%] flex flex-col gap-5">
                {HEADER_MENU.map((item, index) => (
                  <>
                    <div key={index} className="w-full flex flex-row justify-between items-center">
                      <Link href={item.path ?? ''} onClick={() => setIsShowMbMenu(false)}>
                        <span className="text-[#605e5e] text-2xl font-extralight">{item.name}</span>
                      </Link>
                      {Array.isArray(item.sub) &&
                        item.sub.length > 0 &&
                        (mbIndex === index ? (
                          <svg className="w-3 h-auto cursor-pointer rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817" onClick={() => setMbIndex(-1)}>
                            <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"></path>
                          </svg>
                        ) : (
                          <svg className="w-3 h-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817" onClick={() => setMbIndex(index)}>
                            <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"></path>
                          </svg>
                        ))}
                    </div>
                    {Array.isArray(item.sub) &&
                      item.sub.length > 0 &&
                      index === mbIndex &&
                      item.sub.map((sub, subIndex) => (
                        <Link href={sub.path} className="ml-5" key={subIndex} onClick={() => setIsShowMbMenu(false)}>
                          <span className="text-[#605e5e] text-2xl font-extralight" key={subIndex}>
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                  </>
                ))}
              </div>
            </div>
          )}
          <div className="w-full h-full hidden md:flex flex-row justify-between items-center ">
            {HEADER_MENU.map((item, index) => (
              <div className="w-full" key={index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(-1)}>
                <div className="relative h-fit w-full flex justify-center items-center">
                  <Link href={item.path ?? ''}>
                    <span className="text-[#605e5e] text-sm px-2.5 font-extralight">{item.name}</span>
                  </Link>
                  {index === hoverIndex && Array.isArray(item.sub) && (
                    <>
                      <div className="bg-white w-full h-fit flex flex-col justify-center items-center absolute left-0 top-[100%] z-40 pt-[10px]">
                        {item.sub.map((sub, subIndex) => (
                          <Link href={sub.path} className=" px-2.5 py-1.5">
                            <span className="text-[#605e5e] text-sm font-extralight" key={subIndex}>
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col mt-[106px] z-0">{children}</div>
      <div className="w-full h-fit flex flex-col justify-start items-center bg-[#2e2e2e] pb-[100px] z-10 min-h-[25vh] mt-[26px]">
        <div className="w-full max-w-[900px] justify-between flex flex-row items-start px-5 lg:px-0 py-5">
          <div className="grid grid-cols-2">
            <div className="flex flex-col w-full justify-start items-start gap-3">
              <span className="text-white text-sm font-light">
                <b>Address:</b> Rm 15, 9 Floor, Shatin Galleria, 18-24 Shan Mei Street Fotan, NT, Hong Kong
              </span>
              <span className="text-white text-sm font-light">Charming Headhunt Limited</span>
            </div>
            <div className="flex flex-col w-full justify-start items-end gap-3">
              <span className="text-[#F2BE5C] text-sm font-light">Contact us</span>
              <span className="text-[#F2BE5C] text-sm font-light">
                <a href="mailto:info@charming-hr.com">info@charming-hr.com</a>
              </span>
              <span className="text-[#F2BE5C] text-sm font-light">+852 3480 8873</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
