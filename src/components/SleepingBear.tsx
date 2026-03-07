"use client";

import { motion } from "framer-motion";

export default function SleepingBear() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 mb-16 drop-shadow-2xl"
        >
            <motion.svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#8B5A2B]"
            >
                {/* Sleeping Zzz animation */}
                <motion.text
                    x="140"
                    y="60"
                    fontSize="24"
                    fill="#c084fc"
                    fontWeight="bold"
                    animate={{ opacity: [0, 1, 0], y: [60, 40, 20], x: [140, 150, 160] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                >
                    Z
                </motion.text>
                <motion.text
                    x="160"
                    y="40"
                    fontSize="32"
                    fill="#c084fc"
                    fontWeight="bold"
                    animate={{ opacity: [0, 1, 0], y: [40, 10, -10], x: [160, 175, 185] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                >
                    z
                </motion.text>

                {/* Cloud/Pillow Base */}
                <path d="M 20 160 C 20 140, 40 130, 60 130 C 70 110, 110 110, 120 130 C 140 130, 160 140, 160 160 Z" fill="#ffffff" />

                {/* Bear Body */}
                <motion.path
                    d="M 50 140 C 40 100, 130 100, 130 140 Z"
                    fill="currentColor"
                    animate={{
                        d: [
                            "M 50 140 C 40 100, 130 100, 130 140 Z",
                            "M 50 140 C 40 95, 130 95, 130 140 Z",
                            "M 50 140 C 40 100, 130 100, 130 140 Z"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Bear Ears */}
                <circle cx="65" cy="115" r="12" fill="currentColor" />
                <circle cx="115" cy="115" r="12" fill="currentColor" />

                {/* Inner Ears */}
                <circle cx="65" cy="115" r="6" fill="#D2B48C" />
                <circle cx="115" cy="115" r="6" fill="#D2B48C" />

                {/* Closed Eyes */}
                <path d="M 75 125 Q 80 130 85 125" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
                <path d="M 95 125 Q 100 130 105 125" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />

                {/* Snout */}
                <ellipse cx="90" cy="135" rx="12" ry="8" fill="#D2B48C" />
                <circle cx="90" cy="132" r="3" fill="#3E2723" />
            </motion.svg>
        </motion.div>
    );
}
