import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
    { href: 'https://x.com/EnReachNetwork', icon: <FaXTwitter className='text-[#000000B2]' /> },
    { href: 'https://discord.gg/Rc4BMUjbNB', icon: <FaDiscord className='text-[#000000B2]' /> },
    { href: 'https://t.me/EnReachNetwork', icon: <FaTelegramPlane className='text-[#000000B2]' /> },
]


export function SocialButtons() {

    return <div className="flex items-center gap-5  flex-row">
        {
            socialLinks.map((item) => {
                return <a
                    key={item.href}
                    className="border text-lg items-center justify-center flex hover:text-[#4281FF] hover:border-[#4281FF]  w-8 h-8  border-[#000000B2] rounded-full "
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