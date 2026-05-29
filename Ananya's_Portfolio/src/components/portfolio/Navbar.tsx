import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) =>
        document.querySelector(l.href)
      );

      const y = window.scrollY + 140;

      for (const s of sections) {
        if (s && s instanceof HTMLElement) {
          if (
            s.offsetTop <= y &&
            s.offsetTop + s.offsetHeight > y
          ) {
            setActive(s.id);
          }
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
  className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4 transition-all ${
    scrolled
      ? "glass-strong shadow-2xl shadow-black/30 border border-white/10"
      : ""
  }`}
          style={{ width: "calc(100% - 2rem)" }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 font-display text-lg font-bold"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
  AK
</span>

            <span className="hidden sm:inline text-white">
              Ananya Khare
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-2 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active === l.href.slice(1)
                      ? "text-white"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {l.label}

                  {active === l.href.slice(1) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-xl bg-white/10 backdrop-blur-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-105 md:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 transition-colors hover:bg-white/10 md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mt-2 rounded-2xl border border-white/10 glass-strong p-3 shadow-xl md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-all hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>
    </>
  );
}