

const socialLinks = [
    { href: 'https://discord.gg/XbWKu397', icon: './discord.svg' },
    { href: 'https://x.com/EnReachAI', icon: './x.svg' },
    { href: 'https://t.me/+bwjcPLf_ZQ00YTBh', icon: './telegram.svg' },
]

export function SocialButtons() {
    return <div className="flex items-center gap-8">
        {
            socialLinks.map(({ href, icon }) => {

                return <a
                    key={href}
                    className=" border-white/20 hover:bg-white/10 rounded-full "
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