'use client'

import React from 'react'

const socialLinks = [
    { href: 'https://discord.gg/Rc4BMUjbNB', icon: './discord.svg' },
    { href: 'https://x.com/EnReachNetwork', icon: './x.svg' },
    { href: 'https://t.me/EnReachNetwork', icon: './telegram.svg' },
]

export function SocialButtons() {
    return <div className="flex items-center gap-8">
        {
            socialLinks.map(({ href, icon }) => {

                return <a
                    key={href}
                    className=" mo:w-6 mo:h-6 border-white/20 hover:bg-white/10 rounded-full "
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={icon}></img>
                </a>
            })
        }
    </div>
}