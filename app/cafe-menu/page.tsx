"use client";

import React from "react";
import { motion } from "framer-motion";
import { cafeMenuData } from "@/components/data/menu";
import Container from "@/components/ui/Container"; 
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// PREMIUM UPGRADE: Advanced Framer Motion Variants for waterfall animations
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 18 } as any 
  }
};

const heroTextVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as any }
};

export default function CafeMenuPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800;900&family=Nunito:wght@600;700;800;900&display=swap');
        
        .food-card {
          background: white;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 12px 35px -12px rgba(0,0,0,0.06);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          border: 1px solid rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          cursor: default;
        }
        
        .food-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px -12px rgba(255,107,53,0.25);
        }

        /* A warm, clean, creamy background perfect for food photography */
        .cafe-bg {
          background-color: #FCF9F6;
          background-image: radial-gradient(rgba(255, 140, 66, 0.08) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          background-position: 0 0, 12px 12px;
        }

        /* Frosted Glass effect for the floating price */
        .price-badge {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>

      {/* Main Wrapper */}
      <main className="relative min-h-screen flex flex-col cafe-bg">
        
        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* HERO SECTION - Vibrant orange curve to smoothly transition to the clean menu */}
        <div className="relative w-full bg-gradient-to-b from-[#FFB347] via-[#FF8C42] to-[#FF6B35] pt-32 pb-24 rounded-b-[40px] md:rounded-b-[80px] shadow-lg z-10 overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
          
          <Container>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-center relative z-10 flex flex-col items-center"
            >
              
              
              <motion.h1 variants={heroTextVariant} className="text-5xl md:text-7xl text-white tracking-tight drop-shadow-md mb-4" style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 900 }}>
                Taste the Magic
              </motion.h1>
              
              <motion.p variants={heroTextVariant} className="text-white/90 font-bold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Fresh juices, premium coffee, and delicious snacks prepared with love for you and your little ones.
              </motion.p>
            </motion.div>
          </Container>
        </div>

        {/* MENU CONTENT AREA */}
        <div className="relative z-10 flex-grow py-16 md:py-24">
          <Container>
            <div className="max-w-[1400px] mx-auto space-y-24">
              
              {cafeMenuData.map((category) => (
                <div key={category.category} className="scroll-mt-32">
                  
                  {/* Category Title */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 60 } as any}
                    className="flex items-center gap-6 mb-12"
                  >
                    <h2 className="text-4xl md:text-5xl text-slate-800 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 900 }}>
                      {category.category}
                    </h2>
                    <div className="h-[3px] flex-grow bg-gradient-to-r from-[#FF8C42]/40 to-transparent rounded-full" />
                  </motion.div>
                  
                  {/* APP-STYLE CARD GRID - Using Staggered Animations */}
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
                  >
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        variants={cardVariant}
                        className="food-card group"
                      >
                        {/* MASSIVE IMAGE AREA - 9:16 ASPECT RATIO */}
                        <div className="relative w-full aspect-[9/16] bg-slate-100 overflow-hidden">
                          {item.image ? (
                            <Image 
                              src={item.image} 
                              alt={item.name} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-orange-50/50 text-orange-200 gap-2">
                              <span className="text-6xl drop-shadow-sm opacity-50">🍽️</span>
                            </div>
                          )}

                          {/* Subtle Bottom Vignette for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* FLOATING PREMIUM PRICE BADGE - Restored & Animated */}
                          <div className="price-badge absolute top-4 right-4 px-5 py-2 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(255,107,53,0.3)]">
                            <span className="text-[#FF6B35] text-[20px] tracking-wide" style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 900 }}>
                              ₹{item.price}
                            </span>
                          </div>
                        </div>

                        {/* TEXT DETAILS */}
                        <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-10 border-t border-slate-100">
                          <h3 className="text-slate-800 font-extrabold text-[22px] md:text-[24px] leading-tight mb-2 group-hover:text-[#FF6B35] transition-colors duration-300" style={{ fontFamily: "'Nunito', sans-serif" }}>
                            {item.name}
                          </h3>
                          
                          {item.description ? (
                            <p className="text-[15px] text-slate-500 font-bold leading-relaxed line-clamp-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
                              {item.description}
                            </p>
                          ) : (
                            <p className="text-[15px] text-slate-400 font-semibold italic" style={{ fontFamily: "'Nunito', sans-serif" }}>
                              Freshly prepared to order
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                </div>
              ))}
              
            </div>
          </Container>
        </div>

        {/* Footer */}
        <div className="relative z-50 mt-auto">
          <Footer />
        </div>

      </main>
    </>
  );
}