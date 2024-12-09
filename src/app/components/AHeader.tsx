import { FC } from "react"
import { headerBtnList } from "../utils/common"
import { useRouter } from "next/navigation"
import Link from "next/link"


const AHeader: FC<{ className?: string, containerClassName?: string }> = ({ className, containerClassName }) => {

  const ur = useRouter()

  return <div>
    <div className={` w-container m-auto flex  pt-10  items-center  ${containerClassName} md:w-full  `}>
      <div className={`w-[50%] px-10 ${className}`}>
        <Link href={'/'}>
          <img src="./logo.png" width={166} />
        </Link>
      </div>
      <div className="flex  justify-end gap-[36px] md:gap-5  w-[50%] button-container">
        {headerBtnList.map((item, index) => {
          return <button onClick={() => { ur.push(item.href) }} className={` animated-button   text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6`} key={`btn_${index}`}>{item.name}</button>
        })}


      </div>
    </div>
  </div>

}

export default AHeader