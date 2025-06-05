import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'
import { SiGoogledocs } from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";


const socialLinks = [
    { href: 'https://x.com/AroNetwork', icon: <FaXTwitter /> },
    { href: 'https://discord.gg/Rc4BMUjbNB', icon: <FaDiscord /> },
    { href: 'https://t.me/ARO_Network', icon: <FaTelegramPlane /> },
    { href: 'blog', icon: <RiAppsFill /> },
    { href: 'https://docs.aro.network/', icon: <SiGoogledocs /> },
]


export function SocialButtons({ links = socialLinks, isInfo = false }: { links?: { href: string, icon?: JSX.Element, name?: string }[], isInfo?: boolean }) {

    return <div className={`flex items-center gap-5 ${isInfo && 'mo:gap-[.625rem] flex-row flex-wrap'}`}>
        {
            links.map((item) => {
                return <a
                    key={item.href}
                    className={` ${item.icon && 'border text-lg  w-8 h-8  border-[#000000B2] rounded-full  hover:text-[#1C73FF] hover:border-[#1C73FF] '} text-xl font-medium items-center justify-center flex text-[#000000B2]  `}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {item.name ? <div className=' flex  '>
                        <div className=' hover:text-[#1C73FF] hover:border-[#1C73FF] '>{item.name} </div>
                        <div hidden={item.name === 'Telegram'} className='mx-5 mo:mx-[.625rem]  '>|</div>
                    </div> : item.icon}
                </a>
            })
        }
    </div>
}