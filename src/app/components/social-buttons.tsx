import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'
import { SiGoogledocs } from "react-icons/si";
const socialLinks = [
    { href: 'https://x.com/EnReachNetwork', icon: <FaXTwitter /> },
    { href: 'https://discord.gg/Rc4BMUjbNB', icon: <FaDiscord /> },
    { href: 'https://t.me/EnReachNetwork', icon: <FaTelegramPlane /> },
    { href: 'https://docs.enreach.network/', icon: <SiGoogledocs /> },
]


export function SocialButtons({ links = socialLinks }: { links?: { href: string, icon?: JSX.Element, name?: string }[] }) {

    return <div className="flex items-center gap-5  flex-row">
        {
            links.map((item) => {
                return <a
                    key={item.href}
                    className={` ${item.icon && 'border text-lg  w-8 h-8  border-[#000000B2] rounded-full  hover:text-[#1C73FF] hover:border-[#1C73FF] '} text-xl font-medium items-center justify-center flex text-[#000000B2]  `}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {item.name ? <div className='mt-[3.125rem] grid grid-cols-[repeat(auto-fill,minmax(2.5rem,1fr))]'>
                        <div className=' hover:text-[#1C73FF] hover:border-[#1C73FF] mo:w-[3.125rem] '>{item.name} </div>
                        <div hidden={item.name === 'Telegram'} className='mx-10  '>|</div>
                    </div> : item.icon}
                </a>
            })
        }
    </div>
}