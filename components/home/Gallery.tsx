"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

// Exactly 3 images as requested, updated with premium kids-oriented styling properties
const images = [
  { 
    src: "/images/gallery/gallery1.png", 
    title: "Ball Pit Adventures",
    emoji: "🎈",
    borderColor: "border-pink-200"
  },
  { 
    src: "/images/gallery/gallery2.png", 
    title: "Creative Play Zone",
    emoji: "🎨",
    borderColor: "border-blue-200"
  },
  { 
    src: "/images/gallery/gallery3.png", 
    title: "Cafe Treats",
    emoji: "🧁",
    borderColor: "border-amber-200"
  },
];

// Pre-defined values to avoid React hydration errors with random numbers
const bubbles = [
  { size: 45, left: "12%", top: "85%", delay: 0, duration: 6 },
  { size: 70, left: "85%", top: "65%", delay: 2, duration: 8 },
  { size: 30, left: "25%", top: "35%", delay: 1, duration: 5 },
  { size: 55, left: "75%", top: "85%", delay: 3, duration: 7 },
  { size: 35, left: "55%", top: "25%", delay: 0.5, duration: 6 },
];

const floatingEmojis = [
  { emoji: "✨", left: "5%", top: "15%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🌟", left: "92%", top: "40%", animation: "float-medium", size: "text-6xl", opacity: "opacity-20" },
  { emoji: "💖", left: "10%", top: "80%", animation: "float-fast", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎈", left: "82%", top: "12%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🦋", left: "35%", top: "75%", animation: "float-medium", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎨", left: "60%", top: "10%", animation: "float-fast", size: "text-3xl", opacity: "opacity-30" },
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .gallery-bg {
          /* Matching the Hero/Cafe section gradient */
          background: linear-gradient(170deg, #FFB347 0%, #FF8C42 40%, #FF6B35 100%);
          position: relative;
        }

        /* Subtle Polka Dot Pattern */
        .dot-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .gallery-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.95;
          color: white;
        }

        /* Floating Animation Classes */
        .float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .float-medium {
          animation: float 4.5s ease-in-out infinite reverse;
        }
        .float-fast {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>

      <section className="py-20 lg:py-28 gallery-bg relative overflow-hidden">
        {/* Dot Pattern Overlay */}
        <div className="dot-pattern" />

        {/* Subtle background glow for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-white/10 blur-[120px] rounded-full pointer-events-none" />

        {/* --- Animated Floating Bubbles --- */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/30 bg-white/10 pointer-events-none"
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
            }}
          />
        ))}

        {/* --- Animated Emojis --- */}
        {floatingEmojis.map((item, i) => (
          <motion.div 
            key={`emoji-${i}`}
            className={`absolute pointer-events-none ${item.animation} ${item.size} ${item.opacity}`}
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 }}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* 🐼 Floating Decorative Panda (Visible on Mobile & Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[-32] left-[200px] -translate-x-1/2 md:top-10 lg:top-1 md:left-[1210px] md:-translate-x-0 z-20 pointer-events-none w-80 md:w-48 lg:w-80 xl:w-96 drop-shadow-2xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/panda-sliding.png"
              alt="Panda Sliding"
              width={350}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        <Container className="relative z-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20 relative z-10 pt-28 md:pt-0 mt-52 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              {/* Premium Glass Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/30 shadow-lg">
                <span className="text-white">📸</span>
                <span className="uppercase tracking-[3px] text-[13px] font-extrabold text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>Our Gallery</span>
              </div>
            </motion.div>

            <h2 className="gallery-title text-5xl md:text-6xl lg:text-7xl mb-5 drop-shadow-sm">
              Fun Moments
              <br />
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Inside</span>
            </h2>

            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto font-bold drop-shadow-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Take a peek into the exciting world of Fairy Tales Play Center & Cafe. Every corner is designed for smiles!
            </p>
          </motion.div>

          {/* PREMIUM KIDS 3-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {images.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative group cursor-pointer"
                onClick={() => setActive(item.src)}
              >
                {/* 3D Pop-out Emoji Badge */}
                <div className={`absolute -top-5 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl z-20 shadow-xl border-4 ${item.borderColor} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                  {item.emoji}
                </div>

                {/* Premium Frosted Card Wrapper */}
                <div className="bg-white/30 backdrop-blur-sm p-3 rounded-[40px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-2 border border-white/50">
                  
                  {/* Image Inner Container */}
                  <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-[32px] border-[6px] border-white bg-slate-100 shadow-inner">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Premium Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-black text-xl lg:text-2xl tracking-wide drop-shadow-md" style={{ fontFamily: "'Baloo 2', cursive" }}>
                            {item.title}
                          </span>
                          {/* Premium Solid Zoom Button */}
                          <div className="bg-white text-[#FF6B35] p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <ZoomIn size={22} strokeWidth={2.5} />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12 bg-slate-900/95 backdrop-blur-md"
                onClick={() => setActive(null)}
              >
                {/* Close Button */}
                <button 
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-[#FF6B35] text-white hover:text-white rounded-full backdrop-blur-md transition-colors z-50 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(null);
                  }}
                >
                  <X size={28} strokeWidth={2.5} />
                </button>

                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-5xl max-h-[90vh] aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-white/20"
                  onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                >
                  <Image
                    src={active}
                    alt="Gallery Fullscreen"
                    fill
                    className="object-contain bg-black/50"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </Container>
      </section>
    </>
  );
}