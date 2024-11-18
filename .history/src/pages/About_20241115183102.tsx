import { methods } from "../config/about";

export function About() {
    return (
        <div className="container pt-40">

            <h3 className="text-6xl font-semibold mb-16 text-white">About</h3>

            <div className="grid lg:grid-cols-2 gap-16">
                <img src="/network.jpg" alt="about" className="about-image rounded-3xl border border-white/10" />
                <div>
                    <div className="about-title">Why We Exist</div>
                    <div className="about-subtitle">Pioneering the Edge Cloud for the AI Era</div>

                    <p className="about-content text-2xl leading-relaxed">
                        EnReach bridges the gap between centralized cloud systems and the needs of next-generation applications. As AI reshapes industries, we bring the cloud closer to users, enabling instant responses, seamless interactions, and scalable performance. By creating an open-layered edge cloud, we empower the AI-driven world with infrastructure designed for speed, flexibility, and accessibility.

                    </p>

                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <div className="about-title mt-20">What Drives Us</div>
                    <div className="about-subtitle">Accelerating Innovation with Edge-First Infrastructure</div>
                    <p className="about-content text-2xl leading-relaxed">The cloud is too “far” to deliver the real-time responsiveness today’s digital experiences demand. EnReach is leading the shift from centralized clouds to edge-first networks, unlocking real-time capabilities and efficiency for AI and next-gen applications. Our edge cloud transforms fragmented resources into a seamless, scalable system, ensuring the future of innovation happens where it’s needed most—right at the edge.</p>
                </div>

            </div>

            <div className="about-title mt-20">How We're Doing It</div>
            <div className="about-subtitle">Shaping an Open Edge Cloud Ecosystem</div>
            <p className="about-content text-2xl">At EnReach, we blend openness and innovation to transform edge computing into a seamless and accessible foundation for the AI era.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                {methods.map((method, index) => (
                    <div key={index} className="about-method border border-white/10 bg-black/20 rounded-3xl p-8">
                        <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full">
                            <method.icon />
                        </div>
                        <div className="about-method-title mt-8 text-3xl">{method.title}</div>
                        <div className="about-method-content mt-4 text-2xl">{method.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}