import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    number: "01",
    title: "KKCart",
    category: "E-COMMERCE PLATFORM",
    year: "2026",
    image: "/images/kkcart.png",
    description:
      "A modern shopping platform focused on product discovery, responsive design, and a smooth customer experience.",
    services: ["UI Design", "Web Development", "E-Commerce"],
  },
  {
    number: "02",
    title: "ABRUPA",
    category: "FASHION & LIFESTYLE",
    year: "2026",
    image: "/images/abrupa.png",
    description:
      "A contemporary fashion brand experience with elegant visuals and a modern digital presentation.",
    services: ["Brand Experience", "Web Design", "Creative Direction"],
  },
  {
    number: "03",
    title: "Modern Workforce",
    category: "WEB APPLICATION",
    year: "2026",
    image: "/images/emp.png",
    description:
      "A responsive web application concept designed to present information clearly and improve usability.",
    services: ["UI Design", "Digital Experience", "Development"],
  },
];
const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".projects-intro", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-intro",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".project-card", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          once: true,
        },
      });
      gsap.from(".projects-footer", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-footer",
          start: "top 90%",
          once: true,
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
      id="projects"
      className="relative overflow-hidden bg-[#F5F1E9] px-5 py-24 text-[#171717] sm:px-8 md:py-32 lg:px-14"
    >
      {" "}
      {/* Background decoration */}{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#244BFF]/[0.06] blur-3xl"
      />{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-32 h-64 w-64 rounded-full bg-[#244BFF]/[0.04] blur-3xl"
      />{" "}
      <div className="relative mx-auto max-w-7xl">
        {" "}
        {/* Header */}{" "}
        <div className="mb-14 md:mb-20">
          {" "}
          <div className="mb-7 flex items-center justify-between gap-4">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <span className="h-px w-10 bg-[#244BFF]" />{" "}
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#244BFF]">
                {" "}
                Selected Work{" "}
              </span>{" "}
            </div>{" "}
            <span className="hidden text-xs uppercase tracking-[0.18em] text-black/40 sm:block">
              {" "}
              Portfolio / 2026{" "}
            </span>{" "}
          </div>{" "}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {" "}
            <h2 className="projects-heading text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[100px]">
              {" "}
              Selected <br />{" "}
              <span className="font-serif font-normal italic text-[#244BFF]">
                {" "}
                projects.{" "}
              </span>{" "}
            </h2>{" "}
            <div className="projects-intro lg:pb-3">
              {" "}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#244BFF]/[0.08] text-[#244BFF]">
                {" "}
                <Sparkles size={20} />{" "}
              </div>{" "}
              <p className="max-w-md text-base leading-7 text-black/60 sm:text-lg">
                {" "}
                A collection of digital experiences, creative ideas, and
                projects built with a focus on visual quality, usability, and
                thoughtful execution.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Project cards */}{" "}
        <div className="projects-grid grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 md:gap-y-16">
          {" "}
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`project-card group ${index === 0 ? "md:col-span-2" : ""}`}
            >
              {" "}
              {/* Project image */}{" "}
              <div
                className={`relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white/60 ${index === 0 ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[4/3]"}`}
              >
                {" "}
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />{" "}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />{" "}
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-6 sm:top-6">
                  {" "}
                  Project {project.number}{" "}
                </span>{" "}
                <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1E9] text-[#171717] transition-colors duration-300 group-hover:bg-[#244BFF] group-hover:text-white sm:bottom-6 sm:right-6">
                  {" "}
                  <ArrowUpRight
                    size={21}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />{" "}
                </div>{" "}
                {index === 0 && (
                  <span className="absolute bottom-5 left-5 hidden items-center gap-2 rounded-full bg-[#F5F1E9]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md sm:flex">
                    {" "}
                    <Sparkles size={13} className="text-[#244BFF]" /> Featured
                    Project{" "}
                  </span>
                )}{" "}
              </div>{" "}
              {/* Project information */}{" "}
              <div className="mt-6 sm:mt-7">
                {" "}
                <div className="mb-3 flex items-center justify-between gap-3">
                  {" "}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#244BFF]">
                    {" "}
                    {project.category}{" "}
                  </span>{" "}
                  <span className="text-xs text-black/40">
                    {" "}
                    {project.year}{" "}
                  </span>{" "}
                </div>{" "}
                <h3
                  className={`font-semibold tracking-[-0.05em] ${index === 0 ? "text-3xl sm:text-5xl md:text-6xl" : "text-2xl sm:text-3xl"}`}
                >
                  {" "}
                  {project.title}{" "}
                </h3>{" "}
                <p className="mt-4 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
                  {" "}
                  {project.description}{" "}
                </p>{" "}
                <div className="mt-5 flex flex-wrap gap-2">
                  {" "}
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-black/[0.09] bg-white/50 px-3 py-2 text-[10px] font-medium text-black/65 sm:text-xs"
                    >
                      {" "}
                      {service}{" "}
                    </span>
                  ))}{" "}
                </div>{" "}
                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
                  {" "}
                  <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                    {" "}
                    {project.number} / 03{" "}
                  </span>{" "}
                  <span className="flex items-center gap-2 text-xs font-medium text-[#244BFF]">
                    {" "}
                    Selected Project <ArrowUpRight size={15} />{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
        {/* Bottom call to action */}{" "}
        <div className="projects-footer mt-20 border-t border-black/[0.12] pt-8 md:mt-28">
          {" "}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {" "}
            <div>
              {" "}
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#244BFF]">
                {" "}
                Have something in mind?{" "}
              </p>{" "}
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {" "}
                Let's create something meaningful.{" "}
              </h3>{" "}
              <p className="mt-2 max-w-lg text-sm leading-6 text-black/50">
                {" "}
                Have a creative idea or digital project? Let's bring it to
                life.{" "}
              </p>{" "}
            </div>{" "}
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#244BFF] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1738D8] hover:shadow-lg hover:shadow-[#244BFF]/20"
            >
              {" "}
              Start a Conversation{" "}
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* Footer */}{" "}
        <div className="mt-12 flex items-center justify-between border-t border-black/[0.08] pt-5">
          {" "}
          <span className="text-[10px] uppercase tracking-[0.22em] text-black/35">
            {" "}
            Creative Portfolio{" "}
          </span>{" "}
          <span className="text-[10px] uppercase tracking-[0.22em] text-black/35">
            {" "}
            03 Selected Projects{" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Projects;
