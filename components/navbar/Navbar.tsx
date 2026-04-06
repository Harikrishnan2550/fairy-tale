"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu"; 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Play Center", href: "/play-center" },
  { name: "Cafe", href: "/cafe" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* Added 'Emilys Candy' font specifically for the premium logo text */
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800&family=Emilys+Candy&display=swap');

        .navbar-scrolled {
          background: linear-gradient(135deg, rgba(255,179,71,0.88) 0%, rgba(255,107,53,0.88) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px -8px rgba(255,107,53,0.3);
          border-bottom: 1.5px solid rgba(255,255,255,0.25);
        }

        .nav-pill-wrapper {
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 999px;
          padding: 6px;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-link {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.3px;
          position: relative;
          padding: 10px 22px;
          border-radius: 999px;
          color: white;
          transition: color 0.25s ease;
          white-space: nowrap;
          text-decoration: none;
          display: inline-block;
        }

        .nav-link:hover { color: rgba(255,255,255,0.8); }
        .nav-link.active { color: #FF6B35; }

        .book-btn {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          background: white;
          color: #FF6B35;
          border-radius: 999px;
          padding: 12px 26px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 24px -6px rgba(255,107,53,0.45);
          text-decoration: none;
        }

        .mobile-toggle {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 14px;
          padding: 10px 12px;
          color: white;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: flex-start;
          justify-content: center;
        }

        /* Forces hamburger to hide on desktop by overriding the display: flex above */
        @media (min-width: 768px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>

      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 flex items-center ${
          scrolled ? "h-20 navbar-scrolled" : "h-24"
        }`}
      >
        {!scrolled &&
          [...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute rounded-full bg-white"
              style={{
                width: 6,
                height: 6,
                left: `${12 + i * 22}%`,
                top: "65%",
              }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [-10, -50],
                scale: [0.5, 1.1, 0.3],
              }}
              transition={{
                duration: 3,
                delay: i * 0.8,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}

        <Container className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center w-full">
          
          {/* LOGO & BRAND NAME */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 md:gap-3 group">
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                } as any} // FIXED HERE
              >
                <Image
                  src="/images/logo.png"
                  alt="Fairy Tales Logo"
                  width={70}
                  height={70}
                  priority
                  className="h-16 md:h-16 w-auto drop-shadow-lg"
                />
              </motion.div>
              
              {/* EMILYS CANDY FONT + COLORED SHADE EFFECT HERE */}
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white whitespace-nowrap group-hover:scale-[1.03] transition-transform duration-300"
                style={{ 
                  fontFamily: "'Emilys Candy', serif", 
                  fontWeight: 400, 
                  fontSize: "clamp(24px, 4.5vw, 32px)", 
                  letterSpacing: "1px",
                  paddingTop: "6px",
                  // A rich, warm orange/red color shade text-shadow
                  textShadow: "2px 3px 6px rgba(194, 65, 12, 0.6)" 
                }}
              >
                Fairy Tales
              </motion.span>

            </Link>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center justify-center">
            <div className="nav-pill-wrapper">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-md"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        } as any} // FIXED HERE
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CONTACT BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center justify-end">
            <motion.div
              className="hidden md:flex"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="book-btn">
                <Mail size={15} strokeWidth={2.5} />
                Contact
              </Link>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.88 }}
              className="mobile-toggle md:hidden ml-3"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="block h-[2.5px] w-6 bg-white rounded-full" />
              <span className="block h-[2.5px] w-[18px] bg-white rounded-full" />
              <span className="block h-[2.5px] w-6 bg-white rounded-full" />
            </motion.button>
          </div>
        </Container>
      </header>

      {/* Renders the imported MobileMenu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}