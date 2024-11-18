import { Logo } from "./logo";
import { SocialButtons } from "./social-buttons";

export function Footer() {
    return (
        <footer className="bg-black/20 border border-white/30 text-white relative container p-8 rounded-[40px] mt-16">
            <div className="flex lg:items-center justify-between lg:flex-row flex-col">
                <Logo />

                <div className="flex gap-4 lg:flex-row flex-col mt-8 lg:mt-0">
                    <a className="text-white/50 hover:text-white transition-colors" href="/media-kit">Media Kit</a>
                    <a className="text-white/50 hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a>
                    <a className="text-white/50 hover:text-white transition-colors" href="/terms-and-conditions">Terms & Conditions</a>
                </div>
            </div>

            <div className="mt-8">
                <SocialButtons />
            </div>
            <div className="mt-16 text-white/50">© EnReach Labs Foundation, 2024. All rights reserved.</div>
        </footer>
    )
}