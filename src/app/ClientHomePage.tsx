"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Moon, Star, Heart, Sparkles, Send, Mail, Music, Menu, X } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import SleepingBear from "../components/SleepingBear";

type Video = {
    id: string;
    title: string;
    url: string;
};

// Magical, pastel, fairy-tale gradients for the cards
const CARD_COLORS = [
    "bg-gradient-to-br from-indigo-400 to-purple-500", // Dreamy Purple
    "bg-gradient-to-br from-pink-400 to-rose-400",     // Warm Pink
    "bg-gradient-to-br from-amber-300 to-orange-400",  // Starry Gold
];

export default function ClientHomePage({ videos }: { videos: Video[] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen font-sans overflow-x-hidden relative bg-blue-50/30 selection:bg-purple-300 selection:text-purple-900">

            {/* Immersive SVG Background */}
            <AnimatedBackground />

            {/* Main Navbar */}
            <header className="w-full bg-white/40 backdrop-blur-xl py-4 px-6 md:px-12 sticky top-0 z-50 border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
                <div className="flex justify-between items-center max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative w-12 h-12 md:w-16 md:h-16 drop-shadow-md">
                            <Image src="/logo.png" alt="Ziewnutki Logo" fill className="object-contain" priority />
                        </div>
                        <span className="font-heading font-extrabold text-2xl md:text-4xl text-indigo-900 tracking-wide drop-shadow-sm">
                            Ziew<span className="text-pink-500">nut</span><span className="text-amber-400">ki</span>
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 font-heading font-bold text-indigo-900/80 text-lg">
                        <a href="#" className="hover:text-pink-500 transition-colors drop-shadow-sm">Strona Główna</a>
                        <a href="#o-nas" className="hover:text-pink-500 transition-colors drop-shadow-sm">O Nas</a>
                        <a href="#najnowsze" className="hover:text-pink-500 transition-colors drop-shadow-sm">Kołysanki</a>
                        <a href="#kontakt" className="hover:text-pink-500 transition-colors drop-shadow-sm">Kontakt</a>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden text-indigo-900 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation Panel */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden bg-white/80 backdrop-blur-xl rounded-b-2xl shadow-xl mt-4 flex flex-col items-center gap-6 py-8 font-heading font-bold text-indigo-900 text-xl border-t border-white/50"
                        >
                            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500 transition-colors w-full text-center">Strona Główna</a>
                            <a href="#o-nas" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500 transition-colors w-full text-center">O Nas</a>
                            <a href="#najnowsze" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500 transition-colors w-full text-center">Kołysanki</a>
                            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="hover:text-pink-500 transition-colors w-full text-center">Kontakt</a>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            {/* SPLIT HERO SECTION */}
            <main className="relative z-10 w-full mb-32">
                <section className="flex flex-col lg:flex-row items-center justify-between max-w-[1400px] mx-auto pt-12 pb-40 px-6 md:px-12 relative">

                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-5/12 text-center lg:text-left z-20"
                    >
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}
                            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-indigo-800 font-bold text-sm mb-6 shadow-sm border border-indigo-100"
                        >
                            <Sparkles size={16} className="text-amber-500" /> Witaj w Krainie Snów
                        </motion.div>

                        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-indigo-950 leading-[1.1] mb-6 drop-shadow-sm">
                            Magiczne <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                Kołysanki
                            </span>
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-indigo-900/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Ziewnutki to miejsce pełne spokoju i ciepła. Nasze wyciszające melodie i animacje ze zwierzątkami otulą Twojego maluszka do snu.
                        </p>
                        <motion.a
                            href="https://www.youtube.com/@ziewnutki"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(236, 72, 153, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl transition-all"
                        >
                            <PlayCircle size={28} />
                            Posłuchaj Nas
                        </motion.a>
                    </motion.div>

                    {/* RIGHT: BLENDED CENTRAL GRAPHIC (Masked to fade edges) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-7/12 mt-16 lg:mt-0 relative"
                    >
                        {/* Background glowing orb to enhance the magic behind the image */}
                        <div className="absolute inset-0 bg-blue-300/30 blur-[120px] rounded-full scale-75 -z-10"></div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full aspect-square max-w-[800px] mx-auto overflow-hidden"
                            style={{
                                // This radial gradient mask fades out the harsh rectangular edges of the image!
                                WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",
                                maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)"
                            }}
                        >
                            <Image
                                src="/logo.png"
                                alt="Ziewnutki Główna Grafika"
                                fill
                                className="object-cover scale-110" // Slight scale to avoid edge clipping before fade
                                priority
                            />
                        </motion.div>
                    </motion.div>

                </section>

                {/* 3 OVERLAPPING COLORED CARDS */}
                <div className="w-full max-w-[1200px] mx-auto px-4 -mt-32 relative z-30 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className={`${CARD_COLORS[0]} text-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col hover:-translate-y-3 transition-transform duration-500 border border-white/20 relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                            <h3 className="font-heading font-extrabold text-3xl mb-4 text-white drop-shadow-md">Spokój</h3>
                            <p className="font-sans leading-relaxed text-indigo-50 flex-grow text-lg">
                                Autorskie kołysanki i wyciszające dźwięki, które pomogą maluszkowi zrelaksować się i łatwiej zasnąć po dniu pełnym wrażeń.
                            </p>
                            <div className="mt-8 flex justify-end opacity-90 drop-shadow-lg">
                                <Moon size={56} className="text-indigo-100" fill="currentColor" />
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`${CARD_COLORS[1]} text-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col hover:-translate-y-3 transition-transform duration-500 border border-white/20 relative overflow-hidden group md:-translate-y-8`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                            <h3 className="font-heading font-extrabold text-3xl mb-4 text-white drop-shadow-md">Bezpieczeństwo</h3>
                            <p className="font-sans leading-relaxed text-rose-50 flex-grow text-lg">
                                Dbamy o brak przebodźcowujących obrazów. Filmy ziewnutek są miękkie, puszyste i pełne sennych zwierzątek.
                            </p>
                            <div className="mt-8 flex justify-end opacity-90 drop-shadow-lg">
                                <Heart size={56} className="text-rose-100" fill="currentColor" />
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className={`${CARD_COLORS[2]} text-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col hover:-translate-y-3 transition-transform duration-500 border border-white/20 relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                            <h3 className="font-heading font-extrabold text-3xl mb-4 text-white drop-shadow-md">Rozwój</h3>
                            <p className="font-sans leading-relaxed text-orange-50 flex-grow text-lg">
                                Radosne piosenki na dzień wspierają rozwój i zachęcają do ruchu, budując uśmiech na buzi każdego dnia.
                            </p>
                            <div className="mt-8 flex justify-end opacity-90 drop-shadow-lg">
                                <Star size={56} className="text-orange-100" fill="currentColor" />
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* EXPANDED 'About Us' Section */}
                <section id="o-nas" className="w-full py-24 relative z-20 overflow-hidden">
                    {/* Animated Floating Stars */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-amber-300 opacity-60 pointer-events-none"
                            style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 90 + 5}%` }}
                            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4], rotate: [0, 90, 180] }}
                            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Star size={16 + Math.random() * 24} fill="currentColor" />
                        </motion.div>
                    ))}

                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-indigo-950 mb-6 drop-shadow-sm">
                                Kim <span className="text-pink-500">Jesteśmy?</span>
                            </h2>
                            <div className="w-24 h-2 bg-gradient-to-r from-amber-300 to-pink-400 mx-auto mb-10 rounded-full"></div>

                            <div className="bg-white/60 backdrop-blur-lg rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/50 relative">
                                <div className="absolute -top-6 -left-6 text-purple-400 opacity-50 rotate-[-15deg]">
                                    <Moon size={80} fill="currentColor" />
                                </div>

                                <p className="text-xl md:text-2xl text-indigo-900 leading-relaxed font-sans mb-6 text-justify md:text-center relative z-10 font-medium">
                                    Ziewnutki to magiczne miejsce stworzone z nieskończoną miłością do muzyki i myślą o tych najmniejszych, najbardziej bezbronnych. Jako twórcy i rodzice, wiemy jak ważne jest znalezienie bezpiecznej przystani w wirtualnym świecie.
                                </p>
                                <p className="text-lg md:text-xl text-indigo-800/80 leading-relaxed font-sans text-justify md:text-center relative z-10">
                                    Naszym celem jest otulić każde dziecko ciepłymi dźwiękami, które koją emocje, ułatwiają zasypianie i przepędzają nocne strachy. Tworzymy animacje pozbawione agresywnych błysków – u nas królują puszyste obłoczki, mrugające gwiadki i zaspane misie, które powolutku zamykają oczka w rytm delikatnej gitary i pianina.
                                </p>

                                <div className="mt-16 relative w-full h-48 md:h-64 flex items-center justify-center">

                                    {/* Floating Musical Notes */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={`note-${i}`}
                                            className="absolute text-pink-400"
                                            style={{
                                                left: `${15 + Math.random() * 70}%`,
                                                bottom: `${10 + Math.random() * 20}%`
                                            }}
                                            initial={{ opacity: 0, y: 0 }}
                                            animate={{
                                                opacity: [0, 0.8, 0],
                                                y: -100 - Math.random() * 50,
                                                x: Math.random() * 40 - 20,
                                                rotate: Math.random() * 60 - 30
                                            }}
                                            transition={{
                                                duration: 3 + Math.random() * 3,
                                                repeat: Infinity,
                                                ease: "easeOut",
                                                delay: Math.random() * 3
                                            }}
                                        >
                                            <Music size={20 + Math.random() * 16} fill="currentColor" />
                                        </motion.div>
                                    ))}

                                    {/* Dancing Bear 1 (Left) */}
                                    <motion.div
                                        className="absolute left-[10%] md:left-[25%] bottom-4 text-5xl md:text-6xl origin-bottom"
                                        animate={{
                                            rotate: [-15, 15, -15],
                                            y: [0, -20, 0]
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        🧸
                                    </motion.div>

                                    {/* Dancing Bear 2 (Right) */}
                                    <motion.div
                                        className="absolute right-[10%] md:right-[25%] bottom-4 text-5xl md:text-6xl origin-bottom"
                                        animate={{
                                            rotate: [15, -15, 15],
                                            y: [0, -25, 0]
                                        }}
                                        transition={{
                                            duration: 0.9,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.2
                                        }}
                                    >
                                        🧸
                                    </motion.div>

                                    {/* Central Sleeping Bear slightly scaled up */}
                                    <div className="relative z-10 scale-125 md:scale-150">
                                        <SleepingBear />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Video Section (Dynamic from YouTube) */}
                <section id="najnowsze" className="w-full pb-32 pt-20 relative z-10">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col items-center justify-center gap-4 mb-20 text-center">
                            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                                <PlayCircle size={16} /> Oglądaj i słuchaj
                            </span>
                            <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-indigo-950">
                                Czas na <span className="text-purple-500">Bajkę</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {videos.map((video, idx) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                                    className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-15px_rgba(168,85,247,0.4)] border border-white transition-all duration-500 group relative"
                                >
                                    {/* Decorative star on the corner of the video card */}
                                    <div className="absolute -top-3 -right-3 bg-amber-300 text-white p-2 rounded-full shadow-lg z-20 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <Star size={20} fill="currentColor" />
                                    </div>

                                    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-indigo-50 pointer-events-auto">
                                        <iframe
                                            src={video.url}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full border-none transition-transform duration-700 pointer-events-auto"
                                        ></iframe>
                                    </div>
                                    <div className="mt-6 px-4 pb-2 flex justify-between items-start gap-4">
                                        <h3 className="font-heading font-bold text-xl text-indigo-900 line-clamp-2 leading-tight">
                                            {video.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MAGICAL CONTACT SECTION */}
                <section id="kontakt" className="w-full py-24 relative z-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white border border-indigo-500/30">
                            {/* Background decorations */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px]"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>
                            <Moon className="absolute -right-10 top-10 text-white/5" size={150} fill="currentColor" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">Napisz do Nas!</h2>
                                <p className="text-indigo-100 text-lg mb-10 max-w-xl">
                                    Masz pomysł na nową piosenkę? Albo po prostu chcesz się przywitać? Wyślij nam wiadomość, z przyjemnością odpiszemy.
                                </p>

                                <form
                                    action="mailto:kolysanki91@gmail.com"
                                    method="get"
                                    encType="text/plain"
                                    className="w-full max-w-2xl flex flex-col gap-5"
                                >
                                    <input type="hidden" name="subject" value="Wiadomość ze strony Ziewnutki" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <input
                                            type="text"
                                            name="Imie"
                                            placeholder="Twoje Imię"
                                            required
                                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-indigo-200 outline-none focus:bg-white/20 focus:border-pink-400 transition-all font-sans"
                                        />
                                        <input
                                            type="email"
                                            name="Email"
                                            placeholder="Twój adres e-mail (opcjonalnie)"
                                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-indigo-200 outline-none focus:bg-white/20 focus:border-pink-400 transition-all font-sans"
                                        />
                                    </div>
                                    <textarea
                                        name="body"
                                        placeholder="Treść wiadomości..."
                                        rows={4}
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-indigo-200 outline-none focus:bg-white/20 focus:border-pink-400 transition-all font-sans resize-none"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="mt-4 w-full md:w-auto self-center bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold text-lg px-12 py-4 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.4)] hover:shadow-[0_15px_40px_rgba(236,72,153,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                                    >
                                        <Send size={20} /> Wyślij Wiadomość
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="w-full pt-16 pb-8 bg-indigo-950 text-indigo-200 relative z-30">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <div className="relative w-20 h-20 opacity-50 grayscale brightness-200">
                        <Image src="/logo.png" alt="Ziewnutki Footer" fill className="object-contain" />
                    </div>
                    <p className="text-center font-heading text-xl font-medium px-4 text-white/80">
                        Ziewnutki - &quot;Ciepło, muzyka, bezpieczeństwo.&quot;
                    </p>
                    <div className="flex gap-6 mt-2 text-indigo-400">
                        <a href="mailto:kolysanki91@gmail.com" className="hover:text-pink-400 transition-colors"><Mail size={28} /></a>
                        <a href="https://www.youtube.com/@ziewnutki" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><PlayCircle size={28} /></a>
                    </div>
                    <p className="font-sans text-sm mt-4 text-indigo-400/50 border-t border-indigo-800/50 pt-8 w-full text-center">
                        © {new Date().getFullYear()} Ziewnutki. Wszelkie prawa zastrzeżone.
                    </p>
                </div>
            </footer>
        </div>
    );
}
