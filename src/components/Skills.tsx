
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Camera,
  ChartNoAxesCombined,
  Clapperboard,
  MousePointer2,
  Palette,
  PenTool,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Video,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    number: "01",
    title: "Graphic Design",
    subtitle: "Visuals that make people look twice.",
    icon: Palette,
    skills: [
      "Brand Identity",
      "Social Media Design",
      "Typography",
      "Creative Layouts",
      "Marketing Creatives",
    ],
    featured: true,
  },
  {
    number: "02",
    title: "Digital Marketing",
    subtitle: "Ideas turned into measurable growth.",
    icon: TrendingUp,
    skills: [
      "Social Media Marketing",
      "Content Strategy",
      "Campaign Planning",
      "Audience Research",
      "Brand Awareness",
    ],
    featured: false,
  },
  {
    number: "03",
    title: "Content Creation",
    subtitle: "Creating content people remember.",
    icon: Clapperboard,
    skills: [
      "Reels & Short Videos",
      "Visual Storytelling",
      "Creative Concepts",
      "Content Planning",
    ],
    featured: false,
  },
  {
    number: "04",
    title: "Performance & Strategy",
    subtitle: "Smarter decisions backed by data.",
    icon: ChartNoAxesCombined,
    skills: [
      "SEO Fundamentals",
      "Campaign Analysis",
      "Engagement Tracking",
      "Marketing Research",
    ],
    featured: false,
  },
];

const creativeTools = [
  "Canva",
  "Photoshop",
  "Illustrator",
  "Figma",
  "Meta Ads",
  "Google Analytics",
  "Google Search Console",
  "CapCut",
];

