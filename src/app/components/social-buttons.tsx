import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'
import { RiAppsFill } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";
const socialLinks = [
    { href: 'https://x.com/EnReachNetwork', icon: <FaXTwitter /> },
    { href: 'https://discord.gg/Rc4BMUjbNB', icon: <FaDiscord /> },
    { href: 'https://t.me/EnReachNetwork', icon: <FaTelegramPlane /> },
    { href: '', icon: <RiAppsFill /> },
    { href: 'https://docs.enreach.network/', icon: <SiGoogledocs /> },
]


export function SocialButtons() {

    return <div className="flex items-center gap-5  flex-row">
        {
            socialLinks.map((item) => {
                return <a
                    key={item.href}

                    className="border text-lg items-center justify-center flex text-[#000000B2] hover:text-[#1C73FF] hover:border-[#1C73FF]  w-8 h-8  border-[#000000B2] rounded-full "
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {item.icon}
                </a>
            })
        }
    </div>
}