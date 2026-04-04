"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ContactHero() {
  // PREMIUM UPGRADE: Animation Variants for staggered, premium text reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

        .hero-text {
          font-family: 'Nunito', sans-serif;
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

      {/* Clean, transparent wrapper sitting on top of the parent background */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative z-10">
        <Container>
          
          {/* PREMIUM Centered Content with Staggered Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center max-w-3xl mx-auto flex flex-col items-center"
          >
            
            <motion.div
              variants={textVariants}
              className="mb-6 md:mb-8"
            >
              <span className="hero-badge transition-transform hover:scale-105 duration-300">
                <span className="text-lg">👋</span>
                We'd Love to Hear From You
              </span>
            </motion.div>

            {/* Deepened the drop shadow for a premium 3D pop off the background */}
            <h1 className="hero-title text-6xl md:text-7xl lg:text-[90px] font-black text-white leading-[0.95] drop-shadow-2xl mb-6 flex flex-col items-center">
              <motion.span variants={textVariants} className="block">
                Contact
              </motion.span>
              <motion.span 
                variants={highlightVariants}
                className="text-[#ffe4b5] drop-shadow-[0_0_15px_rgba(255,228,181,0.4)] block mt-1 md:mt-2"
              >
                Fairy Tales
              </motion.span>
            </h1>

            {/* Premium subtitle text with animation */}
            <motion.p 
              variants={textVariants}
              className="hero-text text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-bold drop-shadow-md leading-relaxed"
            >
              Have questions about booking a party? Want to plan a visit?
              Get in touch with us today and let the magic begin!
            </motion.p>
            
          </motion.div>
          
        </Container>
      </section>
    </>
  );
}