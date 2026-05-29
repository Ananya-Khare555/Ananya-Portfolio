import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
            AK
          </span>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ananya Khare. All rights reserved.
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Designed in Figma mindset & Built with React + HTML5 + Tailwind CSS
        </p>
        <div className="flex items-center gap-2">
          {[
  {
    href: "https://github.com/Ananya-Khare555",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/ananya-khare-b59785315",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "mailto:ananyakhare555@gmail.com",
    icon: Mail,
    label: "Email",
  },
].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:scale-110 hover:text-foreground"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
