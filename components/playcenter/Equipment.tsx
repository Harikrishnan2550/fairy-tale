"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { ToyBrick, CircleDot, Mountain, Waves, Zap, Shapes } from "lucide-react";

// PREMIUM UPGRADE: Added pastel gradients, solid icon backgrounds, and specific text colors
const equipment = [
  { 
    title: "LED Multicolour Slides", 
    desc: "Bright colourful slides designed for safe fun.", 
    icon: Waves, 
    cardBg: "bg-gradient-to-br from-pink-50 to-pink-100",
    iconBg: "bg-pink-500",
    titleColor: "text-pink-950",
    shadow: "shadow-pink-500/40" 
  },
  { 
    title: "Trampoline Setup", 
    desc: "High quality trampoline for active jumping fun.", 
    icon: CircleDot, 
    cardBg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    iconBg: "bg-yellow-500",
    titleColor: "text-yellow-950",
    shadow: "shadow-yellow-500/40" 
  },
  { 
    title: "Ball Pool Area", 
    desc: "Interactive ball pool play experience.", 
    icon: ToyBrick, 
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-500",
    titleColor: "text-blue-950",
    shadow: "shadow-blue-500/40" 
  },
  { 
    title: "Climbing Structures", 
    desc: "Build strength with safe climbing challenges.", 
    icon: Mountain, 
    cardBg: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-500",
    titleColor: "text-green-950",
    shadow: "shadow-green-500/40" 
  },
  { 
    title: "Adventure Obstacles", 
    desc: "Soft obstacles and tunnels for adventure play.", 
    icon: Shapes, 
    cardBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-500",
    titleColor: "text-purple-950",
    shadow: "shadow-purple-500/40" 
  },
  { 
    title: "Zip Line Feature", 
    desc: "Mini adventure zipline experience.", 
    icon: Zap, 
    cardBg: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconBg: "bg-orange-500",
    titleColor: "text-orange-950",
    shadow: "shadow-orange-500/40" 
  },
];

export default function Equipment() {
  // PREMIUM UPGRADE: Added staggered animations for the header text
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
      transition: { type: "spring", stiffness: 100, damping: 20 } as any, // FIXED
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800&display=swap');

        .equipment-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1;
          color: white;
        }

        .equipment-subtitle {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        /* PREMIUM UPGRADE: High-end frosted card style with bouncy hover */
        .equipment-card {
          border-radius: 32px;
          padding: 32px 28px;
          box-shadow: 0 15px 40px -15px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 4px solid white;
        }

        .equipment-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -15px rgba(0, 0, 0, 0.25);
        }
      `}</style>

      {/* Clean transparent wrapper */}
      <section className="py-20 lg:py-28 relative overflow-hidden z-10">
        
        {/* 🐼 Floating Decorative Slide Panda (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" } as any} // FIXED
          className="absolute -right-8 md:right-5 top-12 lg:top-10 z-20 pointer-events-none w-36 md:w-48 lg:w-96 drop-shadow-2xl hidden md:block"
        >
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" } as any}> {/* FIXED */}
            <Image src="/images/panda-trampoline2.png" alt="Panda Sliding" width={300} height={350} className="object-contain" />
          </motion.div>
        </motion.div>

        <Container className="relative z-10">
          {/* Header - Staggered Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <motion.h2 variants={textVariants} className="equipment-title text-4xl md:text-5xl lg:text-6xl mb-5 drop-shadow-sm">
              World Class <span style={{ color: "rgba(255,255,255,0.7)" }}>Equipment</span>
            </motion.h2>

            <motion.p variants={textVariants} className="equipment-subtitle text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
              Our play center features modern, high-quality equipment designed meticulously for fun, safety, and active learning.
            </motion.p>
          </motion.div>

          {/* Premium Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 } as any} // FIXED
                  viewport={{ once: true }}
                  className="equipment-card group flex gap-6 items-start bg-white/70 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Subtle background gradient based on the item color */}
                  <div className={`absolute inset-0 opacity-40 ${item.cardBg} z-0 pointer-events-none`} />

                  <div className="relative z-10 flex gap-5 items-start w-full">
                    {/* Animated, Floating Premium Icon */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2 
                      } as any} // FIXED
                      className={`w-16 h-16 rounded-[20px] flex items-center justify-center flex-shrink-0 text-white ${item.iconBg} ${item.shadow} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/50`}
                    >
                      <Icon size={28} strokeWidth={2.5} />
                    </motion.div>
                    
                    <div className="flex-1 mt-1">
                      <h3 className={`text-[22px] font-black mb-1.5 leading-tight ${item.titleColor}`} style={{ fontFamily: "'Baloo 2', cursive" }}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600/90 font-bold text-[14.5px] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
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