import { useRef } from "react";
import { motion } from "motion/react";
import { useScrollControl } from "../hooks/useScrollControl";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Animation } from "./Animation";
import { solutions } from "../config/solutions";


export function Solutions() {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { currentSection, scroll, setCurrentSection } = useScrollControl();


    const handleWheel = (e: React.WheelEvent) => {
        scroll(e.deltaY > 0 ? 'down' : 'up', 1, solutions.length);
    };

    const currentSolution = solutions[currentSection];

    return (
        <div className=" h-[150vh] mo:pb-20  solutions mt-20" ref={ref} onWheel={handleWheel}>
            <section
                ref={containerRef}
                className="container sticky top-0 h-screen min-h-screen pt-16 solutions__section"
            >

                <div className="flex flex-col items-center h-full gap-16 lg:flex-row ">

                    <div className="flex flex-col gap-8 lg:w-1/2">
                        <div className="container px-4 mx-auto">
                            <h2 className="mb-12 text-3xl font-light leading-10 text-white">THE OPEN EDGE</h2>
                        </div>

                        <motion.div
                            className="p-6 transition-all duration-300 border rounded-3xl bg-white/10 border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}

                        >
                            <div
                                className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-[#5D93FF]"
                            >
                                <currentSolution.icon className={''} size={40} />
                            </div>

                            <h3 className="mb-4 text-[20px] font-light text-[#F3F3F3] mt-4">
                                {currentSolution.title}
                            </h3>
                            <p className="leading-relaxed text-[#F3F3F3B2] text-base cardText">
                                {currentSolution.description}
                            </p>
                        </motion.div>
                        <div className="flex gap-4 mt-8 sm:gap-20 sm:justify-center mo:hidden">
                            <div onClick={() => { setCurrentSection((prev) => prev - 1) }} className="z-50 flex items-center cursor-pointer justify-center w-12 h-12 border rounded-full border-white/10 text-white/50 hover:bg-[#4281FF]">
                                <IconChevronLeft />
                            </div>

                            <div onClick={() => { setCurrentSection((prev) => prev + 1) }} className="z-50 flex items-center cursor-pointer justify-center w-12 h-12 border rounded-full border-white/10 text-white/50 hover:bg-[#4281FF]">
                                <IconChevronRight />
                            </div>
                        </div>

                    </div>

                    <Animation state={currentSection} />
                </div>
            </section>
        </div>
    );
}