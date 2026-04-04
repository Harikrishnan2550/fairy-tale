"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CafeHero from "@/components/cafe/Hero";
import Popular from "@/components/cafe/Popular";
import Experience from "@/components/cafe/Experience";

// Cafe-themed magical floating emojis
const floatingEmojis = [
  { emoji: "☕", left: "10%", top: "20%", animation: "float-slow", size: "text-5xl", opacity: "opacity-40" },
  { emoji: "✨", left: "85%", top: "30%", animation: "float-medium", size: "text-6xl", opacity: "opacity-40" },
  { emoji: "🧁", left: "15%", top: "50%", animation: "float-fast", size: "text-4xl", opacity: "opacity-40" },
  { emoji: "🍩", left: "8%", top: "65%", animation: "float-slow", size: "text-5xl", opacity: "opacity-40" },
  { emoji: "🥤", left: "88%", top: "80%", animation: "float-medium", size: "text-6xl", opacity: "opacity-40" },
  { emoji: "🍟", left: "80%", top: "90%", animation: "float-slow", size: "text-5xl", opacity: "opacity-40" },
];

const bubbles = [
  { size: 45, left: "12%", top: "85%", delay: 0, duration: 6 },
  { size: 70, left: "85%", top: "65%", delay: 2, duration: 8 },
  { size: 30, left: "25%", top: "35%", delay: 1, duration: 5 },
  { size: 55, left: "75%", top: "45%", delay: 3, duration: 7 },
  { size: 35, left: "55%", top: "25%", delay: 0.5, duration: 6 },
];

export default function Cafe() {
  return (
    <>
      <style>{`
        /* Shared floating animations for the whole page */
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4.5s ease-in-out infinite reverse; }
        .float-fast { animation: float 3s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>

      {/* THE MASTER BACKGROUND */}
      <main className="relative min-h-screen bg-gradient-to-b from-[#FFB347] via-[#FF8C42] to-[#FF6B35] overflow-hidden flex flex-col">
        
        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Global Dot Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_2px,transparent_2px)] [background-size:30px_30px] pointer-events-none z-0 mt-20" />

        {/* Global Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/4 bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* --- Global Animated Floating Bubbles --- */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/30 bg-white/10 pointer-events-none z-0"
            style={{ width: bubble.size, height: bubble.size, left: bubble.left, top: bubble.top }}
            animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: bubble.duration, delay: bubble.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* --- Global Animated Emojis --- */}
        {floatingEmojis.map((item, i) => (
          <motion.div 
            key={`emoji-${i}`}
            className={`absolute pointer-events-none z-0 ${item.opacity} ${item.animation} ${item.size}`}
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 }}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* THE COMPONENTS: Cleanly stacked on the transparent layers */}
        <div className="relative z-10 flex-grow">
          <CafeHero />
          <Popular />
          <Experience />
        </div>

        {/* Footer */}
        <div className="relative z-50 mt-auto">
          <Footer />
        </div>
      </main>
    </>
  );
}