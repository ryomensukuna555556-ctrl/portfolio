// page.tsx
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

function Github({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.15c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   DATA
---------------------------------------------------------------- */

const techStack = ["Next.js", "React", "Node.js", "JavaScript", "Tailwind CSS"];

const projects = [
  {
    title: "SaaS Admin Analytics Dashboard",
    description: "A high-performance SaaS Admin Analytics Dashboard built with a flat Next.js and React architecture. Features a responsive vertical navigation panel, reusable stat-tracking widgets with trend indicators, a data transaction table, and a native client-side global Dark/Light mode theme toggle.", // TODO: PLACE YOUR PROJECT 350-CHAR DESCRIPTION TEXT HERE
    screenshot1: {
      label: "Main Overview (Dark Mode)",
      src: "/dashboarddark.png", // TODO: PASTE PATH FOR SCREENSHOT 1 HERE
    },
    screenshot2: {
      label: "Clean Interface Variant (Light Mode)",
      src: "/dashboardlight.png", // TODO: PASTE PATH FOR SCREENSHOT 2 HERE
    },
    liveLabel: "Live Vercel Demo",
    liveUrl: "https://saas-analytics-dashboard-alpha-seven.vercel.app/", // TODO: PASTE LIVE DEMO URL HERE
    githubUrl: "https://github.com/ryomensukuna555556-ctrl/saas-analytics-dashboard", // TODO: PASTE GITHUB REPOSITORY URL HERE
  },
  {
    title: "CartCraft Premium Storefront",
    description: "A premium, full-stack E-Commerce storefront application engineered with a clean flat file architecture configuration. Powered by a high-performance Node.js backend server infrastructure deployed live on the Render cloud ecosystem, this platform delivers sub-second page loads, near-zero framework bloat, and ultra-fluid user interface micro-interactions. Features a fully custom dark aesthetic design layout, an interactive sliding checkout shopping bag drawer handling active item quantities and real-time subtotal tracking arrays, dynamic location-based shipping calculation modules, and high-fidelity product imagery grids optimized across mobile, tablet, and desktop viewports.", 
    screenshot1: {
      label: "Home Page",
      src: "/homepage.png", // TODO: PASTE PATH FOR SCREENSHOT 1 HERE
    },
    screenshot2: {
      label: "Shop",
      src: "/shop.png", // TODO: PASTE PATH FOR SCREENSHOT 2 HERE
    },
    liveLabel: "Live Render Deployment",
    liveUrl: "cartcraftflat.onrender.com", // TODO: PASTE LIVE DEMO URL HERE
    githubUrl: "https://github.com/ryomensukuna555556-ctrl/cartcraftflat", // TODO: PASTE GITHUB REPOSITORY URL HERE
  },
];

type Project = (typeof projects)[number];

/* ---------------------------------------------------------------
   PROJECT CARD (interactive dual-image showcase)
---------------------------------------------------------------- */

function ProjectCard({ project }: { project: Project }) {
  const [active, setActive] = useState<1 | 2>(1);
  const current = active === 1 ? project.screenshot1 : project.screenshot2;

  return (
    <article className="bg-card border-theme flex flex-col overflow-hidden rounded-2xl border shadow-xl">
      {/* Dual-image panel */}
      <div className="bg-soft relative aspect-16/10 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src} // TODO: PASTE PATH FOR SCREENSHOT 1 / 2 HERE (edit in the projects data above)
          alt={`${project.title} - ${current.label}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {current.label}
        </span>
      </div>

      {/* Image switcher */}
      <div className="border-theme flex gap-2 border-b p-3">
        {[
          { id: 1 as const, label: project.screenshot1.label },
          { id: 2 as const, label: project.screenshot2.label },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            aria-pressed={active === tab.id}
            className={`flex-1 rounded-lg px-2 py-2 text-xs font-medium sm:text-sm ${
              active === tab.id ? "btn-primary" : "btn-outline"
            }`}
          >
            {tab.id === 1 ? "View 1" : "View 2"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
        <p className="text-muted flex-1 text-sm leading-relaxed sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={project.liveUrl} // TODO: PASTE LIVE DEMO URL HERE
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
          >
            <ExternalLink size={16} />
            {project.liveLabel}
          </a>
          <a
            href={project.githubUrl} // TODO: PASTE GITHUB REPOSITORY URL HERE
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
          >
            <Github size={16} />
            GitHub Repository
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------
   PAGE
---------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* ---------- HERO ---------- */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center py-24 text-center">
        <span className="bg-soft border-theme text-muted mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium sm:text-sm">
          <Sparkles size={14} className="text-accent" />
          Available for freelance projects
        </span>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
          <span className="gradient-text">Sarthak</span>
          <span className="text-muted mx-2 font-light">|</span>
          <span className="block sm:inline">Full Stack Web Developer</span>
        </h1>

        <p className="text-muted mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          I build fast, scalable and beautifully designed web applications with
          Next.js, React and Node.js, from sleek dashboards to conversion-focused
          e-commerce stores.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold shadow-lg sm:w-auto"
          >
            View My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="#collaborate"
            className="btn-outline inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold sm:w-auto"
          >
            Hire Me on Fiverr
          </a>
        </div>
      </section>

      {/* ---------- TECH STACK ---------- */}
      <section className="py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Core Tech Stack</h2>
          <p className="text-muted mt-3">Tools I use to ship production-ready products.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="bg-card border-theme flex flex-col items-center justify-center gap-3 rounded-2xl border px-4 py-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl"
            >
              <Layers size={26} className="text-accent" />
              <span className="text-sm font-semibold sm:text-base">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="scroll-mt-20 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="text-muted mt-3">
            Switch between views to explore each interface.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* ---------- FIVERR-SAFE FOOTER BANNER ---------- */}
      <section id="collaborate" className="scroll-mt-20 py-16">
        <div className="bg-card border-theme rounded-3xl border px-6 py-14 text-center shadow-xl sm:px-12">
          <h2 className="text-2xl font-bold sm:text-4xl">
            Looking to collaborate? Let&apos;s discuss your project on Fiverr!
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-xl">
            Secure payments, clear milestones and fast delivery, all handled
            through Fiverr.
          </p>
          <a
            href="#" // TODO: PASTE YOUR FIVERR PROFILE LINK HERE
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold shadow-lg"
          >
            View My Fiverr Profile
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="text-muted border-theme border-t py-8 text-center text-sm">
        © {new Date().getFullYear()} Sarthak. All rights reserved.
      </footer>
    </main>
  );
}