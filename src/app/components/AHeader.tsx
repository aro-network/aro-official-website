import { FC } from "react"
import { headerBtnList } from "../utils/common"
import { useRouter } from "next/navigation"
import Link from "next/link"


const AHeader: FC<{ className?: string, containerClassName?: string, rightClassName?: string }> = ({ className = '', containerClassName = '', rightClassName = '' }) => {

  const ur = useRouter()

  return <div>
    <div className={` w-container m-auto flex  pt-10  items-center  ${containerClassName} md:w-full  `}>
      <div className={`w-[50%] px-10 ${className}`}>
        <Link href={'/'} className=" flex items-center gap-[13px]">
          <img src="./flower.svg" />
          <span className="text-[#FFF] abcgintoText text-[30px] font-bold leading-normal">EnReach</span>
        </Link>
      </div>
      <div className={`flex ${rightClassName} justify-end gap-[36px] md:gap-5  w-[50%] button-container`}>
        {headerBtnList.map((item, index) => {
          return <a href={item.href} target={item.target} className={` headerBtn   text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6`} key={`btn_${index}`}>{item.name}</a>
        })}


      </div>
    </div>
  </div>

}

export default AHeader