import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconMenu } from "@tabler/icons-react";
import { Logo } from "./logo";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
const sections = [

    { label: 'Home', href: 'https://enreach.network/' },
    { label: 'About Us', href: 'https://about-us.enreach.network/' },
    { label: 'Docs', href: 'https://docs.enreach.network' },

]

export function Header() {
    const [dealHover, setDealHover] = useState<{ index?: number, isHover?: boolean } | null>(null);

    return (
        <div className="fixed left-0 right-0 z-50 flex items-center justify-center w-screen sm:top-2">
            <div className="w-full max-w-[1440px] py-4 px-8 bg-[#0d0d0d4d] border border-[#f3f3f31a] rounded-[30px] flex justify-between items-center z-10 backdrop-blur-lg">
                <a href="https://enreach.network/">
                    <Logo />
                </a>

                <div className="hidden gap-16 lg:flex">
                    {
                        sections.map((section, index) => (
                            <div
                                key={section.href}
                                className="relative"
                                onMouseEnter={() => index === 3 && setDealHover({ index, isHover: true })}
                                onMouseLeave={() => index === 3 && setDealHover({ index, isHover: false })}
                            >
                                {index === 3 ? (

                                    <Popover.Root open={dealHover?.index === 3 && dealHover.isHover} >
                                        <Popover.Trigger asChild >
                                            <Link to={section.href} key={section.href} className="cursor-default ">{section.label}</Link>
                                        </Popover.Trigger>
                                        <Popover.Content
                                            className="px-4 py-2 text-[#FFFFF] bg-[#0d0d0d4d] border border-[#f3f3f31a] rounded-[30px]"
                                            hideWhenDetached
                                            align="center"
                                            side="bottom"
                                            sideOffset={25}
                                        // border: 1px solid #F3F3F333
                                        >
                                            Coming Soon…
                                        </Popover.Content>
                                    </Popover.Root>
                                ) : (
                                    // Render normal links for other sections
                                    <Link key={section.href} reloadDocument={true} to={section.href}>{section.label}</Link>
                                )}
                            </div>
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