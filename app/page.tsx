// app/page.tsx
"use client";

import React from "react";
import { Mail, Phone, Github, Linkedin, Globe, FileDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-black/20 px-2.5 py-1 text-xs font-medium">
    {children}
  </span>
);

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-10 md:py-14 border-t border-black/10">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
      {children}
    </div>
  </section>
);

export default function Home() {
  const links = {
    email: "Spandanssc@gmail.com",
    phone: "+91-8794141822",
    linkedin: "https://www.linkedin.com/in/spandan-sen-choudhury-533807182/",
    github: "https://github.com/Spandan833",
    blog: "https://spandanblog.vercel.app",
    resume: "/Spandan_SenChoudhury.pdf", // place this file in /public
  };

  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  } as const;

  return (
    <div className="bg-white text-black antialiased">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <nav className="max-w-5xl mx-auto px-4 py-3 border-b border-black/10">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">Spandan Sen Choudhury</a>
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#experience" className="hover:underline">Experience</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#education" className="hover:underline">Education</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="border-b border-black/10">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-12">
          <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Spandan Sen Choudhury</h1>
                <p className="mt-2 text-sm md:text-base text-black/70">Software Engineer — RF Test & Measurement • Backend (Go/.NET)</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-black/60"><MapPin className="h-4 w-4" aria-hidden /> Chennai, India</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 rounded-full border border-black px-3 py-1.5 text-sm font-medium" aria-label="Email">
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a href={links.resume} className="inline-flex items-center gap-2 rounded-full border border-black px-3 py-1.5 text-sm font-medium" aria-label="Download resume">
                  <FileDown className="h-4 w-4" /> Resume
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black px-3 py-1.5 text-sm font-medium" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black px-3 py-1.5 text-sm font-medium" aria-label="GitHub">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={links.blog} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black px-3 py-1.5 text-sm font-medium" aria-label="Blog">
                  <Globe className="h-4 w-4" /> Blog
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="experience" title="Experience">
        <div className="space-y-10">
          <motion.article initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport} className="grid md:grid-cols-[1fr_auto] gap-3">
            <div>
              <h3 className="text-lg font-semibold">Software Engineer · Viasat</h3>
              <p className="text-sm text-black/60">Chennai, India · Jul 2022 – Present</p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>Designed and implemented .NET drivers for Network Analyzers, Spectrum Analyzers, Thermal Controllers using OOP best practices.</li>
                <li>Automated Noise Figure, Adjacent Channel Leakage Ratio, TOI, Insertion Loss and Spectral Emission Mask  measurements across Test stations used in Production Test Engineering.</li>
                <li>Built Windows Installer (MSI) packages and managed shared components in the GAC for version-safe deployment across lab PCs.</li>
                <li>Developed ASP.NET MVC apps with MSSQL backend powered by Entity Framework.</li>
                <li>Wrote unit and integration tests to ensure code quality and reliability.</li>
                <li>Building a CI/CD pipeline with GitHub Actions for seamless build and release.</li>
              </ul>
            </div>
            <div className="md:text-right">
              <div className="flex md:flex-col gap-2 md:items-end text-xs">
                <Tag>.NET</Tag>
                <Tag>VISA</Tag>
                <Tag>RF T&M</Tag>
              </div>
            </div>
          </motion.article>

          <motion.article initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport} className="grid md:grid-cols-[1fr_auto] gap-3">
            <div>
              <h3 className="text-lg font-semibold">Software Engineering Intern · Viasat</h3>
              <p className="text-sm text-black/60">Chennai, India · Jun 2021 – Aug 2021</p>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>Implemented MQTT over QUIC for enhanced communication reliability.</li>
                <li>Built a real-time chat application with configurable QoS using MQTT.</li>
              </ul>
            </div>
            <div className="md:text-right">
              <div className="flex md:flex-col gap-2 md:items-end text-xs">
                <Tag>MQTT</Tag>
                <Tag>QUIC</Tag>
                <Tag>Realtime</Tag>
              </div>
            </div>
          </motion.article>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport} className="grid md:grid-cols-2 gap-6">
          <article className="border border-black/10 rounded-2xl p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">ReelGo</h3>
              <div className="flex gap-2 text-xs">
                <Tag>Go</Tag>
                <Tag>Fiber</Tag>
                <Tag>Postgres</Tag>
                <Tag>Docker</Tag>
              </div>
            </div>
            <p className="text-sm text-black/60 mt-1">Dec 2024 – Present</p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>Engineered backend services in Go with the Fiber web framework, designing RESTful APIs.</li>
              <li>Implemented stateless auth with JWTs and added Google OAuth2 for streamlined onboarding.</li>
              <li>Integrated PostgreSQL using pgx/pgxscan for efficient DB access.</li>
              <li>Containerized services with Docker and orchestrated multi-service envs via docker-compose; automated builds/tests/deploys with a Makefile.</li>
            </ul>
          </article>
        </motion.div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2">Languages</h4>
            <div className="flex flex-wrap gap-2">{["C#", "Go", "SQL", "Java", "SCPI"].map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Databases</h4>
            <div className="flex flex-wrap gap-2">{["Postgres", "MSSQL"].map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Frameworks</h4>
            <div className="flex flex-wrap gap-2">{["Entity Framework", "Fiber"].map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">{["Visual Studio", "VS Code", "Git", "Sandcastle HTML", "NI TestStand"].map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Protocols & I/O</h4>
            <div className="flex flex-wrap gap-2">{["MQTT", "QUIC", "Modbus", "RS-232", "HTTP", "TCP"].map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>
        </motion.div>
      </Section>

      <Section id="education" title="Education">
        <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport} className="grid md:grid-cols-[1fr_auto] gap-3">
          <div>
            <h3 className="text-lg font-semibold">Jadavpur University · Kolkata, India</h3>
            <p className="text-sm text-black/60">BE in Electrical Engineering · Aug 2018 – Jun 2022</p>
            <p className="text-sm mt-2">CGPA: 8.95</p>
          </div>
          <div className="md:text-right">
            <div className="flex md:flex-col gap-2 md:items-end text-xs">
              <Tag>Electrical Engineering</Tag>
              <Tag>Foundations</Tag>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section id="contact" title="Contact">
        <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport} className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <a href={`mailto:${links.email}`} className="flex items-center gap-2 hover:underline" aria-label="Email">
              <Mail className="h-4 w-4" /> {links.email}
            </a>
            <a href={`tel:${links.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:underline" aria-label="Phone">
              <Phone className="h-4 w-4" /> {links.phone}
            </a>
          </div>
          <div className="space-y-2">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline" aria-label="GitHub">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={links.blog} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline" aria-label="Blog">
              <Globe className="h-4 w-4" /> Blog
            </a>
          </div>
        </motion.div>
      </Section>

      <footer className="border-t border-black/10">
        <div className="max-w-5xl mx-auto px-4 py-8 text-xs text-black/60">
          © {new Date().getFullYear()} Spandan Sen Choudhury
        </div>
      </footer>
    </div>
  );
}