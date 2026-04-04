"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function CafeHero() {
  // PREMIUM UPGRADE: Animation Variants for staggered, premium text reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 },
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .hero-title {
          font-family: 'Baloo 2', cursive;
          letter-spacing: -2px;
        }

        /* PREMIUM UPGRADE: Sleeker glassmorphism, crisper borders, purer white text */
        .hero-badge {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: white;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 999px;
          padding: 10px 24px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 15px 30px -10px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Kept your exact height classes: min-h-[40vh] for mobile, md:min-h-[80vh] for desktop */}
      <section className="relative min-h-[40vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden rounded-b-[40px] lg:rounded-b-[80px] shadow-2xl pt-20 relative z-10">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-[#241a15]">
          <Image
            src="/images/cafe/hero.png"
            alt="Fairy Tales Cafe"
            fill
            priority
            className="object-cover"
          />
          {/* Vibrant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#241a15]/25 via-[#241a15]/40 to-[#FF6B35]/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/40 to-transparent opacity-50" />
        </div>

        {/* Floating Particles (Magical Touch specific to the Hero image) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0],
              y: [-20, -100],
              x: Math.random() * 40 - 20,
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full pointer-events-none z-0"
            style={{
              left: `${10 + (i % 8) * 12}%`,
              top: `${30 + Math.floor(i / 4) * 20}%`,
            }}
          />
        ))}

        {/* PREMIUM Centered Content with Staggered Animations */}
        <Container className="relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-white mt-10 md:mt-0 flex flex-col items-center"
          >

            {/* Deepened the drop shadow for a premium 3D pop off the background */}
            <h1 className="hero-title text-6xl md:text-7xl lg:text-[90px] font-black leading-[0.95] drop-shadow-2xl mb-6 flex flex-col items-center">
              <motion.span variants={textVariants} className="block">
                Relax &
              </motion.span>
              <motion.span 
                variants={highlightVariants}
                className="text-[#FFB347] drop-shadow-[0_0_15px_rgba(255,179,71,0.4)] block mt-1 md:mt-2"
              >
                Refresh
              </motion.span>
            </h1>

            {/* NEW: Premium subtitle to ground the layout and make it look complete */}
            <motion.p 
              variants={textVariants}
              className="hidden md:block max-w-2xl mx-auto text-white/95 text-lg md:text-xl font-bold drop-shadow-md"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Unwind with premium artisan coffee and healthy treats while keeping an eye on the little ones playing safely.
            </motion.p>
            
          </motion.div>
        </Container>
      </section>
    </>
  );
}