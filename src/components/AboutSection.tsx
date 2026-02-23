"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Music, Sparkles } from "lucide-react";

const features = [
    {
        icon: <Music size={32} className="text-ziewPurple" />,
        title: "Spokojne Melodie",
        desc: "Autorskie kołysanki i wyciszające dźwięki, które pomogą maluszkowi zrelaksować się i łatwiej zasnąć po pełnym wrażeń dniu."
    },
    {
        icon: <ShieldCheck size={32} className="text-ziewMoon" />,
        title: "Bezpieczna Przestrzeń",
        desc: "Dbamy o brak gwałtownych, przebodźcowujących obrazów. Nasze filmy wypełnione są ciepłem i uroczymi, sennymi zwierzątkami."
    },
    {
        icon: <Heart size={32} className="text-[#f43f5e]" />,
        title: "Dla Rozwoju",
        desc: "Radosne piosenki na dzień zachęcają do ruchu, a wieczorne klasyki otulają poczuciem bezpieczeństwa."
    }
];

export default function AboutSection() {
    return (
        <section className="w-full py-24 px-6 relative z-0">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 relative"
                >
                    <Sparkles className="absolute -top-6 -left-8 text-ziewMoon animate-pulse-slow" size={32} />
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-ziewNight mb-6">
                        Dlaczego <span className="text-ziewPurple">Ziewnutki</span>?
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-ziewNight/80 max-w-3xl mx-auto leading-relaxed">
                        Ziewnutki to miejsce stworzone z największą miłością i myślą o najmłodszych.
                        Pragniemy, aby nasza muzyka towarzyszyła wam każdego dnia, dając poczucie radości rano
                        i wyciszenia wieczorem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl border border-white transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-ziewPurple/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-500" />

                            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 relative z-10 rotate-3 group-hover:-rotate-3 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-ziewNight mb-4 relative z-10">
                                {feature.title}
                            </h3>
                            <p className="text-ziewNight/70 leading-relaxed relative z-10">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
