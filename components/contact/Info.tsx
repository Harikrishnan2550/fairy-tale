"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

// PREMIUM UPGRADE: Added pastel gradients, solid icon backgrounds, and specific text colors
const contactDetails = [
  {
    title: "Call Us",
    desc: "+91 95000 99749",
    icon: Phone,
    link: "tel:+919500099749",
    cardBg: "bg-gradient-to-br from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-500",
    titleColor: "text-orange-950",
    shadow: "shadow-orange-500/40",
  },
  {
    title: "Email",
    desc: "fairytalesvpn3@gmail.com",
    icon: Mail,
    link: "mailto:fairytalesvpn3@gmail.com",
    cardBg: "bg-gradient-to-br from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    iconBg: "bg-pink-500",
    titleColor: "text-pink-950",
    shadow: "shadow-pink-500/40",
  },
  {
    title: "Location",
    desc: "D.No.4/565, Kovil Thottam, Veerapandi Privu, Tirupur - 641605",
    icon: MapPin,
    // UPDATED: Real Google Maps link pointing to your exact coordinates!
    link: "https://www.google.com/maps/place/11%C2%B003'53.4%22N+77%C2%B020'32.4%22E/",
    cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
    titleColor: "text-blue-950",
    shadow: "shadow-blue-500/40",
    isExternal: true,
  },
];

export default function ContactInfo() {
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

        /* PREMIUM UPGRADE: High-end frosted card style to match the new aesthetic */
        .info-card {
          border-radius: 40px;
          padding: 40px 32px;
          text-align: center;
          box-shadow: 0 20px 50px -15px rgba(0,0,0,0.15);
          cursor: pointer;
          border: 4px solid white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .info-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.25);
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
      `}</style>

      {/* Clean, transparent wrapper */}
      <section className="py-10 lg:py-16 relative z-10">
        <Container>
          
          {/* Top Row: Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 } as any} 
                  viewport={{ once: true }}
                  className="info-card group bg-white/70 backdrop-blur-sm block"
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
                      } as any} 
                      className={`
                        w-20 h-20 mb-8 rounded-[24px] flex items-center justify-center text-white
                        ${item.iconBg} ${item.shadow} shadow-xl 
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/50
                      `}
                    >
                      <Icon size={36} strokeWidth={2.5} />
                    </motion.div>

                    <h3 
                      className={`text-[26px] font-black mb-3 ${item.titleColor}`} 
                      style={{ fontFamily: "'Baloo 2', cursive" }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      className="text-slate-600/90 font-bold text-[16px] leading-snug group-hover:text-[#FF6B35] transition-colors" 
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.a> 
              );
            })}
          </div>

          {/* Bottom Row: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" } as any} 
            className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[6px] border-white p-8 md:p-12 lg:p-16 flex flex-col relative overflow-hidden"
          >
            {/* Decorative inner blob for premium feel */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="text-center mb-10 relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Send a Message ✨
              </h3>
              <p className="text-slate-500 font-bold text-[17px] max-w-xl mx-auto" style={{ fontFamily: "'Nunito', sans-serif" }}>
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            {/* UPDATED: Form wired up to Web3Forms */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 relative z-10">
              
              {/* Spam Protection Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Your Name" className="kids-input" required disabled={isSubmitting} />
                <input type="email" name="email" placeholder="Email Address" className="kids-input" required disabled={isSubmitting} />
              </div>
              <input type="text" name="subject" placeholder="Subject (e.g. Birthday Party Inquiry)" className="kids-input" disabled={isSubmitting} />
              <textarea name="message" placeholder="How can we help you today?" className="kids-input h-40 resize-none" required disabled={isSubmitting}></textarea>
              
              {/* Error Message Display */}
              {errorMessage && (
                <p className="text-red-500 font-bold text-sm px-2 text-center">{errorMessage}</p>
              )}

              {/* Premium Button */}
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`group w-full sm:w-auto sm:self-center px-12 font-black text-[19px] rounded-full py-5 mt-4 transition-all flex items-center justify-center gap-3 border-2 border-white/30 relative overflow-hidden ${
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

          </motion.div>

        </Container>
      </section>
    </>
  );
}