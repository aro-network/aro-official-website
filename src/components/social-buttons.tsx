import { IconDiscord, IconTelegram, IconX } from "../icons"


const socialLinks = [
    { label: 'Discord', href: 'https://discord.gg/XbWKu397', icon: IconDiscord },
    { label: 'Twitter', href: 'https://x.com/EnReachAI', icon: IconX },
    { label: 'Telegram', href: 'https://t.me/+bwjcPLf_ZQ00YTBh', icon: IconTelegram },
]

export function SocialButtons() {
    return <div className="flex items-center gap-4">
        {
            socialLinks.map(({ label, href, icon }) => {
                const Icon = icon

                return <a
                    key={label}
                    className="flex items-center justify-center border rounded-full w-[40px] h-[40px] border-white/20 hover:bg-white/10"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon />
                </a>
            })
        }
    </div>
}