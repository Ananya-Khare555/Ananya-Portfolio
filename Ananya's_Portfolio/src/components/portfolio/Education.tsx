import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const education = [
  {
    school: "Dr. A.P.J Abdul Kalam Technical University",
    degree: "B.Tech in Computer Science",
    period: "2022 — 2026",
    detail: "Percentage: 81.2%",
  },
  {
    school: "Lucknow Public Schools & Colleges",
    degree: "Class XII (PCM)",
    period: "2021 — 2022",
    detail: "Percentage: 72.6%",
  },
  {
    school: "Secondary Education (Class X)",
    degree: "Class X",
    period: "2019 — 2020",
    detail: "Percentage: 83.1%",
  },
];

const certs = [
  { icon: Award, title: "MongoDB Basics Certification", org: "MongoDB University" },
  { icon: Trophy, title: "Pitch Cypher — Second Runner Up", org: "Inter-college Pitch Competition" },
  { icon: Award, title: "Postman API Fundamentals Certification", org: "Postman" },
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeader
        eyebrow={
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,1)]" />
                <span className="text-violet-200">Education & wins</span>
              </div>
            }
        title={<>Background, <span className="text-gradient">certifications & achievements</span>.</>}
      />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start gap-4 rounded-2xl glass p-5 transition-all hover:border-white/20"
            >
              <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
                <GraduationCap size={18} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.school}</h3>
                  <span className="text-xs text-muted-foreground">{e.period}</span>
                </div>
                <div className="mt-1 text-sm text-primary">{e.degree}</div>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Certifications & Achievements
          </h3>
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl glass p-5 transition-all hover:border-white/20"
            >
              <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-400/30 to-pink-500/30">
                <c.icon size={18} />
              </div>
              <div>
                <h4 className="font-medium">{c.title}</h4>
                <p className="text-sm text-muted-foreground">{c.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
