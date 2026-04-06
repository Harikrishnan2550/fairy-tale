"use client";

import Link from "next/link";
import { X, Phone, MapPin, Home, Tent, Coffee, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// PREMIUM UPGRADE: Added vibrant background colors and glowing shadows to each icon
const menuItems = [
  { name: "Home",        href: "/",            icon: Home,          bgClass: "bg-blue-500", shadowClass: "shadow-blue-500/40" },
  { name: "Play Center", href: "/play-center", icon: Tent,          bgClass: "bg-pink-500", shadowClass: "shadow-pink-500/40" },
  { name: "Cafe",        href: "/cafe",        icon: Coffee,        bgClass: "bg-amber-500", shadowClass: "shadow-amber-500/40" },
  { name: "Contact",     href: "/contact",     icon: MessageSquare, bgClass: "bg-purple-500", shadowClass: "shadow-purple-500/40" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 28 } as any }, // FIXED HERE
};

export default function MobileMenu({ open, setOpen }: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@800;900&family=Nunito:wght@700;800&display=swap');

        .mobile-menu-drawer {
          background: linear-gradient(160deg, #FFB347 0%, #FF8C42 45%, #FF6B35 100%);
        }

        .menu-wordmark {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          font-size: 22px;
          color: white;
          letter-spacing: -1px;
          line-height: 1;
        }

        .menu-nav-link {
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          font-size: 26px;
          color: white;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 11px 14px;
          border-radius: 18px;
          transition: background 0.2s ease;
          text-decoration: none;
        }

        .menu-nav-link:hover,
        .menu-nav-link:active {
          background: rgba(255,255,255,0.18);
        }

        /* Removed hardcoded background so dynamic Tailwind classes can take over */
        .menu-nav-emoji {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          border: 1.5px solid rgba(255,255,255,0.4);
        }

        .menu-divider {
          height: 1px;
          background: rgba(255,255,255,0.15);
          margin: 2px 14px;
        }

        .call-btn {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 15px;
          background: white;
          color: #FF6B35;
          border-radius: 999px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          box-shadow: 0 12px 32px -8px rgba(0,0,0,0.2);
          text-decoration: none;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: background 0.2s;
          text-decoration: none;
        }

        .social-btn:hover { background: rgba(255,255,255,0.28); }

        .location-badge {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 12px;
          color: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .bg-watermark {
          font-family: 'Baloo 2', cursive;
          font-weight: 900;
          font-size: 88px;
          color: rgba(255,255,255,0.06);
          line-height: 1;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: -4px;
          position: absolute;
          bottom: 72px;
          left: 50%;
          transform: translateX(-50%);
        }

        .close-btn {
          background: rgba(255,255,255,0.2);
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 12px;
          padding: 8px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[110]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 200 } as any} // FIXED HERE
              className="mobile-menu-drawer fixed top-3 right-3 bottom-3 w-[300px] z-[120] rounded-[28px] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white pointer-events-none"
                  style={{ width: 7, height: 7, left: `${14 + i * 16}%`, top: "72%" }}
                  animate={{ opacity: [0, 0.5, 0], y: [-10, -60], scale: [0.5, 1, 0.3] }}
                  transition={{ duration: 3.5, delay: i * 0.55, repeat: Infinity, repeatDelay: 1.2 }}
                />
              ))}

              {/* Watermark */}
              <div className="bg-watermark">FAIRY</div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-6 pb-2 relative z-10">
                <div className="menu-wordmark">
                  Fairy Tales<span style={{ color: "rgba(255,255,255,0.4)" }}>✨</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setOpen(false)}
                  className="close-btn"
                >
                  <X size={20} strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Nav */}
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col px-3 mt-3 flex-grow relative z-10"
              >
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link href={item.href} onClick={() => setOpen(false)} className="menu-nav-link group">
                        <span className={`menu-nav-emoji ${item.bgClass} shadow-lg ${item.shadowClass} group-hover:scale-105 group-active:scale-95 transition-transform`}>
                          <Icon size={24} strokeWidth={2.5} />
                        </span>
                        {item.name}
                      </Link>
                      <div className="menu-divider" />
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="relative z-10 px-5 pb-6 pt-4 flex flex-col gap-4"
              >
                <motion.a
                  href="tel:+919043937771"
                  className="call-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Phone size={18} strokeWidth={3} />
                  </motion.div>
                  +91 90439 37771
                </motion.a>

                <div className="flex items-center justify-between px-1">
                  <div className="flex gap-2">
                    <motion.a href="#" className="social-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}>
                      <InstagramIcon />
                    </motion.a>
                    <motion.a href="#" className="social-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}>
                      <FacebookIcon />
                    </motion.a>
                  </div>
                  <div className="location-badge">
                    <MapPin size={13} />
                    Veerapandi, Tirupur
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}