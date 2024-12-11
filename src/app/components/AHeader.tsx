import { FC, useState } from "react"
import { headerBtnList } from "../utils/common"
import Link from "next/link"
import useMobileDetect from "../hooks/useMobileDetect"
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import classNames from "classnames"
import { APoperMenu } from "./APoperModal"


const AHeader: FC<{ className?: string, containerClassName?: string, rightClassName?: string }> = ({ className = '', containerClassName = '', rightClassName = '' }) => {
  const isMobile = useMobileDetect()
  const [isShow, setIsShow] = useState(false)
  console.log('isMobileisMobileisMobile', isMobile);



  return <div>
    <div className={` w-container mo:w-full mo:px-[12px] m-auto flex  pt-10  items-center  ${containerClassName} md:w-full  `}>
      <div className={`w-[50%] lg:px-10 ${className}`}>
        <Link href={'/'} className=" flex items-center gap-[13px] mo:h-[32px] w-[105px]">
          <img src="./flower.svg" className="mo:hidden" />
          <img src="./logo.png" className="lg:hidden" />
          <span className="text-[#FFF] mo:hidden abcgintoText text-[35px] font-semibold leading-normal">EnReach</span>
        </Link>
      </div>
      {isMobile ?
        <div className="flex justify-end  w-[50%]">
          <APoperMenu
            containerClassName={"!w-[106px] !h-[179px] mo:!right-[0px] "}
            menus={headerBtnList}
            keys={"name"}
            isShowText={true}
            className="absolute z-[9999]"
          >
            <HiOutlineMenu className={classNames(`w-6 h-6 !text-white`)} />
          </APoperMenu>
        </div>

        :
        <div className={`flex ${rightClassName} justify-end gap-[36px] md:gap-5  w-[50%] button-container`}>
          {headerBtnList.map((item, index) => {
            return <a href={item.href} target={item.target} className={` headerBtn   text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6`} key={`btn_${index}`}>{item.name}</a>
          })}


        </div>
      }
    </div>

  </div>

}

export default AHeader