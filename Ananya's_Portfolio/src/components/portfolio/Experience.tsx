import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
{
company: "PPAP Automotive Limited",
role: "Graduate Engineer Trainee",
period: "2024 — Present",
highlights: [
"Built KPI dashboards with React.js featuring interactive, responsive UI for real-time visualization of manufacturing metrics.",
"Designed and implemented RESTful APIs powering the Digital Monitoring System used across plant floors.",
"Engineered workflow automation modules and role-based access control for secure, multi-department usage.",
"Crafted structured, reusable frontend components and modern dashboard layouts focused on clarity and usability.",
],
tags: ["React.js", "REST APIs", "Dashboards", "RBAC", "HTML5/CSS3"],
},
];

export function Experience() {
return ( <Section id="experience">
<SectionHeader
eyebrow={ <div className="flex items-center gap-2"> <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,1)]" /> <span className="text-violet-200">Experience</span> </div>
}
title={
<>
Where I've built and{" "} <span className="text-gradient">
shipped real products </span>
.
</>
}
/>


  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent md:left-1/2" />

    {items.map((it, i) => (
      <motion.div
        key={it.company}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="relative mb-10 pl-10 md:grid md:grid-cols-2 md:gap-14 md:pl-0"
      >
        {/* LEFT SIDE — EXPERIENCE CARD */}
        <div className="relative w-full md:pr-10">
          <div className="glass w-full rounded-3xl border border-white/10 p-4 sm:p-6 transition-all duration-300 hover:border-primary/20">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-display text-lg sm:text-xl font-semibold break-words">
                {it.company}
              </h3>

              <span className="text-xs text-muted-foreground">
                {it.period}
              </span>
            </div>

            <div className="mt-1 text-sm font-medium text-primary">
              {it.role}
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {it.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {it.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — DASHBOARD PREVIEW */}
        <div className="mt-6 flex items-center justify-center md:mt-0 md:justify-start md:pl-10">
          <div className="glass w-full max-w-md rounded-3xl border border-white/10 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">
                  Production Dashboard
                </div>

                <div className="text-xl font-bold">
                  KPI Monitoring
                </div>
              </div>

              <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                Live
              </div>
            </div>

            <div className="space-y-4">
              {[70, 85, 60, 95].map((v, i) => (
                <div key={i}>
                  <div className="mb-1 flex justify-between text-xs text-white/60">
                    <span>System {i + 1}</span>
                    <span>{v}%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                      style={{ width: `${v}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["98%", "Efficiency"],
                ["24/7", "Monitoring"],
                ["4+", "Departments"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-white/5 bg-white/5 p-3 text-center"
                >
                  <div className="text-lg font-bold text-white">
                    {v}
                  </div>

                  <div className="text-[10px] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Dot */}
        <div className="absolute left-0 top-6 md:left-1/2 md:-translate-x-1/2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 text-primary-foreground shadow-lg shadow-primary/30">
            <Briefcase size={14} />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</Section>

);
}
