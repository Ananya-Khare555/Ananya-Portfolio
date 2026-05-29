import { motion } from "framer-motion";
import {  ExternalLink, Mail } from "lucide-react";
import { Section, SectionHeader } from "./Section";

type Project = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  gradient: string;
  mock: "imageforge" | "chat" | "inventra";
  codeLink: string;
  liveLink?: string; // optional
};

const projects: Project[] = [
  {
    name: "ImageForge",
    tagline: "AI text-to-image platform",
    description:
      "Full stack AI image generation product with a modern responsive UI, secure auth, Razorpay payments and a personal user dashboard.",
    features: [
      "AI text-to-image generation",
      "Razorpay payment integration",
      "Authentication & user dashboard",
      "Responsive HTML5/CSS3 UI",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind"],
    gradient: "from-fuchsia-500/40 via-purple-500/30 to-indigo-500/30",
    mock: "imageforge",

    codeLink: "https://github.com/yourusername/imageforge",
    liveLink: "https://imageforge-5tchcy2oi-ananya-khares-projects.vercel.app/",
  },

  {
    name: "AI Powered Chat Application",
    tagline: "Realtime AI chat with persistent conversations",
    description:
      "A polished chat interface with GitHub OAuth, persistent history and a clean, responsive frontend backed by REST APIs.",
    features: [
      "Real-time AI chat UI",
      "GitHub OAuth authentication",
      "Persistent conversation history",
      "Mobile-first responsive design",
    ],
    stack: ["React.js", "Node.js", "Express", "PostgreSQL"],
    gradient: "from-emerald-400/40 via-cyan-400/30 to-sky-500/30",
    mock: "chat",

    codeLink: "https://github.com/Ananya-Khare555/AI-CHAT-APP",
    liveLink: "https://ai-chat-app-alpha-inky.vercel.app/",
  },

  {
    name: "Inventra",
    tagline: "Inventory & analytics dashboard",
    description:
      "Admin-grade inventory dashboard with charts, JWT auth, dynamic search & filtering, and a fully responsive component-driven UI.",
    features: [
      "Inventory & analytics charts",
      "JWT-based authentication",
      "Search, filtering & sorting",
      "Responsive admin UI",
    ],
    stack: ["React.js", "Node.js", "Express", "PostgreSQL"],
    gradient: "from-amber-400/40 via-orange-500/30 to-rose-500/30",
    mock: "inventra",

    codeLink: "https://github.com/Ananya-Khare555/Inventra",
    // no liveLink
  },
];

function Mock({ kind }: { kind: Project["mock"] }) {
  if (kind === "imageforge") {
    return (
      <div className="grid h-full w-full grid-cols-3 gap-2 p-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg bg-white/10 backdrop-blur"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(${(i * 47) % 360} 80% 65% / 0.7), hsl(${(i * 47 + 60) % 360} 80% 55% / 0.7))`,
            }}
          />
        ))}
      </div>
    );
  }
  if (kind === "chat") {
    return (
      <div className="flex h-full w-full flex-col gap-2 p-5">
        <div className="h-2 w-16 rounded-full bg-white/30" />
        <div className="mt-2 self-start rounded-2xl rounded-bl-sm bg-white/15 px-3 py-2 text-[10px] text-white/80">Hey 👋 design me a hero</div>
        <div className="self-end rounded-2xl rounded-br-sm bg-gradient-to-br from-primary to-accent px-3 py-2 text-[10px] text-primary-foreground">Generating layout…</div>
        <div className="self-start rounded-2xl rounded-bl-sm bg-white/15 px-3 py-2 text-[10px] text-white/80">Here's a clean glass UI ✨</div>
        <div className="mt-auto h-7 rounded-full bg-white/10" />
      </div>
    );
  }
  return (
    <div className="grid h-full w-full grid-rows-[auto_1fr] gap-2 p-5">
      <div className="grid grid-cols-3 gap-2">
        {["Stock", "Sales", "Users"].map((k, i) => (
          <div key={k} className="rounded-lg bg-white/10 p-2 text-[9px] text-white/70">
            <div>{k}</div>
            <div className="mt-1 text-sm font-bold text-white">{[1240, 392, 87][i]}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 rounded-lg bg-white/5 p-2">
        {[40, 70, 55, 90, 65, 80, 50, 95, 60].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-primary to-accent"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow={
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,1)]" />
                <span className="text-violet-200">Selected projects</span>
              </div>
            }
        title={<>Real products, <span className="text-gradient">built end-to-end</span>.</>}
        description="A few highlights showcasing frontend craft, responsive design and full stack thinking."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-all hover:-translate-y-1.5 hover:border-white/20"
          >
            <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <Mock kind={p.mock} />
              <div className="absolute left-4 top-4 rounded-full bg-black/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/90 backdrop-blur">
                {p.tagline}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-2 pt-4">
  <a
    href={p.codeLink}
    target="_blank"
    rel="noreferrer"
    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium transition-colors hover:bg-white/10"
  >
    <Mail size={14} /> Code
  </a>

  {p.liveLink ? (
    <a
      href={p.liveLink}
      target="_blank"
      rel="noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2 text-xs font-semibold text-primary-foreground"
    >
      <ExternalLink size={14} /> Live
    </a>
  ) : (
    <button
      disabled
      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-white/40 cursor-not-allowed"
    >
      <ExternalLink size={14} /> Coming Soon
    </button>
  )}
</div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
