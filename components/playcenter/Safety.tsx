"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Sparkles, Users } from "lucide-react";

// PREMIUM UPGRADE: Added specific pastel gradients and border colors for the premium cards
const safety = [
  { 
    title: "Soft Safety Padding", 
    desc: "All play zones are protected with high quality soft padding.", 
    icon: ShieldCheck, 
    cardBg: "bg-gradient-to-br from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    iconBg: "bg-pink-500",
    titleColor: "text-pink-950",
    shadow: "shadow-pink-500/40" 
  },
  { 
    title: "Secure Play Area", 
    desc: "Safety nets and protected structures for safe play.", 
    icon: HeartHandshake, 
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
    titleColor: "text-blue-950",
    shadow: "shadow-blue-500/40" 
  },
  { 
    title: "Clean Environment", 
    desc: "Regular cleaning ensures hygienic surroundings.", 
    icon: Sparkles, 
    cardBg: "bg-gradient-to-br from-green-50 to-green-100",
    borderColor: "border-green-200",
    iconBg: "bg-green-500",
    titleColor: "text-green-950",
    shadow: "shadow-green-500/40" 
  },
  { 
    title: "Staff Supervision", 
    desc: "Friendly staff always available for assistance.", 
    icon: Users, 
    cardBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-500",
    titleColor: "text-purple-950",
    shadow: "shadow-purple-500/40" 
  },
];

export default function Safety() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .safety-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1;
          color: white; 
        }

        .safety-subtitle {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9); 
          line-height: 1.6;
        }

        /* PREMIUM UPGRADE: Updated card to match the new frosted, bouncy aesthetic */
        .safety-card {
          border-radius: 40px;
          padding: 36px 28px;
          text-align: center;
          box-shadow: 0 20px 50px -15px rgba(0,0,0,0.15);
          cursor: pointer;
          border: 4px solid white;
        }

        .safety-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.25);
        }
      `}</style>

      {/* Clean transparent wrapper */}
      <section className="py-20 lg:py-28 relative overflow-hidden z-10">
        
        {/* 🐼 Decorative Peeking Panda (Safety Supervisor!) */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -left-16 md:-left-20 -top-2 lg:top-16 z-20 pointer-events-none w-60 md:w-56 lg:w-72 drop-shadow-2xl "
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <Image src="/images/image_3.png" alt="Safety Supervisor Panda" width={300} height={350} className="object-contain" />
          </motion.div>
        </motion.div>

        <Container className="relative z-10">
          {/* Header - Staggered Text Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12 mt-16"
          >

            <motion.h2 variants={textVariants} className="safety-title text-5xl md:text-6xl lg:text-7xl mb-10 drop-shadow-sm">
              Safety <span style={{ color: "rgba(255,255,255,0.7)" }}>First</span>
            </motion.h2>

            <motion.p variants={textVariants} className="safety-subtitle text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
              Your child’s safety is our highest priority. Our play center is built with premium safety standards and carefully supervised fun.
            </motion.p>
          </motion.div>

          {/* Premium Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {safety.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className={`safety-card group bg-white/70 backdrop-blur-sm relative overflow-hidden`}
                >
                  {/* Subtle background gradient based on the item color */}
                  <div className={`absolute inset-0 opacity-40 ${item.cardBg} z-0 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Animated, Floating Premium Icon */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2 
                      }}
                      className={`w-20 h-20 mb-8 rounded-[24px] flex items-center justify-center text-white ${item.iconBg} ${item.shadow} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/50`}
                    >
                      <Icon size={36} strokeWidth={2.5} />
                    </motion.div>

                    <h3 className={`text-[24px] font-black mb-3 ${item.titleColor}`} style={{ fontFamily: "'Baloo 2', cursive" }}>
                      {item.title}
                    </h3>

                    <p className="text-slate-600/90 font-bold text-[15px] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}