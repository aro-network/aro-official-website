"use client"
import { AllHTMLAttributes, ReactHTML } from "react";
import { FC } from "react";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiAppsFill } from "react-icons/ri";
import { cn } from "../utils/cn";

function AosAnimItem({ className, children, as, anim = true, ...props }: AllHTMLAttributes<HTMLDivElement> & { as?: (keyof ReactHTML), anim?: boolean }) {
  const Component = (as ?? "div") as any
  const animProps = anim ? {
    'data-aos': "fade-up",
    'data-aos-duration': "1000"
  } : {}
  return <Component className={cn({ 'aos-init aos-animate': anim }, className)} {...props} {...animProps} >{children}</Component>
}

const socialLinks = [
  { href: 'https://t.me/ARO_Network', text: 'Telegram', icon: <FaTelegramPlane /> },
  { href: 'https://discord.gg/Rc4BMUjbNB', text: 'Discord', icon: <FaDiscord /> },
  {
    href: 'https://docs.aro.network/', text: 'Docs', icon: <svg width="0.85em" height="0.85em" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_200_54)">
        <path d="M3.30894 23.6078C2.47769 23.1724 2.00269 22.258 2.00269 21.0982V4.13083C2.00071 1.9201 3.90071 0.125 6.24008 0.125H19.1858C21.5232 0.125 23.2471 1.9201 23.2471 4.13083V21.1022C23.2471 22.6717 22.6256 23.3248 22.1447 23.5761C21.6598 23.8295 20.6346 24.1204 19.2175 23.2535L19.1541 23.212L19.1007 23.1684C18.8632 22.9745 18.0399 22.4144 17.4046 22.4144C17.175 22.4144 16.7791 22.6123 16.3596 22.83C15.5184 23.2555 14.3646 23.8433 12.71 23.8433C11.0732 23.8433 10.1628 23.2674 9.49185 22.8458C9.03269 22.5549 8.79914 22.4183 8.46467 22.4183C7.56217 22.4183 6.61217 23.0319 6.34894 23.2417L6.2955 23.2852L6.2381 23.3248C5.62456 23.687 4.99915 23.875 4.41727 23.875C4.03113 23.876 3.65037 23.7844 3.30696 23.6078H3.30894ZM6.37467 5.12438C6.04319 5.12438 5.72528 5.25605 5.49089 5.49045C5.2565 5.72484 5.12482 6.04274 5.12482 6.37422C5.12482 6.7057 5.2565 7.0236 5.49089 7.25799C5.72528 7.49238 6.04319 7.62406 6.37467 7.62406H18.8731C19.2046 7.62406 19.5225 7.49238 19.7569 7.25799C19.9913 7.0236 20.1229 6.7057 20.1229 6.37422C20.1229 6.04274 19.9913 5.72484 19.7569 5.49045C19.5225 5.25605 19.2046 5.12438 18.8731 5.12438H6.37467ZM6.37467 10.1257C6.04319 10.1257 5.72528 10.2574 5.49089 10.4918C5.2565 10.7262 5.12482 11.0441 5.12482 11.3756C5.12482 11.7071 5.2565 12.025 5.49089 12.2593C5.72528 12.4937 6.04319 12.6254 6.37467 12.6254H18.8731C19.2046 12.6254 19.5225 12.4937 19.7569 12.2593C19.9913 12.025 20.1229 11.7071 20.1229 11.3756C20.1229 11.0441 19.9913 10.7262 19.7569 10.4918C19.5225 10.2574 19.2046 10.1257 18.8731 10.1257H6.37467ZM6.37467 15.1231C6.04319 15.1231 5.72528 15.2548 5.49089 15.4892C5.2565 15.7236 5.12482 16.0415 5.12482 16.373C5.12482 16.7044 5.2565 17.0224 5.49089 17.2567C5.72528 17.4911 6.04319 17.6228 6.37467 17.6228H12.6249C12.9564 17.6228 13.2743 17.4911 13.5086 17.2567C13.743 17.0224 13.8747 16.7044 13.8747 16.373C13.8747 16.0415 13.743 15.7236 13.5086 15.4892C13.2743 15.2548 12.9564 15.1231 12.6249 15.1231H6.37467Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_200_54">
          <rect width="23.75" height="23.75" fill="white" transform="translate(0.75 0.125)" />
        </clipPath>
      </defs>
    </svg>
  },
  { href: 'https://x.com/AroNetwork', text: 'Twitter', icon: <BsTwitterX className="text-[0.8em]" /> },
  // { href: 'https://github.com/aro-network', text: 'Github', icon: <IoLogoGithub /> },
  { href: 'https://medium.com/@AroNetwork', text: 'Blog', icon: <RiAppsFill /> },
]

const AFooter: FC = () => {
  const currentYear = new Date().getFullYear()



  return <AosAnimItem anim={false} className={cn("max-w-[1240px] w-full mx-auto relative mt-[124px] mo:mt-16 mo:pt-12")}>
    <img src="/bg_footer_star.svg" className="w-[calc(100%-56px)] h-auto" />
    <img src="/bg_footer.svg" className="w-full h-auto" />
    <div className="absolute top-0 w-full flex flex-col items-center gap-2.5">
      <div className="text-white font-medium text-[30px] gap-8 flex items-center mo:text-2xl mo:gap-6">
        {socialLinks.map(item => <div key={item.href} onClick={() => open(item.href, '_blank')} className="cursor-pointer hover:text-[#AEFB68]">{item.icon}</div>)}
      </div>
      <div className="text-[#646464] mo:font-medium mo:text-xs">© ARO Network {currentYear}. Powered by the People.</div>
      <div className="mt-3 h-0.5 w-[226px]" style={{
        background: 'linear-gradient(90deg, #090C17 0%, #00E42A 51%, #090C17 100%)'
      }} />
    </div>
  </AosAnimItem>
}

export default AFooter
