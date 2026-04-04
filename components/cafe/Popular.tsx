"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

// PREMIUM UPGRADE: Added pastel gradients, solid badge backgrounds, and specific text colors
const items = [
  {
    title: "Chocolate Shake",
    desc: "Rich creamy milkshake loved by kids.",
    image: "/images/cafe/chocolate-shake2.png",
    emoji: "🍫",
    cardBg: "bg-gradient-to-br from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    badgeColor: "bg-amber-500 text-white shadow-amber-500/40",
    titleColor: "text-amber-950",
  },
  {
    title: "Strawberry Shake",
    desc: "Sweet and refreshing fruity shake.",
    image: "/images/cafe/strawberry-shake2.png",
    emoji: "🍓",
    cardBg: "bg-gradient-to-br from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    badgeColor: "bg-pink-500 text-white shadow-pink-500/40",
    titleColor: "text-pink-950",
  },
  {
    title: "Oreo Shake",
    desc: "Chocolate cookie delight drink.",
    image: "/images/cafe/oreo2.png",
    emoji: "🍪",
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-500 text-white shadow-blue-500/40",
    titleColor: "text-blue-950",
  },
  {
    title: "Ice Cream",
    desc: "Cool frozen treats kids enjoy.",
    image: "/images/cafe/icecream2.png",
    emoji: "🍦",
    cardBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    badgeColor: "bg-purple-500 text-white shadow-purple-500/40",
    titleColor: "text-purple-950",
  },
  {
    title: "French Fries",
    desc: "Crispy golden snack favourite.",
    image: "/images/cafe/fries2.png",
    emoji: "🍟",
    cardBg: "bg-gradient-to-br from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    badgeColor: "bg-orange-500 text-white shadow-orange-500/40",
    titleColor: "text-orange-950",
  },
  {
    title: "Club Sandwich",
    desc: "Fresh tasty sandwich bites.",
    image: "/images/cafe/sandwich2.png",
    emoji: "🥪",
    cardBg: "bg-gradient-to-br from-green-50 to-green-100",
    borderColor: "border-green-200",
    badgeColor: "bg-green-500 text-white shadow-green-500/40",
    titleColor: "text-green-950",
  },
];

export default function Popular() {
  // FIXED: Added Variants type and explicit transition for Next.js 16/Turbopack
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      } as any, // Emergency fix for Vercel build
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800&display=swap');

        .popular-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1;
          color: white; 
        }

        .popular-subtitle {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9); 
          line-height: 1.6;
        }

        .popular-card {
          border-radius: 32px;
          box-shadow: 0 15px 40px -10px rgba(180, 50, 10, 0.2);
          cursor: pointer;
          position: relative;
        }
      `}</style>

      <section className="py-20 lg:py-28 relative z-10">
        <Container>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={textVariants} className="mb-5">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 px-6 py-2.5 rounded-full shadow-lg">
                <span className="text-white">🍽️</span>
                <span className="uppercase tracking-[4px] text-[13px] font-extrabold text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>Yummy Menu</span>
              </div>
            </motion.div>

            <motion.h2 variants={textVariants} className="popular-title text-4xl md:text-5xl lg:text-6xl mb-5 drop-shadow-sm">
              Kids Favourite <span style={{ color: "rgba(255,255,255,0.7)" }}>Treats</span>
            </motion.h2>

            <motion.p variants={textVariants} className="popular-subtitle text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
              Discover the most loved snacks and refreshing drinks from our cafe menu, perfectly crafted for little ones and parents alike.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 } as any}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8, boxShadow: "0 30px 60px -15px rgba(180, 50, 10, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className={`popular-card group p-4 border-2 flex flex-col ${item.cardBg} ${item.borderColor}`}
              >
                <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/80 shadow-sm mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700 ease-out mix-blend-overlay"
                  />
                  
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 40%)",
                    }}
                  />

                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2 
                    } as any}
                    className={`absolute top-4 right-4 w-14 h-14 rounded-full ${item.badgeColor} shadow-lg flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-white/50 z-20`}
                  >
                    {item.emoji}
                  </motion.div>
                </div>

                <div className="px-3 pb-3 text-center flex-1 flex flex-col justify-center">
                  <h3 className={`text-2xl lg:text-[26px] font-black mb-2 ${item.titleColor}`} style={{ fontFamily: "'Baloo 2', cursive" }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600/90 font-bold text-[15px] leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}