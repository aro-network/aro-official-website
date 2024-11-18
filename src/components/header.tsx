import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconMenu } from "@tabler/icons-react";
import { Logo } from "./logo";

const sections = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Doc', href: 'https://enreach-ai.gitbook.io/enreach.ai' },
]

export function Header() {
    return (
        <div className="fixed w-screen top-4 left-0 right-0 z-50 flex justify-center items-center">
            <div className="w-full max-w-[1440px] py-4 px-8 bg-[#0d0d0d4d] border border-[#f3f3f31a] rounded-[30px] flex justify-between items-center z-10 backdrop-blur-lg">
                <a href="/">
                    <Logo />
                </a>

                <div className="hidden lg:flex gap-16">
                    {
                        sections.map((section) => (
                            <a key={section.href} href={section.href}>{section.label}</a>
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
                                    <DropdownMenu.Item key={section.href} className="text-black text-sm h-8 flex items-center px-2">
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