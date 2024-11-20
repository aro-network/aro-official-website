import * as Tooltip from '@radix-ui/react-tooltip';
import { SocialButtons } from "./social-buttons";


export function Hero() {
    return <div className="flex justify-end hero">
        <div className="flex flex-col">
            <div className="flex items-center h-fit">
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <button className="bg-white text-black py-[10px] sm:py-[8px] sm:text-4  px-6 sm:px-4 rounded-full text-xl mr-4 ">
                                Get Started
                            </button>
                        </Tooltip.Trigger>
                        <Tooltip.Content align='center' sideOffset={8} className='select-none rounded-lg bg-gray-900 px-[15px] py-2.5 text-[15px] leading-none text-white'>
                            <p>Coming Soon</p>
                        </Tooltip.Content>
                    </Tooltip.Root>
                </Tooltip.Provider>
                <SocialButtons />
            </div>
            <div>
                <div className="block sm:hidden">
                    <p className="m-0 mt-5 text-4xl lg:text-6xl font-normal  leading-[1.1] drop-shadow-lg">
                        THE GENESIS OF OPEN EDGE,
                    </p>
                    <p className="m-0 mt-5 text-4xl lg:text-6xl font-normal leading-[1.1] drop-shadow-lg">
                        FOR THE AI ERA
                    </p>
                </div>
                <div className="hidden sm:block ">
                    <p className="m-0 mt-5 text-4xl lg:text-7xl font-normal leading-[1.5] drop-shadow-lg">
                        THE GENESIS OF OPEN EDGE,FOR THE AI ERA
                    </p>
                </div>
            </div>


            <p className="m-0 text-3xl lg:text-[24px] sm:text-[22px] leading-[1.4] font-light lg:max-w-[55%] text-white/50 mt-8">
                Unleashing Intelligence with a Globally-Connected Edge Cloud.
            </p>
        </div>
    </div>
}