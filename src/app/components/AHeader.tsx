import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter, } from "next/navigation"

const AHeader = () => {
  const r = usePathname()
  const rs = useRouter()

  const headerTabList = [
    { href: '/blog', tabName: 'Blog' },
    { href: 'https://docs.aro.network/', tabName: 'Docs' },
    { href: 'dashboard', tabName: 'Dashboard' },
  ];
  const handleTabClick = (href: string) => {
    if (href === '/blog') {
      if (r === '/blog') return;
      rs.push(href);
    } else {
      window.open(href, '_blank');
    }
  };


  return <div>
    <div className={` w-container mo:w-full mo:px-[.625rem] md:px-[2.5rem] h-[6.25rem] m-auto flex py-5 px-[3.125rem] md:w-full  `}>
      <div className="flex justify-between w-full self-baseline">
        <Link href={'/'} className=" flex items-center ">
          <Image alt="" width={211} height={38} src="../aro-logo-dark.svg" className=" mo:w-[140px] mo:h-[1.4375rem]" />
        </Link>
        <div className="text-base font-medium flex mo:gap-[.625rem] gap-5">
          {headerTabList.map((item) => (
            <button
              key={`item_${item.tabName}`}
              onClick={() => handleTabClick(item.href)}
              className={`
                  text-black sociallink 
                  ${r === '/blog' && item.href === '/blog' ? 'cursor-default text-gray-400' : ''} 
                  ${r.replace("/", "") === item.tabName.toLowerCase() ? '!text-[#1C73FF]' : ''}
                `}
              disabled={r === '/blog' && item.href === '/blog'}
            >
              {item.tabName}
            </button>
          ))}
        </div>
      </div>
    </div>

  </div>

}

export default AHeader
