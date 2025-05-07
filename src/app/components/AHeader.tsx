import Link from "next/link"
import Image from "next/image"
// import { usePathname, } from "next/navigation"

const AHeader = () => {
  // const r = usePathname()


  return <div>
    <div className={` w-container mo:w-full mo:px-5 md:px-[2.5rem] m-auto flex py-5 px-[3.125rem] md:w-full  `}>
      <div className="flex justify-between w-full items-center">
        <Link href={'/'} className=" flex items-center gap-[13px] ">
          <Image alt="" width={211} height={38} src="../enreach-logo.svg" className="w-[13.1875rem] h-[2.375rem] mo:w-[140px] mo:h-[1.4375rem]" />
        </Link>
        <div
          className={`  text-base font-medium flex  gap-5  `}>
          {/* <button className=" text-black  sociallink">Blog</button> */}
          <button onClick={() => { window.open('https://docs.enreach.network/') }} className=" sociallink text-black ">Docs</button>

        </div>
      </div>
    </div>

  </div>

}

export default AHeader