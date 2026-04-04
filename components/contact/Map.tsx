"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Map() {
  // PREMIUM UPGRADE: Animation Variants for staggered text reveals
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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .map-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1;
          color: white; 
        }

        .map-subtitle {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
      `}</style>

      {/* Clean, transparent wrapper */}
      <section className="py-20 lg:py-28 relative z-10">
        <Container>
          
          {/* Header - PREMIUM Staggered Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              variants={textVariants}
              className="mb-5"
            >
              {/* Premium Glass Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 px-6 py-2.5 rounded-full shadow-lg">
                <span className="text-white">📍</span>
                <span className="uppercase tracking-[4px] text-[13px] font-extrabold text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>Our Location</span>
              </div>
            </motion.div>

            <motion.h2 variants={textVariants} className="map-title text-4xl md:text-5xl lg:text-6xl mb-5 drop-shadow-sm">
              Find Us <span style={{ color: "rgba(255,255,255,0.7)" }}>Here</span>
            </motion.h2>

            <motion.p variants={textVariants} className="map-subtitle text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
              We are conveniently located in Veerapandi, Tirupur. Use the map below to easily navigate your way to endless fun!
            </motion.p>
          </motion.div>

          {/* PREMIUM Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[48px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[8px] border-white bg-slate-100 relative group"
          >
            <iframe
              src="https://www.google.com/maps?q=Veerapandi,Tirupur&output=embed"
              className="w-full h-full border-0 absolute inset-0 rounded-[40px] shadow-inner"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Subtle overlay that disappears on hover, giving an interactive feel */}
            <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none rounded-[40px]" />
          </motion.div>

        </Container>
      </section>
    </>
  );
}