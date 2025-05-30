"use client"
import { useState } from "react";
import { list } from "../utils/common"
import { SocialButtons } from "./social-buttons";
import { FC } from "react";

const AFooter: FC = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);
  const currentYear = new Date().getFullYear()



  return <div
    data-aos="fade-up"
    data-aos-duration="1000"
    className={`  w-full  mo:pb-[52px]  bg-[url(/footerBg.svg)] mt-[3.25rem] mo:mt-[6.25rem] bg-no-repeat footer flex mo:bg-[url(/mo-footerBg.png)]   bg-cover mo:bg-cover  `}>
    <div className="w-container     m-auto md:w-full mo:w-full md:px-[40px] px-[50px]  mo:px-5 ">
      <div className="flex flex-col items-center justify-center pt-10 nf ">
        <div className="  w-full  ">
          <div className=" mo:mt-6 mb-5 mo:w-full mo:flex mo:justify-center mo:flex-col mo:items-center">
            <SocialButtons />
            <div className="text-sm  flex justify-between mo:flex-col mo:w-full mo:text-center font-medium leading-normal mt-[23px]  text-[#000000B2]">
              <div className="mo:w-full ">
                <div>
                  Get in Touch
                </div>
                <a href="mailto:contact@aro.network" className="ng:pt-1" >
                  contact@aro.network
                </a>
              </div>
              <div className="bg">
                <div className="flex mo:mt-[60px] w-full justify-end mo:justify-between gap-[81px] mo:gap-[33px] smd:gap-10">
                  {list.map((item, index) => {
                    return <div
                      key={`list_${index}`}
                      onMouseOver={() => {
                        setDealHover({ index, isHover: true });
                      }}
                      onMouseLeave={() => {
                        setDealHover({ index, isHover: false });
                      }}
                      onClick={() => window.open(item.link, '_blank')}
                      className={`${dealHover?.index === index && 'text-[#ffffff]'} `}
                    >
                      <span className={`text-sm mo:text-xs cursor-pointer  font-medium leading-normal  ${dealHover?.isHover && dealHover.index === index
                        ? "text-[#1C73FF]"
                        : "text-[#000000B2]"
                        }`} >{item.name}</span>
                    </div>
                  })}
                </div>
                <div className="flex justify-end mo:justify-center text-[#000000B2] ng:pt-1  mo:text-xs mo:mt-[11px] text-sm  font-medium leading-normal  ">
                  © ARO Foundation, {currentYear}. All rights reserved.
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  </div>
}

export default AFooter
