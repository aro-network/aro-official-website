import { FC, Fragment } from "react"
import { headerBtnList } from "../utils/common"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"


const AHeader: FC<{ className?: string, containerClassName?: string }> = ({ className, containerClassName }) => {

  const ur = useRouter()
  const pathname = usePathname()

  console.log('pathnamepathname', pathname);


  return <Fragment>
    <div className={` w-container m-auto flex  items-center  ${containerClassName} md:w-full  `}>
      <div className={`w-[50%] px-10 pt-10 ${className}`}>
        <Link href={'/'}>
          <img src="./logo.png" width={166} />
        </Link>
      </div>
      <div className="flex  justify-end gap-[36px] md:gap-5  w-[50%]">
        {headerBtnList.map((item, index) => {
          // 
          return <button onClick={() => { ur.push(item.href) }} className={`  headerbtn nav-item ${pathname === item.href ? 'current' : ''} text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6`} key={`btn_${index}`}>{item.name}</button>
        })}

      </div>
    </div>
  </Fragment>

}

export default AHeader