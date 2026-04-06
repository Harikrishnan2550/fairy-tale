"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Rocket, Target, Mountain, Zap, Smile, Trophy } from "lucide-react";

// PREMIUM UPGRADE: Swapped standard emojis for professional icons
const activities = [
  { 
    title: "Trampoline Zone", 
    desc: "Jump high and enjoy endless bouncing fun in our safe trampoline arena.", 
    image: "/images/activities/trampoline.png", 
    icon: Rocket,
    cardBg: "bg-gradient-to-br from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    badgeColor: "bg-pink-500 text-white shadow-pink-500/40",
    titleColor: "text-pink-950",
  },
  { 
    title: "Ball Blaster Arena", 
    desc: "Interactive ball shooting game loved by energetic kids.", 
    image: "/images/activities/ballblaster.png", 
    icon: Target,
    cardBg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-200",
    badgeColor: "bg-yellow-500 text-white shadow-yellow-500/40",
    titleColor: "text-yellow-950",
  },
  { 
    title: "Kids Climbing Wall", 
    desc: "Build strength, balance and confidence through climbing challenges.", 
    image: "/images/activities/climbing.png", 
    icon: Mountain,
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-500 text-white shadow-blue-500/40",
    titleColor: "text-blue-950",
  },
  { 
    title: "Zip Line Ride", 
    desc: "Mini adventure zip line designed for safe excitement.", 
    image: "/images/activities/zipline.png", 
    icon: Zap,
    cardBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    badgeColor: "bg-purple-500 text-white shadow-purple-500/40",
    titleColor: "text-purple-950",
  },
  { 
    title: "Monkey Swing", 
    desc: "Improve coordination while having fun swinging challenges.", 
    image: "/images/activities/monkey.png", 
    icon: Smile,
    cardBg: "bg-gradient-to-br from-green-50 to-green-100",
    borderColor: "border-green-200",
    badgeColor: "bg-green-500 text-white shadow-green-500/40",
    titleColor: "text-green-950",
  },
  { 
    title: "Basketball Activity", 
    desc: "Fun sports activity that keeps kids active and engaged.", 
    image: "/images/activities/basketball.png", 
    icon: Trophy,
    cardBg: "bg-gradient-to-br from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    badgeColor: "bg-orange-500 text-white shadow-orange-500/40",
    titleColor: "text-orange-950",
  },
];

export default function PlayActivities() {
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
      transition: { type: "spring", stiffness: 100, damping: 20 } as any, // FIXED
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800&display=swap');

        .activities-section-badge {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: white;
          background: rgba(255,255,255,0.2);
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 999px;
          padding: 8px 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .activities-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.95;
          color: white;
        }

        .activities-subtitle {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
        }

        .activity-card {
          border-radius: 32px;
          box-shadow: 0 15px 40px -10px rgba(180, 50, 10, 0.2);
          cursor: pointer;
          position: relative;
        }
      `}</style>

      {/* Clean transparent wrapper */}
      <section className="py-20 lg:py-28 relative overflow-hidden z-10">
        
        {/* 🐼 Floating Decorative Panda 1: Zipline (Top Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" } as any} // FIXED
          className="absolute -left-10 md:-left-4 -top-10 md:-top-10 z-20 pointer-events-none w-[380px] md:w-80 lg:w-[450px] drop-shadow-2xl"
        >
          <motion.div animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" } as any}>
            <Image src="/images/panda-zipline.png" alt="Panda on Zipline" width={850} height={600} className="object-contain" />
          </motion.div>
        </motion.div>

        {/* 🐼 Floating Decorative Panda 2: Trampoline (Middle Right) */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" } as any} // FIXED
          className="absolute -right-1 md:-right-1 top-1 z-20 pointer-events-none w-64 md:w-64 lg:w-[550px] drop-shadow-2xl md:block hidden"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" } as any}>
            <Image src="/images/panda-playing.png" alt="Panda Jumping on Trampoline" width={800} height={450} className="object-contain" />
          </motion.div>
        </motion.div>

        <Container className="relative z-10">
          
          {/* Header - Staggered Text Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10 pt-80 md:pt-10" 
          >
            

            <motion.h2 variants={textVariants} className="activities-title text-5xl md:text-6xl lg:text-7xl mb-5 relative z-30 drop-shadow-sm">
              Exciting Play
              <br />
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Activities</span>
            </motion.h2>

            <motion.p variants={textVariants} className="activities-subtitle text-base md:text-lg max-w-2xl mx-auto relative z-30 drop-shadow-sm">
              From adventure challenges to fun games, our play zones are designed to keep kids active, happy, and fully engaged!
            </motion.p>
          </motion.div>

          {/* Premium Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-30">
            {activities.map((item, index) => {
              // Dynamically rendering the lucide icon
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 } as any} // FIXED
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -8, boxShadow: "0 30px 60px -15px rgba(180, 50, 10, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`activity-card p-4 group border-2 ${item.cardBg} ${item.borderColor}`}
                >
                  {/* Premium Frosted Image Container */}
                  <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/80 shadow-sm mb-5">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition duration-700 ease-out mix-blend-overlay" 
                    />
                    
                    {/* Subtle bottom fade into the card color */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(255,255,255,0.7) 0%, transparent 40%)",
                      }}
                    />

                    {/* PREMIUM UPGRADE: Animated, floating high-end icons */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2 
                      } as any} // FIXED
                      className={`absolute top-4 right-4 w-14 h-14 rounded-full ${item.badgeColor} shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-white/50 z-20`}
                    >
                      <Icon size={26} strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="px-3 pb-3 text-center">
                    <h3 className={`text-2xl lg:text-[26px] font-black mb-2 ${item.titleColor}`} style={{ fontFamily: "'Baloo 2', cursive" }}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600/90 font-bold text-[15px] leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
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