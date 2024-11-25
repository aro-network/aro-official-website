import clsx from "clsx";
import { architecture } from "../config/architecture";
import { motion, } from "motion/react";
import { useScrollControl } from "../hooks/useScrollControl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Architecture() {
    const { currentSection, scroll, setCurrentSection } = useScrollControl();


    const handleWheel = (e: React.WheelEvent) => {
        scroll(e.deltaY > 0 ? 'down' : 'up', 1, architecture.length);
    };



    const settings = {
        dots: true,
        slidesPerRow: 1,
        arrows: false,
    };
    return (
        <>

            <div
                className=" relative h-[200vh]  mt-[120px] mo:mt-40 sm:h-full mo:hidden"
                onWheel={handleWheel}
            >

                <section className="sticky top-0 flex flex-col h-screen ">
                    <div className="container px-4 py-10 mx-auto">
                        <h2 className="mt-16 text-4xl font-bold text-white">
                            THE OPEN-LAYERED FABRIC
                        </h2>

                        <div className="flex flex-col justify-between w-full h-full gap-8 mt-10 lg:flex-row">
                            <div className="flex flex-col w-full gap-4">
                                {architecture.map((item, index) => {
                                    const Icon = item.icon
                                    return <motion.div
                                        key={item.title}
                                        className={clsx(
                                            "p-5  rounded-3xl cursor-pointer",
                                            currentSection === index
                                                ? "bg-white/10 border border-white/20"
                                                : "opacity-50"
                                        )}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: currentSection === index ? 1 : 0.5,
                                            y: 0
                                        }}
                                        onClick={() => setCurrentSection(index)}
                                    // transition={{ duration: 0.5 }}
                                    >
                                        <div className="flex flex-col items-center gap-4 lg:flex-row ga">
                                            <Icon />
                                            <h3 className="text-[20px] font-light text-center leading-6 ">{item.title}</h3>
                                        </div>
                                        <p className="mt-4 text-base leading-relaxed text-white/80 cardText">
                                            {item.description}
                                        </p>

                                    </motion.div>
                                })}

                            </div>
                            <div className="relative w-full bottom-20 ">
                                <div className="z-10 h-4 max-w-full">
                                    <img className={'bg-cover object-cover w-[700px]'} style={{ transform: `translateY(${currentSection > -1 ? 80 : 0}px)`, opacity: currentSection > -1 ? 1 : 0, transition: 'all 0.4s' }} src="/application.png" />
                                </div>
                                <div className="relative z-20 h-4 max-w-full">
                                    <img className={'w-[700px]'} style={{ transform: `translateY(${currentSection > 0 ? 0 : -80}px)`, opacity: currentSection > 0 ? 1 : 0, transition: 'all 0.4s' }} src="/orchestration.png" />
                                </div>
                                <div className="relative z-30 h-4 max-w-full">
                                    <img className={'w-[700px]'} style={{ transform: `translateY(${currentSection > 1 ? -80 : -160}px)`, opacity: currentSection > 1 ? 1 : 0, transition: 'all 0.4s' }} src="/resource.png" />
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>


            <div className="container 2xl:top-40 mo:top-20 ng:hidden">
                <h2 className="section-title">The Open-Layered Fabric</h2>
                <div className="flex flex-col gap-16 mt-10 lg:flex-row">
                    <Slider {...settings} className="">
                        {
                            architecture.map(({ title, description, icon }, index) => {
                                const Icon = icon
                                return (
                                    <div>
                                        <div
                                            className=' p-4   h-[232px]' key={index}>
                                            <div className="flex items-center gap-1 lg:flex-row">
                                                <Icon />
                                                <h3 className="text-xl text-center ">{title}</h3>
                                            </div>
                                            <p className="mt-4 opacity-50 lg:block">{description}</p>
                                        </div>
                                        <img className={'bg-cover object-cover'} src="/application.png" />

                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

            </div>
        </>
    );
}