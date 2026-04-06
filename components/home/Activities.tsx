"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

const activities = [
  {
    title: "Trampoline Zone",
    desc: "Jump, bounce, and enjoy unlimited high-flying fun.",
    image: "/images/activities/trampoline.png",
    badge: "bg-pink-500 text-white shadow-pink-500/40",
    cardBg: "bg-gradient-to-br from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    titleColor: "text-pink-950",
    icon: "🚀",
  },
  {
    title: "Ball Blaster Arena",
    desc: "Interactive ball shooting game for little champions.",
    image: "/images/activities/ballblaster.png",
    badge: "bg-yellow-500 text-white shadow-yellow-500/40",
    cardBg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-200",
    titleColor: "text-yellow-950",
    icon: "🎯",
  },
  {
    title: "Kids Climbing Wall",
    desc: "Improve strength and confidence step by step.",
    image: "/images/activities/climbing.png",
    badge: "bg-blue-500 text-white shadow-blue-500/40",
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    titleColor: "text-blue-950",
    icon: "🧗‍♂️",
  },
  {
    title: "Zip Line Ride",
    desc: "Mini adventure ride for thrill-seeking kids.",
    image: "/images/activities/zipline.png",
    badge: "bg-purple-500 text-white shadow-purple-500/40",
    cardBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    titleColor: "text-purple-950",
    icon: "⚡",
  },
  {
    title: "Monkey Swing",
    desc: "Fun coordination activity for little monkeys.",
    image: "/images/activities/monkey.png",
    badge: "bg-green-500 text-white shadow-green-500/40",
    cardBg: "bg-gradient-to-br from-green-50 to-green-100",
    borderColor: "border-green-200",
    titleColor: "text-green-950",
    icon: "🐒",
  },
  {
    title: "Basketball Play",
    desc: "Active sports fun to score big points.",
    image: "/images/activities/basketball.png",
    badge: "bg-orange-500 text-white shadow-orange-500/40",
    cardBg: "bg-gradient-to-br from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    titleColor: "text-orange-950",
    icon: "🏀",
  },
];

// Pre-defined values for magical background bubbles
const bubbles = [
  { size: 45, left: "12%", top: "85%", delay: 0, duration: 6 },
  { size: 70, left: "85%", top: "65%", delay: 2, duration: 8 },
  { size: 30, left: "25%", top: "35%", delay: 1, duration: 5 },
  { size: 55, left: "75%", top: "85%", delay: 3, duration: 7 },
  { size: 35, left: "55%", top: "25%", delay: 0.5, duration: 6 },
];

// Pre-defined values for floating background emojis
const floatingEmojis = [
  { emoji: "✨", left: "5%", top: "15%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🌟", left: "92%", top: "40%", animation: "float-medium", size: "text-6xl", opacity: "opacity-20" },
  { emoji: "💖", left: "10%", top: "80%", animation: "float-fast", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎈", left: "82%", top: "12%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🦋", left: "35%", top: "75%", animation: "float-medium", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎨", left: "60%", top: "10%", animation: "float-fast", size: "text-3xl", opacity: "opacity-30" },
];

export default function Activities() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800&display=swap');

        .activities-bg {
          background: linear-gradient(160deg, #FFB347 0%, #FF8C42 40%, #FF6B35 100%);
        }

        /* Subtle Polka Dot Pattern */
        .dot-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .activity-card {
          border-radius: 32px;
          box-shadow: 0 15px 40px -10px rgba(180, 50, 10, 0.2);
          cursor: pointer;
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        /* Added specific floating animation for the panda */
        .floating-panda {
          animation: pandaFloat 4s ease-in-out infinite;
        }

        /* Floating Animation Speed Classes */
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4.5s ease-in-out infinite reverse; }
        .float-fast { animation: float 3s ease-in-out infinite; }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes pandaFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <section className="activities-bg py-20 lg:py-28 -mt-1 relative overflow-hidden">
        
        {/* Dot Pattern Overlay */}
        <div className="dot-pattern z-0" />

        {/* Subtle background glow for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Animated Floating Bubbles */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/30 bg-white/10 pointer-events-none z-0"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            } as any} // FIXED
          />
        ))}

        {/* Animated Emojis */}
        {floatingEmojis.map((item, i) => (
          <motion.div 
            key={`emoji-${i}`}
            className={`absolute pointer-events-none z-0 ${item.animation} ${item.size} ${item.opacity}`}
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 } as any} // FIXED
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* Adiciona o urso panda no canto superior esquerdo com animação floating-panda */}
        <div className="absolute top-48 left-[74px] z-0 p-4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none floating-panda">
          <Image
            src='/images/image_3.png' 
            alt="Cute Peeking Panda"
            width={300} 
            height={300} 
            className="opacity-100" 
          />
        </div>

        {/* Subtle floating background elements (Original) */}
        <div className="absolute top-10 right-20 text-5xl text-white/20 floating-element blur-[1px] z-0" style={{ animationDelay: '0s' }}>☁️</div>
        <div className="absolute bottom-20 left-10 text-6xl text-white/20 floating-element blur-[1px] z-0" style={{ animationDelay: '1.5s' }}>🎪</div>
        <div className="absolute top-1/2 right-10 text-5xl text-white/20 floating-element blur-[1px] z-0" style={{ animationDelay: '3s' }}>✨</div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10 mt-48 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 } as any} // FIXED
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 shadow-lg">
                <span className="text-white">✨</span>
                <span className="uppercase tracking-[3px] text-sm font-bold text-white">Endless Fun</span>
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter"
                style={{ fontFamily: "'Baloo 2', cursive", letterSpacing: "-2px" }}>
              Exciting Activities
            </h2>

            <p className="mt-6 text-white/95 text-lg md:text-xl max-w-2xl mx-auto font-bold"
               style={{ fontFamily: "'Nunito', sans-serif" }}>
              Explore fun-filled zones designed to keep kids active,
              happy, and fully engaged all day long.
            </p>
          </motion.div>

          {/* GRID - UPDATED FOR COLORFUL PREMIUM UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {activities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 } as any} // FIXED
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8, boxShadow: "0 30px 60px -15px rgba(180, 50, 10, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className={`activity-card p-5 group border-2 ${item.cardBg} ${item.borderColor}`}
              >
                {/* IMAGE CONTAINER - Premium Frosted Border */}
                <div className="relative h-80 w-full rounded-[24px] overflow-hidden bg-white/60 backdrop-blur-sm mb-6 border-4 border-white/80 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                  
                  {/* Premium Solid Floating Emoji Badge */}
                  <div className={`absolute top-4 right-4 w-14 h-14 rounded-full ${item.badge} shadow-lg flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 border border-white/50`}>
                    {item.icon}
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="px-3 pb-3 text-center">
                  <h3 className={`text-2xl font-black mb-2 ${item.titleColor}`}
                      style={{ fontFamily: "'Baloo 2', cursive" }}>
                    {item.title}
                  </h3>

                  <p className="text-slate-600/90 font-bold text-base leading-snug"
                     style={{ fontFamily: "'Nunito', sans-serif" }}>
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