import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconMenu } from "@tabler/icons-react";
import { Logo } from "./logo";
import { useState } from "react";

const sections = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Docs', href: 'https://docs.enreach.network' },
    { label: 'Sign In', href: '' },

]

export function Header() {
    const [dealHover, setDealHover] = useState<{ index?: number, isHover?: boolean } | null>(null);

    return (
        <div className="fixed left-0 right-0 z-50 flex items-center justify-center w-screen top-4">
            <div className="w-full max-w-[1440px] py-4 px-8 bg-[#0d0d0d4d] border border-[#f3f3f31a] rounded-[30px] flex justify-between items-center z-10 backdrop-blur-lg">
                <a href="/">
                    <Logo />
                </a>

                <div className="hidden gap-16 lg:flex">
                    {
                        sections.map((section, index) => (

                            <a
                                onMouseOver={() => {
                                    setDealHover({ index, isHover: true });
                                }}
                                onMouseLeave={() => {
                                    setDealHover({ index, isHover: false });
                                }}
                                key={section.href} href={section.href}>

                                {index === 3 && dealHover?.index === 3 && dealHover.isHover ? 'Coming Soon…' : section.label}</a>
                        ))
                    }
                </div>

                <DropdownMenu.Root modal={false}>
                    <DropdownMenu.Trigger className="lg:hidden">
                        <IconMenu />
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="min-w-[220px] rounded-md bg-white p-[5px]">
                            {
                                sections.map((section) => (
                                    <DropdownMenu.Item key={section.href} className="flex items-center h-8 px-2 text-sm text-black">
                                        <a href={section.href}>{section.label}</a>
                                    </DropdownMenu.Item>
                                ))
                            }
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
        </div>
    )
}