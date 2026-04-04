"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Coffee, Castle, CupSoda, Tent, PartyPopper } from "lucide-react";

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

export default function Highlights() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800;900&family=Nunito:wght@600;700;800&display=swap');

        /* Using the exact same gradient from the Hero section */
        .continuous-bg {
          background: linear-gradient(200deg, #FF6B35 0%, #FF8C42 40%, #FFB347 100%);
        }

        /* Subtle Polka Dot Pattern */
        .dot-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .feature-card {
          background: white;
          border-radius: 40px;
          box-shadow: 0 25px 60px -15px rgba(180, 50, 10, 0.25);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.8);
        }

        .feature-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 35px 80px -15px rgba(180, 50, 10, 0.35);
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        /* Floating Animation Speed Classes */
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4.5s ease-in-out infinite reverse; }
        .float-fast { animation: float 3s ease-in-out infinite; }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>

      <section className="continuous-bg py-20 lg:py-28 overflow-hidden relative">
        
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
            }}
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
            transition={{ duration: 1, delay: i * 0.15 }}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* Original Decorative Floating Background Elements */}
        <div className="absolute top-20 left-10 text-6xl text-white/20 floating-element blur-[1px] z-0" style={{ animationDelay: '0s' }}>⭐</div>
        <div className="absolute bottom-40 right-10 text-6xl text-white/20 floating-element blur-[1px] z-0" style={{ animationDelay: '2s' }}>🎈</div>
        <div className="absolute top-1/2 left-4 text-5xl text-white/20 floating-element blur-[1px] z-0" style={{ animationDelay: '1s' }}>🧩</div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 px-6 py-2.5 rounded-full shadow-lg mb-6">
              <span className="text-white">✦</span>
              <span className="uppercase tracking-[4px] text-[13px] font-extrabold text-white">Our World</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white mb-6 drop-shadow-sm" 
                style={{ fontFamily: "'Baloo 2', cursive" }}>
              Joy for Kids.<br />
              <span className="text-[#ffe4b5]">Peace for Parents.</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-bold drop-shadow-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Three beautiful spaces. One unforgettable experience.
            </p>
          </motion.div>

          {/* Features Grid - Updated to 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">

            {/* 1. Indoor Play Area Card */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="feature-card group flex flex-col bg-gradient-to-b from-[#fdf2f8] to-[#fce7f3]"
            >
              {/* Card Image Area */}
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src="/images/V-2.jpeg" 
                  alt="Indoor play area" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2.5 border border-white/50">
                  <Castle size={18} className="text-pink-600" />
                  <span className="font-extrabold text-slate-800 text-[13px] tracking-wide uppercase">Action Zone</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 lg:p-10 flex-1 flex flex-col relative bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl flex items-center justify-center shadow-inner border border-pink-100">
                    <ShieldCheck size={28} strokeWidth={2.5} className="text-pink-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-800 leading-tight" 
                      style={{ fontFamily: "'Baloo 2', cursive" }}>
                    Indoor Play Area
                  </h3>
                </div>

                <div className="text-[16px] leading-relaxed text-slate-500 mb-4 font-bold flex-1 relative z-10" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  <p>Safe, colourful adventures meticulously crafted for children to spark imagination.</p>
                </div>

                {/* PREMIUM OFFER BADGE */}
                <div className="mb-6 relative z-10 bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-3xl p-4 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-pink-600 font-black uppercase tracking-wider text-[11px] mb-0.5">Opening Offer</div>
                    <div className="text-slate-600 font-extrabold text-sm">Entry Fee</div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <span className="text-slate-400 line-through decoration-2 font-bold text-xl">₹350</span>
                    <span className="text-pink-600 font-black text-3xl">₹299</span>
                  </div>
                </div>

                <a 
                  href="/play-center" 
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-slate-50 hover:bg-pink-600 text-slate-700 hover:text-white rounded-full font-extrabold text-[17px] gap-3 transition-all duration-300 shadow-sm hover:shadow-xl border border-slate-200 hover:border-pink-600 group/btn relative z-10"
                >
                  Explore Zones 
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* 2. Garden Café Card */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="feature-card group flex flex-col bg-gradient-to-b from-[#fffbeb] to-[#ffedd5]"
            >
              {/* Card Image Area */}
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src="/images/V-6.jpeg" 
                  alt="Garden Cafe" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent opacity-80" />

                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2.5 border border-white/50">
                  <CupSoda size={18} className="text-orange-500" />
                  <span className="font-extrabold text-slate-800 text-[13px] tracking-wide uppercase">Relaxation Zone</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 lg:p-10 flex-1 flex flex-col relative bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl flex items-center justify-center shadow-inner border border-amber-100">
                    <Coffee size={28} strokeWidth={2.5} className="text-orange-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-800 leading-tight" 
                      style={{ fontFamily: "'Baloo 2', cursive" }}>
                    Garden Café
                  </h3>
                </div>

                <div className="space-y-4 text-[16px] leading-relaxed text-slate-500 mb-8 font-bold flex-1 relative z-10" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  <p>Premium artisan coffee, healthy smoothies, and light bites in a serene, natural setting.</p>
                  <p>Relax comfortably while watching your little ones play safely through our glass walls.</p>
                </div>

                <a 
                  href="/cafe" 
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-slate-50 hover:bg-orange-500 text-slate-700 hover:text-white rounded-full font-extrabold text-[17px] gap-3 transition-all duration-300 shadow-sm hover:shadow-xl border border-slate-200 hover:border-orange-500 group/btn relative z-10 mt-auto"
                >
                  View Café Menu 
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* 3. Outdoor Party Space Card */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="feature-card group flex flex-col bg-gradient-to-b from-[#ecfdf5] to-[#d1fae5]"
            >
              {/* Card Image Area */}
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src="/images/outdoor.png" /* You can change this to a specific party image later! */
                  alt="Outdoor Party Space" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-80" />

                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2.5 border border-white/50">
                  <Tent size={18} className="text-emerald-500" />
                  <span className="font-extrabold text-slate-800 text-[13px] tracking-wide uppercase">Party Zone</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 lg:p-10 flex-1 flex flex-col relative bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center shadow-inner border border-emerald-100">
                    <PartyPopper size={28} strokeWidth={2.5} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-800 leading-tight" 
                      style={{ fontFamily: "'Baloo 2', cursive" }}>
                    Outdoor Party Space
                  </h3>
                </div>

                <div className="space-y-4 text-[16px] leading-relaxed text-slate-500 mb-8 font-bold flex-1 relative z-10" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  <p>Celebrate magical birthdays and special moments under the open sky.</p>
                  <p>A beautifully curated private space designed for family gatherings and unforgettable parties.</p>
                </div>

                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-slate-50 hover:bg-emerald-500 text-slate-700 hover:text-white rounded-full font-extrabold text-[17px] gap-3 transition-all duration-300 shadow-sm hover:shadow-xl border border-slate-200 hover:border-emerald-500 group/btn relative z-10 mt-auto"
                >
                  Book a Party 
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Premium Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 lg:gap-20 text-center md:text-left bg-white/95 backdrop-blur-md px-12 py-10 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 relative z-10"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-blue-50/80 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100">
                <span className="text-3xl">🛡️</span>
              </div>
              <div>
                <div className="font-extrabold text-xl text-slate-800 mb-0.5">100% Supervised</div>
                <div className="text-[15px] text-slate-500 font-bold">Trained caregivers & CCTV</div>
              </div>
            </div>

            <div className="hidden md:block w-[2px] h-16 bg-slate-100 rounded-full"></div>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-purple-50/80 rounded-2xl flex items-center justify-center shadow-sm border border-purple-100">
                <span className="text-3xl">🌟</span>
              </div>
              <div>
                <div className="font-extrabold text-xl text-slate-800 mb-0.5">Ages 1 - 15</div>
                <div className="text-[15px] text-slate-500 font-bold">Perfect for all little ones</div>
              </div>
            </div>

            <div className="hidden md:block w-[2px] h-16 bg-slate-100 rounded-full"></div>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-green-50/80 rounded-2xl flex items-center justify-center shadow-sm border border-green-100">
                <span className="text-3xl">🧼</span>
              </div>
              <div>
                <div className="font-extrabold text-xl text-slate-800 mb-0.5">Ultra Hygienic</div>
                <div className="text-[15px] text-slate-500 font-bold">Sanitised every hour</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}