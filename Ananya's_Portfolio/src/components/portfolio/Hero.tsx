import { motion } from "framer-motion";
import {
  Download,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden pt-28"
>
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div
          className="absolute top-1/3 right-1/4 h-[380px] w-[380px] rounded-full bg-accent/25 blur-3xl animate-blob"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-pink-500/15 blur-3xl animate-blob"
          style={{ animationDelay: "-12s" }}
        />
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      </div>

      {/* MAIN GRID */}
      <div className="mx-auto grid w-full max-w-7xl items-start gap-20 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

        {/* LEFT SIDE */}
        <div className="text-left">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles size={14} className="text-primary" />
            Available for Frontend / Full Stack roles
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient whitespace-nowrap">
              Ananya Khare
            </span>
            <br />
            <span className="text-foreground/85">
              I craft beautiful
            </span>
            <br />
            <span className="text-gradient">
              web experiences.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            <span className="font-medium text-foreground">
              HTML Developer · Frontend Developer · Full Stack Developer
            </span>{" "}
            — I build modern, responsive and pixel-perfect interfaces using
            React, Tailwind CSS, HTML5, CSS3 and JavaScript while developing
            scalable production-grade web applications.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.05]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Ananya-Khare-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 flex items-center gap-4 text-muted-foreground"
          >
            <a
              href="https://github.com/Ananya-Khare555"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/5 border border-white/10 hover:-translate-y-1 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ananya-khare-b59785315"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/5 border border-white/10 hover:-translate-y-1 transition"
            >
              <FaLinkedinIn />
            </a>

            <span className="text-sm text-muted-foreground">
              Based in India · Open to remote
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-20 grid grid-cols-2 gap-5 sm:grid-cols-4"
          >
            {[
              { k: "20+", v: "Projects shipped" },
              { k: "15+", v: "Technologies" },
              { k: "81.2%", v: "B.Tech CGPA" },
              { k: "100%", v: "Responsive UIs" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <div className="font-display text-3xl font-bold text-gradient">
                  {s.k}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.3 }}
  className="hidden lg:flex justify-end -mt-8"
>
  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-cyan-400/20 blur-3xl scale-125 rounded-full" />

    {/* Projects Badge */}
    <div className="absolute -left-10 top-12 z-20 glass rounded-2xl border border-white/10 px-5 py-4 backdrop-blur-xl">
      <div className="text-3xl font-bold text-gradient">20+</div>
      <div className="text-sm text-muted-foreground">
        Projects
      </div>
    </div>

    {/* Technologies Badge */}
    <div className="absolute -right-10 bottom-20 z-20 glass rounded-2xl border border-white/10 px-5 py-4 backdrop-blur-xl">
      <div className="text-3xl font-bold text-gradient">15+</div>
      <div className="text-sm text-muted-foreground">
        Technologies
      </div>
    </div>

    {/* Main Card */}
    <div className="relative glass rounded-[32px] border border-white/10 p-4 shadow-2xl">

      <div className="h-[450px] w-[320px] overflow-hidden rounded-[24px]">
        <img
          src="/Ananya's_Image.jpg"
          alt="Ananya Khare"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-lg">
        Frontend Developer
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}