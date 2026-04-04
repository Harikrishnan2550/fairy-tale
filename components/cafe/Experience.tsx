"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Coffee, Users, Sparkles, Clock } from "lucide-react";

const features = [
  {
    title: "Comfortable Seating",
    desc: "Relax in our comfortable seating area while kids enjoy play time.",
    icon: Coffee,
    cardBg: "bg-gradient-to-br from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-500",
    titleColor: "text-amber-950",
    shadow: "shadow-amber-500/40"
  },
  {
    title: "Family Friendly Space",
    desc: "Designed for both parents and children to enjoy together.",
    icon: Users,
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
    titleColor: "text-blue-950",
    shadow: "shadow-blue-500/40"
  },
  {
    title: "Clean & Hygienic",
    desc: "Maintained with high hygiene standards for safe dining.",
    icon: Sparkles,
    cardBg: "bg-gradient-to-br from-green-50 to-green-100",
    borderColor: "border-green-200",
    iconBg: "bg-green-500",
    titleColor: "text-green-950",
    shadow: "shadow-green-500/40"
  },
  {
    title: "Quick Service",
    desc: "Fast preparation so you spend more time enjoying.",
    icon: Clock,
    cardBg: "bg-gradient-to-br from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    iconBg: "bg-pink-500",
    titleColor: "text-pink-950",
    shadow: "shadow-pink-500/40"
  },
];

export default function Experience() {
  // FIXED: Added "as const" to satisfy strict Framer Motion types in Next.js 15+
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1 
      },
    },
  } as const;

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as const, // CRITICAL FIX: Explicit type assertion
        stiffness: 100, 
        damping: 20 
      },
    },
  } as const;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .experience-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1;
          color: white; 
        }

        .experience-subtitle {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9); 
          line-height: 1.6;
        }

        .experience-card {
          border-radius: 40px;
          padding: 36px 28px;
          text-align: center;
          box-shadow: 0 20px 50px -15px rgba(0,0,0,0.15);
          cursor: pointer;
          border: 4px solid white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .experience-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.25);
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
                <span className="text-white">☕</span>
                <span className="uppercase tracking-[4px] text-[13px] font-extrabold text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>Cozy Vibes</span>
              </div>
            </motion.div>

            <motion.h2 variants={textVariants} className="experience-title text-5xl md:text-6xl lg:text-7xl mb-5 drop-shadow-sm">
              Cafe <span style={{ color: "rgba(255,255,255,0.7)" }}>Experience</span>
            </motion.h2>

            <motion.p variants={textVariants} className="experience-subtitle text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
              Enjoy a relaxing cafe atmosphere with delicious treats and refreshing drinks while your kids have fun in our safe play zones.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1, 
                    type: "spring" as const, // Added as const for consistency
                    stiffness: 100 
                  }}
                  viewport={{ once: true }}
                  className="experience-card group bg-white/70 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className={`absolute inset-0 opacity-40 ${item.cardBg} z-0 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" as const, // Added as const
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