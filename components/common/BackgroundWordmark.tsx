"use client";

import { motion } from "framer-motion";

export default function BackgroundWordmark() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@900&display=swap');

        .global-wordmark {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -4px;
          
          /* 🚨 THE FIX: Changed from white to a very faint, subtle dark shadow. 
             This ensures it shows up on white backgrounds AND orange backgrounds! */
          color: rgba(0, 0, 0, 0.03); 
          white-space: nowrap;
        }
      `}</style>
      
      {/* Set firmly to z-[0] so it stays behind all your beautiful cards and images */}
      <div className="global-wordmark fixed inset-0 flex items-center justify-center pointer-events-none z-[0] overflow-hidden">
        <motion.div 
          style={{ fontSize: "clamp(100px, 20vw, 260px)" }}
          animate={{ x: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          FAIRY TALES
        </motion.div>
      </div>
    </>
  );
}