const principles = [
  {
    number: "01",
    title: "Think visually",
    description:
      "Build a strong visual identity that communicates clearly and feels memorable.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Create with purpose",
    description:
      "Connect every creative decision to the audience, message, and brand.",
    icon: Target,
  },
  {
    number: "03",
    title: "Measure what matters",
    description:
      "Use performance insights to understand what works and improve results.",
    icon: BarChart3,
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".skills-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-eyebrow",
          start: "top 90%",
          once: true,
        },
      });

      gsap.from(".skills-heading-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".skills-intro", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-intro",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".skill-group-card", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-groups",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".skills-tools-heading", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-tools-heading",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".tool-chip", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-tools-list",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".principle-card", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-principles",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".skills-bottom-cta", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-bottom-cta",
          start: "top 90%",
          once: true,
        },
      });

      // Subtle parallax decoration.
      gsap.to(".skills-background-decoration", {
        y: -65,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#F5F1E9] px-5 py-24 text-[#171717] sm:px-8 sm:py-28 lg:px-14 lg:py-36"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="skills-background-decoration pointer-events-none absolute -right-24 top-36 h-80 w-80 rounded-full bg-[#244BFF]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[55%] h-72 w-72 rounded-full bg-[#244BFF]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Top line */}
        <div className="mb-8 h-px w-full bg-black/10" />

        {/* Header */}
        <div className="skills-eyebrow mb-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#244BFF]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50 sm:text-xs">
              02 / What I Do
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-black/35 sm:block">
            Skills & Expertise
          </span>
        </div>

        {/* Main heading */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="skills-heading">
            <div className="overflow-hidden pb-2">
              <h2 className="skills-heading-line text-[clamp(3.8rem,10vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
                Creative
              </h2>
            </div>

            <div className="overflow-hidden pb-2">
              <h2 className="skills-heading-line text-[clamp(3.8rem,10vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
                <span className="font-serif font-normal italic text-[#244BFF]">
                  skills.
                </span>
              </h2>
            </div>
          </div>

          <div className="skills-intro max-w-lg lg:justify-self-end lg:pb-3">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#244BFF]/[0.09] text-[#244BFF]">
              <Sparkles size={21} />
            </div>

            <p className="text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              I combine visual creativity with digital strategy to build
              meaningful brand experiences, engaging content, and memorable
              digital communication.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-medium text-black/45">
              <span className="h-px w-8 bg-[#244BFF]" />
              Design with purpose. Market with intent.
            </div>
          </div>
        </div>

        {/* Skills overview */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-black/10 py-5 sm:mt-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45 sm:text-xs">
            My areas of expertise
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.14em] text-black/45 sm:gap-x-7 sm:text-xs">
            <span className="flex items-center gap-2">
              <Palette size={14} className="text-[#244BFF]" />
              Design
            </span>

            <span className="flex items-center gap-2">
              <Share2 size={14} className="text-[#244BFF]" />
              Marketing
            </span>

            <span className="flex items-center gap-2">
              <Camera size={14} className="text-[#244BFF]" />
              Content
            </span>
          </div>
        </div>

        {/* Skill cards */}
        <div className="skills-groups mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className={`skill-group-card group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04] sm:p-8 ${
                  group.featured
                    ? "border-[#244BFF]/20 bg-[#244BFF]/[0.055]"
                    : "border-black/[0.08] bg-white/60 hover:border-[#244BFF]/25"
                }`}
              >
                {/* Card decoration */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#244BFF]/[0.045] transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#244BFF]/[0.09] text-[#244BFF] transition-all duration-300 group-hover:bg-[#244BFF] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs tracking-[0.15em] text-black/30">
                      {group.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/50">
                    {group.subtitle}
                  </p>

                  <div className="my-6 h-px bg-black/[0.08]" />

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-black/[0.08] bg-white/70 px-3 py-2 text-[10px] font-medium text-black/65 transition-colors duration-200 group-hover:border-[#244BFF]/20 sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Area of expertise
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-[#244BFF] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Creative tools */}
        <div className="mt-24 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-14 md:pt-14">
          <div className="skills-tools-heading">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#244BFF]">
              My creative stack
            </span>

            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">
              Tools behind
              <br />
              <span className="font-serif font-normal italic text-black/45">
                the ideas.
              </span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-black/55">
              A selection of tools for designing visuals, creating content,
              planning campaigns, and understanding digital performance.
            </p>
          </div>

          <div className="skills-tools-list flex content-start flex-wrap gap-3 md:pt-2">
            {creativeTools.map((tool, index) => (
              <div
                key={tool}
                className="tool-chip group flex items-center gap-3 rounded-full border border-black/10 bg-white/60 px-4 py-3 transition-all duration-300 hover:border-[#244BFF]/30 hover:bg-[#244BFF] hover:text-white sm:px-5 sm:py-3.5"
              >
                <span className="text-[9px] text-[#244BFF] transition-colors group-hover:text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs font-medium sm:text-sm">{tool}</span>

                <ArrowUpRight
                  size={14}
                  className="text-black/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>
            ))}
          </div>
        </div>

        {/* My approach */}
        <div className="skills-principles mt-24">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#244BFF]">
                The way I work
              </span>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                Creativity meets strategy.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/50">
              Good creative work is not just about looking good. It should
              communicate, connect, and serve a purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="principle-card rounded-2xl border border-black/[0.08] bg-white/45 p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-black/35">
                      {principle.number}
                    </span>

                    <Icon size={21} className="text-[#244BFF]" />
                  </div>

                  <h4 className="mt-8 text-xl font-semibold tracking-tight">
                    {principle.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-black/55">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="skills-bottom-cta mt-20 overflow-hidden rounded-2xl bg-[#171717] p-7 text-white sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-[#A9B9FF]">
                <MousePointer2 size={15} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  Let's work together
                </span>
              </div>

              <h3 className="text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                Have a brand to build
                <br className="hidden sm:block" /> or a story to tell?
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                Let's create thoughtful visuals and digital experiences that
                help your brand stand out.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-5 rounded-full bg-[#244BFF] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#171717]"
            >
              Let's talk

              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
            Design · Marketing · Content
          </span>

          <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-black/35">
            <Search size={12} />
            Always exploring new ideas
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
