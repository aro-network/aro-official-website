import { Logo } from "./logo";
import { SocialButtons } from "./social-buttons";

export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-black/20 border border-white/30 text-white bottom-0  relative container p-8 sm:p-[30px] rounded-[40px] mt-16">
            <div className="flex flex-col items-center justify-between lg:items-center lg:flex-row">
                <Logo />
                <div className="mo:mt-8">
                    <SocialButtons />
                </div>

            </div>
            <div className="  mt-[50px]">
                <div className="flex flex-col gap-4 border-t border-[#F3F3F333] lg:flex-row lg:mt-0">
                    <div className="flex justify-between w-full mt-4 sm:flex-col-reverse sm:gap-5 sm:text-xs">
                        <div className=" text-white/50 sm:text-center"> © EnReach AI Foundation, {currentYear}. All rights reserved.</div>
                        <div className=" flex gap-[42px] sm:flex-col sm:justify-center sm:w-full sm:items-center  sm:gap-5">
                            <a className="transition-colors text-white/50 hover:text-white" href="https://enreach.network/Media kit.zip">Media Kit</a>
                            <a className="transition-colors text-white/50 hover:text-white" target='_blank' href="https://docs.google.com/document/d/1YZDlxE88v2SwYPclcFeUVfu2U-LgmpEqy2As1ensDg0/edit?tab=t.0">Privacy Policy</a>
                            <a className="transition-colors text-white/50 hover:text-white" target='_blank' href="https://docs.google.com/document/d/1k1uHHMCDgJP2tOpgCUslHo3ai6ovMYbvO2adMxNtOUI/edit?tab=t.0">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    )
}