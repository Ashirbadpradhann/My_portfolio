import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  children: ReactNode;
};

const IconFrame = ({
  size = 24,
  strokeWidth = 2,
  className,
  children,
}: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const ArrowDownRight = (props: Omit<IconProps, "children">) => (
  <IconFrame {...props}>
    <path d="M7 7 17 17M17 7v10H7" />
  </IconFrame>
);

const ArrowUpRight = (props: Omit<IconProps, "children">) => (
  <IconFrame {...props}>
    <path d="M7 17 17 7M7 7h10v10" />
  </IconFrame>
);

const Palette = (props: Omit<IconProps, "children">) => (
  <IconFrame {...props}>
    <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 1.8-4.2 1.5 1.5 0 0 1 1.1-2.6H19a2 2 0 0 0 2-2A9 9 0 0 0 12 3Z" />
    <path d="M7.5 10h.01M11 7h.01M16 8.5h.01M8 15h.01" />
  </IconFrame>
);

const Megaphone = (props: Omit<IconProps, "children">) => (
  <IconFrame {...props}>
    <path d="m3 11 18-5v12L3 13v-2Z" />
    <path d="M11.6 15.4 13 21l-4-1-1.3-5.6M5 13.6V18" />
  </IconFrame>
);

const TrendingUp = (props: Omit<IconProps, "children">) => (
  <IconFrame {...props}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </IconFrame>
);

const Sparkles = (props: Omit<IconProps, "children">) => (
  <IconFrame {...props}>
    <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
    <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
  </IconFrame>
);

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".experience-label", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });

      gsap.from(".experience-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      gsap.from(".experience-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-grid",
          start: "top 80%",
        },
      });

      gsap.from(".experience-bottom", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-bottom",
          start: "top 90%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const expertise = [
    {
      number: "01",
      icon: Palette,
      title: "Graphic Design",
      subtitle: "Visual identity & creative design",
      description:
        "Creating clean, memorable visuals that communicate a brand's personality. From social media creatives to marketing graphics, every design starts with a clear purpose.",
      tags: ["Brand Identity", "Social Media", "Creative Design"],
    },
    {
      number: "02",
      icon: Megaphone,
      title: "Digital Marketing",
      subtitle: "Content, reach & engagement",
      description:
        "Developing digital content and marketing strategies designed to connect brands with their audiences, strengthen online presence, and encourage meaningful engagement.",
      tags: ["Content Strategy", "Campaigns", "Brand Awareness"],
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Digital Growth",
      subtitle: "Strategy meets creativity",
      description:
        "Combining creative thinking with a data-aware approach to improve digital communication, understand audience behaviour, and support sustainable brand growth.",
      tags: ["Audience Research", "Optimization", "Growth Strategy"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden border-t border-black/10 bg-[#f5f3ee] py-24 text-[#171717] sm:py-32 lg:py-36"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#2457ff]/[0.07] blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="experience-label mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2457ff]" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/50 sm:text-sm">
                Experience & Expertise
              </p>
            </div>

            <p className="experience-label max-w-sm text-sm leading-7 text-black/55 sm:text-base">
              Creative thinking, purposeful design, and digital-first ideas
              that help brands stand out.
            </p>
          </div>

          <div>
            <h2 className="experience-heading text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-8xl">
              Turning ideas
              <br />
              into{" "}
              <span className="font-serif font-normal italic text-[#2457ff]">
                impact.
              </span>
            </h2>
          </div>
        </div>

        {/* Experience / expertise cards */}
        <div className="experience-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="experience-card group relative flex min-h-[390px] flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#2457ff]/40 hover:shadow-[0_25px_70px_rgba(36,87,255,0.09)] sm:p-8"
              >
                {/* Card top */}
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2457ff]/[0.08] text-[#2457ff] transition-all duration-500 group-hover:bg-[#2457ff] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <span className="font-mono text-sm text-black/35">
                    / {item.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#2457ff]">
                    {item.subtitle}
                  </p>

                  <h3 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-black/55 sm:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 px-3 py-2 text-[10px] font-medium text-black/60 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative corner icon */}
                <ArrowUpRight
                  size={21}
                  strokeWidth={1.5}
                  className="absolute right-7 top-[105px] text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2457ff]"
                />
              </article>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="experience-bottom mt-10 overflow-hidden rounded-[24px] bg-[#171717] p-7 text-white sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-2 text-[#9db2ff]">
                <Sparkles size={17} />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                  Let's Create Something
                </span>
              </div>

              <h3 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Good design gets attention.
                <br />
                <span className="font-serif font-normal italic text-[#9db2ff]">
                  Great strategy makes it count.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Looking for creative design or digital marketing support?
                Let's discuss your next idea and turn it into something
                meaningful.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#2457ff] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#171717]"
            >
              Let's Talk
              <ArrowDownRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Footer label */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-black/40 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <span>Creative Thinking · Visual Design · Digital Growth</span>
          <span>Made with intention.</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;