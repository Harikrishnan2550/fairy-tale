"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

const menuItems = [
  {
    title: "Chocolate Shake",
    desc: "Rich creamy kids favourite",
    image: "/images/cafe/chocolate-shake2.png",
    emoji: "🍫",
    borderColor: "border-amber-100",
  },
  {
    title: "Strawberry Shake",
    desc: "Sweet fruity delight",
    image: "/images/cafe/strawberry-shake2.png",
    emoji: "🍓",
    borderColor: "border-pink-100",
  },
  {
    title: "Ice Cream",
    desc: "Frozen fun treat",
    image: "/images/cafe/icecream2.png",
    emoji: "🍦",
    borderColor: "border-blue-100",
  },
  {
    title: "French Fries",
    desc: "Crispy snack loved by kids",
    image: "/images/cafe/fries2.png",
    emoji: "🍟",
    borderColor: "border-orange-100",
  },
  {
    title: "Club Sandwich",
    desc: "Fresh tasty bites",
    image: "/images/cafe/sandwich2.png",
    emoji: "🥪",
    borderColor: "border-green-100",
  },
  {
    title: "Oreo Shake",
    desc: "Chocolate cookie delight",
    image: "/images/cafe/oreo2.png",
    emoji: "🍪",
    borderColor: "border-purple-100",
  },
];

// Pre-defined values to avoid React hydration errors with random numbers
const bubbles = [
  { size: 45, left: "12%", top: "85%", delay: 0, duration: 6 },
  { size: 70, left: "85%", top: "65%", delay: 2, duration: 8 },
  { size: 30, left: "25%", top: "35%", delay: 1, duration: 5 },
  { size: 55, left: "75%", top: "85%", delay: 3, duration: 7 },
  { size: 35, left: "55%", top: "25%", delay: 0.5, duration: 6 },
];

const floatingEmojis = [
  { emoji: "✨", left: "5%", top: "15%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🌟", left: "92%", top: "40%", animation: "float-medium", size: "text-6xl", opacity: "opacity-20" },
  { emoji: "💖", left: "10%", top: "80%", animation: "float-fast", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎈", left: "82%", top: "12%", animation: "float-slow", size: "text-5xl", opacity: "opacity-30" },
  { emoji: "🦋", left: "35%", top: "75%", animation: "float-medium", size: "text-4xl", opacity: "opacity-20" },
  { emoji: "🎨", left: "60%", top: "10%", animation: "float-fast", size: "text-3xl", opacity: "opacity-30" },
];

export default function Cafe() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .cafe-bg {
          background: linear-gradient(200deg, #FF6B35 0%, #FF8C42 40%, #FFB347 100%);
          position: relative;
        }

        /* Subtle Polka Dot Pattern */
        .dot-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .cafe-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.95;
          color: white;
        }

        /* Floating Animation Classes */
        .float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .float-medium {
          animation: float 4.5s ease-in-out infinite reverse;
        }
        .float-fast {
          animation: float 3s ease-in-out infinite;
        }
        .floating-panda {
          animation: pandaFloat 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes pandaFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <section className="cafe-bg py-10 lg:py-0 overflow-hidden relative">

        {/* Dot Pattern Overlay */}
        <div className="dot-pattern" />

        {/* Subtle background glow for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-white/10 blur-[120px] rounded-full pointer-events-none" />

        {/* --- Animated Floating Bubbles --- */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/30 bg-white/10 pointer-events-none"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
            }}
            animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: bubble.duration, delay: bubble.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* --- Animated Emojis --- */}
        {floatingEmojis.map((item, i) => (
          <motion.div 
            key={`emoji-${i}`}
            className={`absolute pointer-events-none ${item.animation} ${item.size} ${item.opacity}`}
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 }}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* Floating Panda */}
       

        {/* Subtle floating background elements */}
        <div className="absolute top-10 right-20 text-5xl text-white/20 float-slow blur-[1px] z-0" style={{ animationDelay: '0s' }}>☁️</div>
        <div className="absolute bottom-20 left-10 text-6xl text-white/20 float-medium blur-[1px] z-0" style={{ animationDelay: '1.5s' }}>🎪</div>
        <div className="absolute top-1/2 right-10 text-5xl text-white/20 float-fast blur-[1px] z-0" style={{ animationDelay: '3s' }}>✨</div>

        <Container>

          {/* Header & Panda Flex Container */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative z-10 gap-8 lg:pt-16">
            
            {/* Left: Section Header Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:text-left flex-1 mt-10 md:mt-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/30 shadow-lg">
                  <span className="text-white">✨</span>
                  <span className="uppercase tracking-[3px] text-[13px] font-extrabold text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>Fairy Tales Cafe</span>
                </div>
              </motion.div>

              <h2 className="cafe-title text-5xl md:text-6xl lg:text-7xl mb-5 drop-shadow-sm">
                Yummy treats,<br />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>happy little hearts</span>
              </h2>

              <p className="text-white/95 text-lg md:text-xl max-w-xl mx-auto md:mx-0 font-bold drop-shadow-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Relax while your kids play — enjoy fresh beverages,
                delicious snacks, and quick bites at our cozy cafe.
              </p>
            </motion.div>

            {/* Right: Panda Character */}
            <motion.div
              initial={{ opacity: 0, x: 60, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-96 md:w-80 lg:w-[800px] xl:w-[550px] aspect-square flex-shrink-0"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-[10%] rounded-full bg-white/20 blur-2xl pointer-events-none" />
                <Image
                  src="/videos/panda4.gif"
                  alt="Fairy Tale Cafe Panda eating"
                  fill
                  className="object-contain drop-shadow-2xl"
                  unoptimized 
                />
              </motion.div>
            </motion.div>

          </div>

          {/* PREMIUM KIDS GRID */}
          <div className="relative z-10 pb-10 mt-10 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* 3D Pop-out Emoji Badge */}
                  <div className={`absolute -top-5 -right-3 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl z-20 shadow-xl border-4 ${item.borderColor} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                    {item.emoji}
                  </div>

                  {/* Main Card */}
                  <div className="bg-white rounded-[40px] p-3 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:-translate-y-2 relative z-10">
                    
                    {/* Clean Image Area */}
                    <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden bg-slate-50 mb-4 border border-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="px-4 pb-4 pt-1 text-center">
                      <h3 className="text-[22px] font-black text-slate-800 mb-1" style={{ fontFamily: "'Baloo 2', cursive" }}>
                        {item.title}
                      </h3>
                      <p className="text-slate-500 font-bold text-[15px]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Premium Bouncy CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 mb-10 relative z-10"
          >
            <motion.a
              href="/cafe"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#FF6B35] rounded-[32px] font-black text-[19px] gap-3 transition-all shadow-[0_15px_30px_-10px_rgba(255,107,53,0.5)] hover:shadow-[0_25px_40px_-10px_rgba(255,107,53,0.6)] hover:-translate-y-1"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <span className="text-3xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">🍽️</span>
              Explore Full Menu
            </motion.a>
          </motion.div>

        </Container>
      </section>
    </>
  );
}