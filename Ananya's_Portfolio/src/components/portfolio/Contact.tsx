import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Check } from "lucide-react";
import { z } from "zod";
import { Section, SectionHeader } from "./Section";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3500);
    }, 900);
  }

  const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "ananyakhare555@gmail.com",
    href: "mailto:ananyakhare555@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6392950029",
    href: "tel:+916392950029",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/ananya-khare-b59785315",
    href: "https://linkedin.com/in/ananya-khare-b59785315",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Ananya-Khare555",
    href: "https://github.com/Ananya-Khare555",
  },
];

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow={
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,1)]" />
                <span className="text-violet-200">Get in touch</span>
              </div>
            }
        title={<>Let's build something <span className="text-gradient">remarkable</span> together.</>}
        description="Open to frontend, full stack and React developer opportunities. I usually respond within a day."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
                <c.icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-sm text-foreground">{c.value}</div>
              </div>
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Your name"
              error={errors.name}
              input={
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="Jane Doe"
                  maxLength={100}
                />
              }
            />
            <Field
              label="Email"
              error={errors.email}
              input={
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="jane@company.com"
                  maxLength={255}
                />
              }
            />
          </div>
          <div className="mt-4">
            <Field
              label="Message"
              error={errors.message}
              input={
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  maxLength={1000}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="Tell me about the role or project…"
                />
              }
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-[1.01] disabled:opacity-70"
          >
            {sent ? (
              <>
                <Check size={16} /> Message sent
              </>
            ) : loading ? (
              "Sending…"
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {input}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
