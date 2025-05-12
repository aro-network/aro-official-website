import Link from "next/link"
import Image from "next/image"
import { usePathname, } from "next/navigation"

const AHeader = () => {
  const r = usePathname()
  console.log('rrrrr', r);

  const headerTabList = [
    { href: 'blog', tabName: 'Blog' },
    { href: 'https://docs.enreach.network/', tabName: 'Docs' },
    { href: 'https://devnet.dashboard.enreach.network/', tabName: 'Dashboard' },

  ]

  return <div>
    <div className={` w-container mo:w-full mo:px-5 md:px-[2.5rem] h-[6.25rem] m-auto flex py-5 px-[3.125rem] md:w-full  `}>
      <div className="flex justify-between w-full items-center">
        <Link href={'/'} className=" flex items-center gap-[13px] ">
          <Image alt="" width={211} height={38} src="../enreach-logo.svg" className="w-[13.1875rem] h-[2.375rem] mo:w-[140px] mo:h-[1.4375rem]" />
        </Link>
        <div
          className={`  text-base font-medium flex  gap-5  `}>
          {headerTabList.map((item, index) => {
            return <button key={`item_${item.tabName}`}
              onClick={() => { window.open(item.href) }}
              className={` text-black  sociallink ${index === 2 && 'mo:hidden'} ${r.replace("/", "") === item.tabName.toLowerCase() && '!text-[#1C73FF]'} `}>{item.tabName}</button>
          })}

        </div>
      </div>
    </div>

  </div>

}

export default AHeader
