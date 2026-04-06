"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { PhoneCall, Calendar } from "lucide-react";

/* PREMIUM UPGRADE: Added bouncy spring animations and staggered reveals */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const textLineVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 } as any // FIXED
  }
};

// Pre-defined values for magical background bubbles
const bubbles = [
  { size: 45, left: "12%", top: "85%", delay: 0, duration: 6 },
  { size: 70, left: "85%", top: "65%", delay: 2, duration: 8 },
  { size: 30, left: "25%", top: "35%", delay: 1, duration: 5 },
  { size: 55, left: "75%", top: "85%", delay: 3, duration: 7 },
  { size: 35, left: "55%", top: "25%", delay: 0.5, duration: 6 },
];

// Pre-defined values for floating background emojis
const floatingEmojis = [
  { emoji: "✨", left: "5%", top: "15%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🌟", left: "92%", top: "40%", animation: "float-medium", size: "text-6xl", opacity: "opacity-20" },
  { emoji: "💖", left: "10%", top: "80%", animation: "float-fast", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎈", left: "82%", top: "12%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🦋", left: "35%", top: "75%", animation: "float-medium", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎨", left: "60%", top: "10%", animation: "float-fast", size: "text-3xl", opacity: "opacity-30" },
];

export default function LingokidsStyleHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .hero-bg {
          background: linear-gradient(160deg, #FFB347 0%, #FF8C42 40%, #FF6B35 100%);
        }

        /* Subtle Polka Dot Pattern */
        .dot-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .play-wordmark {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -4px;
          color: rgba(255,255,255,0.08);
          white-space: nowrap;
        }

        .side-text {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        /* Floating Animation Classes */
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4.5s ease-in-out infinite reverse; }
        .float-fast { animation: float 3s ease-in-out infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>

      <section className="relative min-h-[100dvh] flex flex-col hero-bg overflow-hidden pt-24 pb-12">

        {/* 1. Dot Pattern Overlay */}
        <div className="dot-pattern z-0" />

        {/* 2. Original Floating White Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0],
              y: [-30, -100],
              scale: [0.6, 1.1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            } as any}
            className="absolute w-3 h-3 bg-white rounded-full pointer-events-none z-0"
            style={{
              left: `${10 + (i % 5) * 16}%`,
              top: `${20 + Math.floor(i / 3) * 25}%`,
            }}
          />
        ))}

        {/* 3. Animated Floating Bubbles */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/30 bg-white/10 pointer-events-none z-0"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            } as any}
          />
        ))}

        {/* 4. Animated Emojis */}
        {floatingEmojis.map((item, i) => (
          <motion.div 
            key={`emoji-${i}`}
            className={`absolute pointer-events-none z-0 ${item.animation} ${item.size} ${item.opacity}`}
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: i * 0.15 } as any}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* 5. Animated Background Wordmark */}
        <div className="play-wordmark absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <motion.div 
            style={{ fontSize: "clamp(100px, 20vw, 260px)" }}
            animate={{ x: [-30, 30, -30] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" } as any}
          >
            FAIRY TALES
          </motion.div>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 mt-4">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">

            {/* LEFT SIDE TEXT */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="w-full lg:w-1/3 text-white flex justify-center lg:justify-end order-2 lg:order-1"
            >
              <div className="side-text text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] lg:leading-[1.1] drop-shadow-md text-center lg:text-right">
                
                {/* Desktop View: 3 Lines */}
                <div className="hidden lg:block">
                  <motion.div variants={textLineVariants}>Where little</motion.div>
                  <motion.div variants={textLineVariants} className="text-[#ffe4b5] drop-shadow-lg">hearts</motion.div>
                  <motion.div variants={textLineVariants}>find big joy</motion.div>
                </div>

                {/* Mobile View: 2 Lines */}
                <div className="block lg:hidden">
                  <motion.div variants={textLineVariants}>Where little <span className="text-[#ffe4b5] drop-shadow-lg">hearts</span></motion.div>
                  <motion.div variants={textLineVariants}>find big joy</motion.div>
                </div>

              </div>
            </motion.div>

            {/* CENTRAL IMAGE */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <motion.div
                initial={{ scale: 0, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.2 } as any}
                className="relative z-20"
                style={{ width: "clamp(240px, 35vw, 420px)", height: "clamp(240px, 35vw, 420px)" }}
              >
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" } as any}
                  className="absolute inset-[-20px] rounded-full bg-white/20 blur-2xl z-0" 
                />
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" } as any}
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-[6px] ring-white/40 z-10 bg-[#FFB347]/50"
                >
                  <Image
                    src="/images/hero-play2.png"
                    alt="Happy children at Fairy Tales Indoor Play Center"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT SIDE TEXT */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="w-full lg:w-1/3 text-white flex justify-center lg:justify-start order-3"
            >
              <div className="side-text text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] lg:leading-[1.1] drop-shadow-md text-center lg:text-left">
                
                {/* Desktop View: 3 Lines */}
                <div className="hidden lg:block">
                  <motion.div variants={textLineVariants}>Every smile</motion.div>
                  <motion.div variants={textLineVariants}>tells a</motion.div>
                  <motion.div variants={textLineVariants} className="text-[#ffe4b5] drop-shadow-lg">beautiful story</motion.div>
                </div>

                {/* Mobile View: 2 Lines */}
                <div className="block lg:hidden">
                  <motion.div variants={textLineVariants}>Every smile tells</motion.div>
                  <motion.div variants={textLineVariants} className="text-[#ffe4b5] drop-shadow-lg">a beautiful story</motion.div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 } as any}
            className="mt-10 md:mt-12 mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center z-30 relative"
          >
            {/* Primary CTA */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#FF6B35] font-extrabold text-[15px] md:text-base w-[260px] h-[52px] md:h-[56px] rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.35)] flex items-center justify-center gap-3 transition-transform border-2 border-transparent"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <Calendar size={18} strokeWidth={2.5} />
              Book Your Visit
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="tel:+919043937771"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)", rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/80 text-white font-extrabold text-[15px] md:text-base w-[260px] h-[52px] md:h-[56px] rounded-full flex items-center justify-center gap-3 transition-all backdrop-blur-sm shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <PhoneCall size={18} strokeWidth={2.5} />
              +91 90439 37771
            </motion.a>
          </motion.div>
        </div>

      </section>
    </>
  );
}