"use client"
import { useState } from "react";
import { list } from "../utils/common"
import { SocialButtons } from "./social-buttons";
import { toast } from "sonner";
import { FC } from "react";

const AFooter: FC<{ className?: string }> = ({ className = '' }) => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);
  const [inputEmail, setInputEmail] = useState('')
  const [errorText, setErrorText] = useState('')
  const currentYear = new Date().getFullYear()
  const [isSubmiting, setIsSubmiting] = useState(false)

  const onSubmitEmail = () => {

    if (!inputEmail || isSubmiting) return
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!validEmail.test(inputEmail)) {
      setErrorText('must be a valid email address ')
      return
    }
    setIsSubmiting(true)
    fetch('https://email.enreach.network/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputEmail
      }),
    })
      .then(response => response.json())
      .then(() => {
        toast.success('Submit subscription successfully！');
        setInputEmail('')

      })
      .catch(() => {
        toast.success('Submit subscription failed, please try again later!');

      }).finally(() => {
        setIsSubmiting(false)
      })
  }

  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className={`  w-full bg-[#313131] h-full mo:pb-5   relative bottom-[0px] ${className}  `}>
    <div className="w-container m-auto md:w-full mo:w-full md:px-[30px]  mo:px-5 ">
      <div className="flex flex-col items-center justify-center">
        <div className=" mt-[95px] mo:mt-6">
          <img src="./logo.png" width={231} height={51} className="mo:w-[102px] mo:h-[23px]" />
        </div>
        <div className="  text-[50px] mo:text-xl font-semibold leading-normal mt-[43px] mo:mt-[26px] text-[#FFFFFF]">
          Get Started
        </div>
        <div className=" lg:bg-[url(/footerBgIcon.svg)] bg-contain bg-no-repeat w-full  ">
          <div className="text-center mt-[21px] h-auto">
            <div className=" text-[25px] mo:text-[10px] font-normal leading-normal text-[#8A8A8A]">
              <div>
                Stay ahead of the game: Subscribe to receive the latest
              </div>
              <div>
                updates from EnReach Network!

              </div>
            </div>
            <div className="mt-[27px] mo:mt-10  flex justify-center mo:flex-col mo:!w-full  mo:bg-[url(/mo-footerBgIcon.svg)] mo:bg-contain mo:bg-no-repeat  ">
              <div>
                <input value={inputEmail} onChange={(e) => { setInputEmail(e.target.value); setErrorText('') }} placeholder="sample@email.com" className=" w-[393px] mo:!w-[204px] h-[67px] mo:!h-[38px] rounded-[33px] bg-[#242424]" />
                <div className="h-5 mt-2 mo:text-xs text-center text-red-600">
                  {errorText}
                </div>
              </div>
              <div>
                <button onClick={onSubmitEmail} className=" bg-[#4281FF] btn items-center mo:!justify-center  text-[#FFFFFF] rounded-[33.5px] w-[198px] mo:w-[204px] h-[67px] mo:h-[38px]  text-[25px] mo:text-base font-semibold leading-normal ">Submit</button>
              </div>
            </div>
          </div>
          <div className="mt-[224px] mo:mt-6 mb-5 mo:w-full mo:flex mo:justify-center mo:flex-col mo:items-center">
            <SocialButtons />
            <div className="text-xl mo:text-sm  mo:text-center mo:font-semibold font-medium leading-normal mt-[23px] text-[#FFFFFF]">
              <div>
                Get in Touch
              </div>
              <a href="mailto:contact@enreach.network" >
                contact@enreach.network
              </a>

            </div>
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
                  <span className={`text-xl mo:text-xs cursor-pointer  font-medium leading-normal  ${dealHover?.isHover && dealHover.index === index
                    ? "text-[#BEBEBE]"
                    : "text-[#8A8A8A]"
                    }`} >{item.name}</span>
                </div>
              })}
            </div>
            <div className="flex w-full justify-end mo:justify-center text-[#737373] mo:text-xs mo:mt-[11px] text-xl  font-medium leading-normal  ">
              © EnReach Foundation, {currentYear}. All rights reserved.
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default AFooter