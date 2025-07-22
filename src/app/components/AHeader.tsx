import Link from "next/link"
import { useRouter, } from "next/navigation"
import { cn } from "../utils/cn"
import { Ref, useRef, useState } from "react"
import { IoMenu } from "react-icons/io5"
import { useClickAway } from "react-use"



function MBtn({ type = '1', className, onClick, content, contentClassName, ref }: { type?: '1' | '2' | "3", className?: string, onClick?: () => void, content?: React.ReactNode, contentClassName?: string, ref?: Ref<HTMLDivElement> }) {
  return <div className={cn('cursor-pointer text-sm select-none rounded-full w-fit transition-all bg-no-repeat hover:animate-bg-in', {
    'text-[#A6A7AD] hover:bg-btn hover:text-[#11111C]': type == '1',
    'bg-btn text-[#11111C] hover:bg-btnHover borderLinerGridentL2 border': type == '2',
    "bg-white/10 text-white text-left text-base h-[48px] flex items-center": type == '3',
  }, className)} onClick={onClick} ref={ref as any}>
    <div className={cn("select-none w-fit rounded-full transition-all", {
      'px-2 py-1': type == '1',
      'px-9 py-3.5  hover:bg-btn hover:bg-clip-text hover:text-transparent transition-all bg-no-repeat hover:animate-bg-in': type == '2',
      "px-6": type == '3',
    }, contentClassName)}>
      {content}
    </div>
  </div>
}
const AHeader = () => {
  const r = useRouter()

  const trigerRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const [showMenus, setShowMenus] = useState(false)

  useClickAway(ref, (e) => {
    if (e.target && trigerRef.current && !trigerRef.current.contains(e.target as any)) {
      setShowMenus(false)
    }
  })

  const goTo = (urlpath: string) => {
    if (urlpath === '/blog') {
      r.push(urlpath)
    } else {
      window.open(urlpath, '_blank')
    }
  }

  const dashboarSignup = 'https://dashboard.aro.network/signup'
  const headerTabList = [
    { href: 'https://shop.aro.network', tabName: 'Get a Node', },
    { href: 'https://medium.com/aronetwork', tabName: 'Blog', },
    { href: 'https://docs.aro.network/', tabName: 'Docs' },
    { href: dashboarSignup, tabName: 'Dashboard' },
    { href: dashboarSignup, tabName: 'Get Started' },
  ];
  const maxWidthClassName = 'max-w-[1140px] px-4 w-full mx-auto'



  return <div>
    <div className="w-full mo:sticky top-0 z-50 ">
      <div className="bg-[#07070A] flex w-full h-[71px] mo:h-[56px]">
        <div className={cn("flex items-center gap-5 mx-auto relative mo:px-0", maxWidthClassName)}>
          <div className="mo:px-4 flex w-full justify-between">
            <Link href={'/'} className=" flex items-center mr-auto">
              <img alt="Logo" src="/aro-logo.svg" className="w-[205px] h-auto mo:w-[158px]" />
            </Link>
            <div className="flex items-center gap-5 mo:hidden">
              {
                headerTabList.map((item, i) =>
                  <MBtn key={`head_${i}`}
                    type={i === headerTabList.length - 1 ? '2' : '1'}
                    contentClassName={i === headerTabList.length - 1 ? 'py-2.5' : ''}
                    onClick={() => goTo(item.href)} content={item.tabName} className={i === headerTabList.length - 1 ? 'ml-4' : ''} />
                )
              }
            </div>

            <MBtn ref={trigerRef} type="2" className="rounded-lg hidden mo:block" contentClassName="px-0.5 py-0 text-2xl hover:text-[#00E42A]" content={<IoMenu />} onClick={() => setShowMenus(!showMenus)} />
          </div>
          <div ref={ref} className={cn("absolute top-full hidden w-full mo:flex bg-black transition-all p-5 flex-col gap-4  z-10", showMenus ? "translate-x-0" : "translate-x-full !hidden")}>
            {headerTabList.slice(0, headerTabList.length - 1).map((item, i) => <MBtn key={`head_${i}`} type="3" className="w-full" onClick={() => goTo(item.href)} content={item.tabName} />)}
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#384137]"></div>
    </div>
  </div>

}

export default AHeader
