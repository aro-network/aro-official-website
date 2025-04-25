import Link from "next/link"
import Image from "next/image"

const AHeader = () => {
  return <div>
    <div className={` w-container mo:w-full mo:px-5 md:px-[2.5rem] m-auto flex py-5 px-[3.125rem] md:w-full  `}>
      <div className="flex justify-between w-full items-center">
        <Link href={'/'} className=" flex items-center gap-[13px] mo:h-[32px] mo:w-[105px] ">
          <Image alt="" width={211} height={38} src="./enreach-logo.svg" />
        </Link>
        <div className=" text-sm font-medium flex  gap-5">
          {/* <button className="text-black">Blog</button> */}
          <button
            onClick={() => {
              document!.getElementById('target-section')!.scrollIntoView({
                behavior: 'smooth'
              })
            }}
            className="bg-[#1C73FF] btn text-white rounded-[1.875rem] text-sm font-medium py-[.625rem] px-5 mo:hidden">
            Join Waitlist</button>
        </div>
      </div>
    </div>

  </div>

}

export default AHeader