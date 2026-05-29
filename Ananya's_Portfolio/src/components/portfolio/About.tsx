import { motion } from "framer-motion";
import { Code2, Layout, Server, Users } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const pillars = [
  {
    icon: Layout,
    title: "Pixel-perfect Frontend",
    text: "Translating Figma & UI/UX concepts into production-ready HTML5, CSS3 and React with obsessive attention to spacing, typography, and motion.",
  },
  {
    icon: Code2,
    title: "Modern JavaScript",
    text: "React.js, hooks, component architecture, performance optimization and clean reusable patterns for scalable web applications.",
  },
  {
    icon: Server,
    title: "Backend Integration",
    text: "Node.js, Express, REST APIs, PostgreSQL & MongoDB — connecting beautiful UIs to robust backends and authentication systems.",
  },
  {
    icon: Users,
    title: "User-centric Design",
    text: "Accessible, responsive, mobile-first interfaces that turn complex flows into intuitive, delightful experiences.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeader
            eyebrow={
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,1)]" />
                <span className="text-violet-200">About me</span>
              </div>
            }
            title={
              <>
                Frontend engineer who treats{" "}
                <span className="text-gradient">UI as a craft</span>.
              </>
            }
          />

          <div className="space-y-5 text-muted-foreground sm:text-lg">
            <p>
              I'm a Software Engineer specializing in{" "}
              <span className="text-foreground">
                HTML5, CSS3 and React
              </span>{" "}
              — passionate about building visually appealing interfaces and
              converting design concepts into real, responsive applications.
            </p>

            <p>
              I work across the full stack with{" "}
              <span className="text-foreground">
                Node.js, Express, PostgreSQL and MongoDB
              </span>
              , designing REST APIs and scalable architectures. I love the
              moment when a component clicks into place, animations breathe,
              and the product just feels right on every device.
            </p>

            <p>
              I care deeply about clean code, accessibility, and creating
              modern interactive web experiences that recruiters and users
              notice on first glance.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 text-violet-100">
                <p.icon size={18} />
              </div>

              <h3 className="font-display text-lg font-semibold text-white">
                {p.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}