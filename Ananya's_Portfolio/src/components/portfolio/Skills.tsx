import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    title: "Frontend",
    accent: "from-primary/40 to-accent/40",
    items: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
      "Responsive Web Design", "UI/UX Implementation", "Figma to HTML",
      "Flexbox & Grid", "Animations & Transitions",
    ],
  },
  {
    title: "Backend",
    accent: "from-emerald-400/40 to-cyan-400/40",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Firebase"],
  },
  {
    title: "Languages",
    accent: "from-pink-400/40 to-orange-400/40",
    items: ["C / C++", "Java", "Python", "SQL"],
  },
  {
    title: "Tools",
    accent: "from-indigo-400/40 to-purple-400/40",
    items: ["Git", "GitHub", "VS Code", "Eclipse", "PyCharm", "Figma"],
  },
  {
    title: "Core Competencies",
    accent: "from-yellow-400/40 to-rose-400/40",
    items: [
      "Data Structures & Algorithms", "Problem Solving", "Authentication Systems",
      "Dashboard Development", "API Integration", "Modern UI Design", "Agentic AI",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow={
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,1)]" />
                <span className="text-violet-200">Skills & stack</span>
              </div>
            }
        title={<>The tools I use to <span className="text-gradient">ship great products</span>.</>}
        description="A balanced toolkit spanning beautiful frontend interfaces, robust backend APIs, and the fundamentals that make scalable products possible."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-3xl glass p-6"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${g.accent} blur-3xl opacity-50 transition-opacity group-hover:opacity-90`}
            />
            <h3 className="font-display text-xl font-semibold">{g.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
