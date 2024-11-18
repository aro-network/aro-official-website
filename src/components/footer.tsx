import { Logo } from "./logo";
import { SocialButtons } from "./social-buttons";

export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-black/20 border border-white/30 text-white relative container p-8 rounded-[40px] mt-16">
            <div className="flex flex-col justify-between lg:items-center lg:flex-row">
                <Logo />

                <div className="flex flex-col gap-4 mt-8 lg:flex-row lg:mt-0">
                    <a className="transition-colors text-white/50 hover:text-white" href="/media-kit">Media Kit</a>
                    <a className="transition-colors text-white/50 hover:text-white" href="/privacy-policy">Privacy Policy</a>
                    <a className="transition-colors text-white/50 hover:text-white" href="/terms-and-conditions">Terms & Conditions</a>
                </div>
            </div>

            <div className="mt-8">
                <SocialButtons />
            </div>
            <div className="mt-16 text-white/50">© EnReach Labs Foundation, {currentYear}. All rights reserved.</div>
        </footer>
    )
}