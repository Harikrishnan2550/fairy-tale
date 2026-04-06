"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Home, Tent, Coffee, MessageSquare } from "lucide-react";

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as any } // FIXED HERE
};

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800;900&family=Nunito:wght@600;700;800&display=swap');

        .footer-bg {
          /* A very dark, warm espresso brown/grey that perfectly complements the orange branding */
          background-color: #241a15; 
          position: relative;
          overflow: hidden;
        }

        .footer-heading {
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
        }

        .footer-text {
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
        }

        /* Subtle Pattern */
        .footer-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 2px);
          background-size: 30px 30px;
          pointer-events: none;
        }
      `}</style>

      <footer className="footer-bg text-white pt-20 pb-8">
        
        <div className="footer-pattern z-0" />

        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#FF8C42]/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <Container className="relative z-10">
          
          {/* Main content in a subtle frosted glass card */}
          <div className="bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 px-6 py-10 md:p-8 lg:p-12 shadow-2xl mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
              
              {/* LOGO & ABOUT */}
              <motion.div 
                variants={footerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-start text-left"
              >
                <div className="bg-white/10 w-max p-4 rounded-[24px] mb-4 shadow-inner backdrop-blur-sm border border-white/10 group hover:bg-white/15 transition-colors cursor-pointer flex flex-col items-start mx-0">
                  <Image
                    src="/images/logo.png"
                    alt="Fairy Tales"
                    width={120}
                    height={45}
                    className="object-contain group-hover:scale-105 transition-transform duration-500 mb-2"
                  />
                  {/* Outlet name "Fairy Tales" added below the script 'F' logo */}
                  <h3 className="text-white font-extrabold text-xl tracking-wide group-hover:scale-105 transition-transform duration-500" style={{ fontFamily: "'Baloo 2', cursive" }}>Fairy Tales</h3>
                </div>

                <p className="footer-text text-slate-300 text-[15px] font-bold leading-relaxed lg:pr-4">
                  A fun-filled indoor play center and cafe where kids experience boundless joy and parents can truly relax.
                </p>
              </motion.div>

              {/* QUICK LINKS */}
              <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-start"
              >
                <h3 className="footer-heading text-left">Quick Links</h3>

                <div className="flex flex-col items-start gap-4 footer-text text-slate-300 font-bold text-[15px] w-full">
                  {[
                    { name: "Home", path: "/", icon: Home },
                    { name: "Play Center", path: "/play-center", icon: Tent },
                    { name: "Cafe", path: "/cafe", icon: Coffee },
                    { name: "Contact", path: "/contact", icon: MessageSquare }
                  ].map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Link 
                        key={index}
                        href={link.path} 
                        className="flex items-center gap-4 group hover:text-[#FF8C42] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF8C42]/20 group-hover:border-[#FF8C42]/30 transition-all">
                          <Icon size={15} className="text-slate-400 group-hover:text-[#FF8C42] transition-colors" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>

              {/* CONTACT */}
              <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-start"
              >
                <h3 className="footer-heading text-left">Contact</h3>

                <div className="flex flex-col items-start gap-6 footer-text text-slate-300 font-bold text-[15px] w-full">
                  <div className="flex items-center gap-4 group cursor-pointer w-full">
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" } as any} // FIXED HERE
                      className="w-12 h-12 rounded-[16px] bg-[#FF8C42] flex items-center justify-center flex-shrink-0 text-white shadow-[0_8px_20px_-6px_rgba(255,140,66,0.6)] group-hover:scale-110 group-hover:rotate-6 transition-all border border-white/20"
                    >
                      <Phone size={20} strokeWidth={2.5} />
                    </motion.div>
                    <a href="tel:9500099749" className="group-hover:text-[#FF8C42] transition-colors tracking-wide truncate">+91 95000 99749</a>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer w-full">
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" } as any} // FIXED HERE
                      className="w-12 h-12 rounded-[16px] bg-[#FF8C42] flex items-center justify-center flex-shrink-0 text-white shadow-[0_8px_20px_-6px_rgba(255,140,66,0.6)] group-hover:scale-110 group-hover:-rotate-6 transition-all border border-white/20"
                    >
                      <Mail size={20} strokeWidth={2.5} />
                    </motion.div>
                    <a href="mailto:fairytalesvpn3@gmail.com" className="group-hover:text-[#FF8C42] transition-colors truncate">fairytalesvpn3@gmail.com</a>
                  </div>
                </div>
              </motion.div>

              {/* ADDRESS */}
              <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-start"
              >
                <h3 className="footer-heading text-left">Location</h3>

                <div className="flex items-start gap-4 footer-text text-slate-300 font-bold text-[15px] group cursor-default w-full">
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" } as any} // FIXED HERE
                    className="w-12 h-12 mt-1 rounded-[16px] bg-[#FF8C42] flex items-center justify-center flex-shrink-0 text-white shadow-[0_8px_20px_-6px_rgba(255,140,66,0.6)] group-hover:scale-110 transition-all border border-white/20"
                  >
                    <MapPin size={20} strokeWidth={2.5} />
                  </motion.div>
                  <p className="leading-relaxed pt-1 text-left">
                    D.No.4/565, Kovil Thottam,<br />
                    Veerapandi Privu, Veerapandi,<br />
                    Tirupur – 641605
                  </p>
                </div>
              </motion.div>
              
            </div>
          </div>

          {/* BOTTOM BAR */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[13px] footer-text font-extrabold px-4 text-center"
          >
            <p>
              © {new Date().getFullYear()} Fairy Tales Play Center. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
             
              <p>
                Developed by{" "}
                <a 
                  href="https://winshineinfotech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#FF8C42] hover:text-white transition-colors duration-300"
                >
                  Winshine Infotech
                </a>
              </p>
            </div>
          </motion.div>
          
        </Container>
      </footer>
    </>
  );
}