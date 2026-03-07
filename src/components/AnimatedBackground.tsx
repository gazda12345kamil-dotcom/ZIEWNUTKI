"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
}));

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden bg-ziewCream/50">
            {/* Background Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-ziewPurple/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-ziewMoon/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-ziewBlue/20 rounded-full blur-[80px]"
            />

            {/* Twinkling Stars */}
            <svg className="absolute inset-0 w-full h-full">
                {stars.map((star) => (
                    <motion.circle
                        key={star.id}
                        cx={`${star.x}%`}
                        cy={`${star.y}%`}
                        r={star.size}
                        fill="#fcd34d"
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: [0.1, 0.8, 0.1] }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>

            {/* Floating Clouds */}
            <motion.svg
                viewBox="0 0 200 100"
                className="absolute top-[15%] left-[-10%] w-48 text-white/50 drop-shadow-lg"
                animate={{ x: ["0vw", "110vw"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <path d="M50 60 a20 20 0 0 1 0 -40 a30 30 0 0 1 50 -10 a30 30 0 0 1 50 10 a20 20 0 0 1 0 40 z" fill="currentColor" />
            </motion.svg>

            <motion.svg
                viewBox="0 0 200 100"
                className="absolute top-[40%] left-[-20%] w-64 text-white/40 drop-shadow-xl"
                animate={{ x: ["0vw", "120vw"] }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: 15 }}
            >
                <path d="M50 60 a20 20 0 0 1 0 -40 a30 30 0 0 1 50 -10 a30 30 0 0 1 50 10 a20 20 0 0 1 0 40 z" fill="currentColor" />
            </motion.svg>
        </div>
    );
}
