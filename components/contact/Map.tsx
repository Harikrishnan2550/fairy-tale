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
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      } as any, // FIXED: Bypasses strict AnimationGeneratorType mismatch
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
            transition={{ 
              duration: 0.8, 
              delay: 0.2, 
              type: "spring", 
              stiffness: 80 
            } as any} // FIXED: Added 'as any' here as well
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[48px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[8px] border-white bg-slate-100 relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.228514104278!2d77.3484!3d11.0841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9065a713994e7%3A0x6b83f06c1410710b!2sVeerapandi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin"
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