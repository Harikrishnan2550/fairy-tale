"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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
  { emoji: "📞", left: "60%", top: "10%", animation: "float-fast", size: "text-3xl", opacity: "opacity-30" },
];

export default function Contact() {
  // Web3Forms State Management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms Configuration
    // IMPORTANT: Paste your actual Web3Forms Access Key inside the quotes below!
    formData.append("access_key", "17a64190-3468-49f1-b4a3-6f4fee3da094");
    formData.append("redirect", "false"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset(); // Clear the form
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800;900&display=swap');

        .contact-bg {
          /* Matching the Hero/Cafe section gradient */
          background: linear-gradient(185deg, #FF6B35 0%, #FF8C42 40%, #FFB347 100%);
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

        .contact-section-badge {
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

        .contact-title {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.95;
          color: white;
        }

        .contact-subtitle {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
        }

        /* PREMIUM Form Inputs Customization */
        .kids-input {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          color: #1e293b;
          background: #f8fafc;
          border: 3px solid #f1f5f9;
          border-radius: 24px;
          padding: 18px 24px;
          width: 100%;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: inset 0 2px 6px rgba(0,0,0,0.02);
        }
        .kids-input::placeholder {
          color: #94a3b8;
          font-weight: 700;
        }
        .kids-input:focus {
          border-color: #FF8C42;
          background: #ffffff;
          box-shadow: 0 0 0 6px rgba(255, 140, 66, 0.15), inset 0 2px 6px rgba(0,0,0,0.02);
          transform: translateY(-2px);
        }

        /* Floating Animation Classes */
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4.5s ease-in-out infinite reverse; }
        .float-fast { animation: float 3s ease-in-out infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>

      <section className="py-20 lg:py-28 contact-bg relative overflow-hidden">
        
        {/* Dot Pattern Overlay */}
        <div className="dot-pattern z-0" />

        {/* Subtle background glow for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* --- Animated Floating Bubbles --- */}
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
            } as any}
          />
        ))}

        {/* --- Animated Emojis --- */}
        {floatingEmojis.map((item, i) => (
          <motion.div 
            key={`emoji-${i}`}
            className={`absolute pointer-events-none z-0 ${item.animation} ${item.size} ${item.opacity}`}
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 } as any}
          >
            {item.emoji}
          </motion.div>
        ))}

        <Container className="relative z-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] } as any}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="contact-title text-5xl md:text-6xl lg:text-7xl mb-5 drop-shadow-sm">
              Plan Your
              <br />
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Visit</span>
            </h2>

            <p className="contact-subtitle text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
              Have questions or want to book a party? Drop us a message below and we'll get back to you with a smile!
            </p>
          </motion.div>

          {/* MAIN LAYOUT: Panda (Left) + Form & Map (Right) */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative z-10 max-w-6xl mx-auto">
            
            {/* LEFT SIDE - Panda Only (No Container) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" } as any}
              className="w-full lg:w-5/12 relative flex items-center justify-center min-h-[350px] lg:min-h-full"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" } as any}
                className="relative w-full h-full min-h-[600px] lg:min-h-0"
              >
                <Image
                  src="/images/panda-calling.png" 
                  alt="Panda on the phone"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - PREMIUM Contact Form & Small Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" } as any}
              className="w-full lg:w-7/12 bg-white/95 backdrop-blur-xl rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[6px] border-white p-8 lg:p-12 flex flex-col relative"
            >
              {/* Decorative inner blob for premium feel */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

              <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-8 relative z-10" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Send a Message ✨
              </h3>
              
              {/* Form wired up to Web3Forms */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1 relative z-10">
                
                {/* Spam Protection Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" name="name" placeholder="Your Name" className="kids-input" required disabled={isSubmitting} />
                  <input type="email" name="email" placeholder="Email Address" className="kids-input" required disabled={isSubmitting} />
                </div>
                <input type="text" name="subject" placeholder="Subject (e.g. Birthday Party)" className="kids-input" disabled={isSubmitting} />
                <textarea name="message" placeholder="How can we help you today?" className="kids-input h-36 resize-none" required disabled={isSubmitting}></textarea>
                
                {/* Error Message Display */}
                {errorMessage && (
                  <p className="text-red-500 font-bold text-sm px-2">{errorMessage}</p>
                )}

                {/* Premium Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={`group font-black text-[19px] rounded-full py-5 mt-4 transition-all flex items-center justify-center gap-3 border-2 border-white/30 relative overflow-hidden ${
                    isSuccess 
                      ? "bg-green-500 text-white shadow-lg" 
                      : "bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] text-white shadow-[0_15px_30px_-10px_rgba(255,107,53,0.5)] hover:shadow-[0_25px_40px_-10px_rgba(255,107,53,0.6)] hover:-translate-y-1"
                  }`} 
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {!isSuccess && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />}
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 size={22} className="animate-spin" /> Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 size={22} className="text-white" /> Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send size={22} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" /> Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Premium Divider */}
              <div className="h-1 w-full bg-slate-100 rounded-full my-12 relative z-10">
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white border-2 border-slate-100 px-6 py-1.5 rounded-full text-slate-400 font-extrabold text-sm uppercase tracking-[3px]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Or find us here
                </div>
              </div>

              {/* Premium Small Map Section */}
              <div className="w-full relative z-10">
                
                <div className="flex items-center gap-4 mb-6 bg-slate-50 p-4 rounded-[24px] border-2 border-slate-100">
                  <div className="w-14 h-14 bg-orange-100 rounded-[18px] flex items-center justify-center flex-shrink-0 shadow-inner">
                    <MapPin className="text-orange-500" size={26} strokeWidth={2.5} />
                  </div>
                  <p className="text-slate-600 font-bold text-[15px] leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    D.No.4/565, Kovil Thottam, Veerapandi Privu,<br/>
                    Veerapandi, Tirupur – 641605
                  </p>
                </div>
                
                {/* Framed Map with exact coordinates */}
                <div className="w-full h-48 rounded-[32px] overflow-hidden bg-slate-100 shadow-inner border-[6px] border-slate-100 relative group cursor-pointer">
                  <iframe
                    src="https://maps.google.com/maps?q=11°03'53.4%22N+77°20'32.4%22E&z=15&output=embed"
                    className="w-full h-full border-0 absolute inset-0 rounded-[26px]"
                    loading="lazy"
                  />
                  {/* Subtle overlay that disappears on hover */}
                  <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none rounded-[26px]" />
                </div>
              </div>

            </motion.div>
            
          </div>
        </Container>
      </section>
    </>
  );
}