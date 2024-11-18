import { SocialButtons } from "./social-buttons";

export function Subscribe() {
    return <div className="relative w-screen h-screen flex flex-col items-center p-4 lg:p-16">
        <div className="section-title text-center">Get Started</div>
        <div className="text-white/50 mt-4">Stay Ahead of the Game: Subscribe to Receive the Latest Updates from EnReach!</div>
        <div className="flex gap-2 mt-8 flex-col lg:flex-row mb-8">
            <input className="bg-black/10 h-12 w-full lg:w-60 rounded-full border border-white/10 px-4" placeholder="Enter your email" />
            <button className="bg-white text-black py-[10px] px-6 rounded-full text-xl mr-4 font-semibold w-full lg:w-auto">Subscribe</button>
        </div>

        <SocialButtons />
    </div>
}