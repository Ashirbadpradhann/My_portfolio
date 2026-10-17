import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
      })
        .from(".hero-kicker", { y: 25, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(
          ".hero-title-line",
          { yPercent: 110, opacity: 0, duration: 1, stagger: 0.13 },
          "-=0.35",
        )
        .from(
          ".hero-description",
          { y: 25, opacity: 0, duration: 0.8 },
          "-=0.5",
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.12 },
          "-=0.45",
        )
        .from(
          ".hero-visual",
          { scale: 0.92, opacity: 0, duration: 1.1, ease: "power3.out" },
          "-=0.8",
        )
        .from(
          ".hero-floating",
          { scale: 0.7, opacity: 0, duration: 0.7, stagger: 0.15 },
          "-=0.5",
        );
      gsap.to(".hero-orbit", {
        rotate: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".hero-floating-card", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-star", {
        rotate: 180,
        scale: 1.15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      const section = heroRef.current;
      if (section) {
        const handleMouseMove = (event: MouseEvent) => {
          if (window.innerWidth < 1024) return;
          const rect = section.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          gsap.to(".hero-visual-inner", {
            x: x * 16,
            y: y * 12,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(".hero-decor", {
            x: x * -12,
            y: y * -8,
            duration: 1,
            ease: "power3.out",
            overwrite: "auto",
          });
        };
        const handleMouseLeave = () => {
          gsap.to([".hero-visual-inner", ".hero-decor"], {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        };
        section.addEventListener("mousemove", handleMouseMove);
        section.addEventListener("mouseleave", handleMouseLeave);
        gsap.to(".hero-visual-inner", {
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
        return () => {
          section.removeEventListener("mousemove", handleMouseMove);
          section.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F5F1E9] text-[#171717] selection:bg-[#244BFF] selection:text-white"
    >
      {" "}
      {/* BACKGROUND DECORATION */}{" "}
      <div className="hero-decor pointer-events-none absolute inset-0 overflow-hidden">
        {" "}
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-black/[0.07] sm:h-96 sm:w-96" />{" "}
        <div className="absolute -right-12 top-32 h-56 w-56 rounded-full border border-black/[0.07] sm:h-72 sm:w-72" />{" "}
        <div className="absolute left-[48%] top-[25%] h-2 w-2 rounded-full bg-[#244BFF]" />{" "}
        <div className="absolute bottom-24 left-[43%] hidden h-20 w-20 rotate-12 border border-black/10 lg:block" />{" "}
        <div className="absolute right-[8%] top-[18%] h-3 w-3 rounded-full bg-[#244BFF]" />{" "}
      </div>{" "}
      {/* NAVIGATION */}{" "}
      {/* <header className="relative z-20 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-14">
        {" "}
        <nav className="flex items-center justify-between border-b border-black/10 pb-5 sm:pb-6">
          {" "}
          <a
            href="#home"
            className="hero-nav-item group flex items-center gap-2"
          >
            {" "}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#244BFF] text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-12">
              {" "}
              A.{" "}
            </span>{" "}
            <span className="text-xs font-bold uppercase tracking-[0.16em] sm:text-sm">
              {" "}
              Abhijit Nayak{" "}
              <span className="mt-0.5 block text-[9px] font-normal tracking-[0.1em] text-black/45">
                {" "}
                CREATIVE PORTFOLIO{" "}
              </span>{" "}
            </span>{" "}
          </a>{" "}
          <div className="hero-nav-item hidden items-center gap-7 md:flex lg:gap-10">
            {" "}
            <a
              href="#about"
              className="text-xs font-medium text-black/60 transition-colors hover:text-[#244BFF]"
            >
              {" "}
              About{" "}
            </a>{" "}
            <a
              href="#skills"
              className="text-xs font-medium text-black/60 transition-colors hover:text-[#244BFF]"
            >
              {" "}
              Services{" "}
            </a>{" "}
            <a
              href="#projects"
              className="text-xs font-medium text-black/60 transition-colors hover:text-[#244BFF]"
            >
              {" "}
              Projects{" "}
            </a>{" "}
          </div>{" "}
          <a
            href="#contact"
            className="hero-nav-item group inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-[#244BFF] hover:bg-[#244BFF] hover:text-white sm:px-5 sm:text-xs"
          >
            {" "}
            Let's Talk{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {" "}
              ↗{" "}
            </span>{" "}
          </a>{" "}
        </nav>{" "}
      </header>{" "} */}
      {/* HERO CONTENT */}{" "}
      <div className="relative z-10 mx-auto mt-10 grid min-h-[calc(100vh-100px)] max-w-[1600px] grid-cols-1 items-center gap-8 px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-5 lg:px-14 lg:py-12">
        {" "}
        {/* LEFT CONTENT */}{" "}
        <div className="relative z-10 order-2 lg:order-1">
          {" "}
          <div className="hero-kicker mb-6 flex items-center gap-3 sm:mb-8">
            {" "}
            <span className="h-[2px] w-8 bg-[#244BFF]" />{" "}
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55 sm:text-xs">
              {" "}
              Graphics Designer & Digital Marketer{" "}
            </p>{" "}
          </div>{" "}
          <h1 className="text-[clamp(3.3rem,8.5vw,8.3rem)] font-semibold leading-[0.88] tracking-[-0.085em]">
            {" "}
            <span className="block overflow-hidden pb-1">
              {" "}
              <span className="hero-title-line block">Ideas into</span>{" "}
            </span>{" "}
            <span className="block overflow-hidden pb-1">
              {" "}
              <span className="hero-title-line block text-[#244BFF]">
                {" "}
                Impact.{" "}
              </span>{" "}
            </span>{" "}
            <span className="block overflow-hidden pb-1">
              {" "}
              <span className="hero-title-line block"> Design into </span>{" "}
            </span>{" "}
            <span className="block overflow-hidden pb-1">
              {" "}
              <span className="hero-title-line block">
                {" "}
                <span className="relative inline-block">
                  {" "}
                  Growth{" "}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 15"
                    fill="none"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      d="M3 10C73 1 190 2 297 8"
                      stroke="#244BFF"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />{" "}
                  </svg>{" "}
                </span>{" "}
                <span className="text-[#244BFF]">.</span>{" "}
              </span>{" "}
            </span>{" "}
          </h1>{" "}
          <p className="hero-description mt-8 max-w-md text-sm leading-7 text-black/60 sm:mt-10 sm:text-base sm:leading-8">
            {" "}
            I create bold visuals, memorable brand identities and digital
            marketing experiences that help businesses stand out, connect with
            people and grow online.{" "}
          </p>{" "}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            {" "}
            <a
              href="#projects"
              className="hero-cta group inline-flex items-center gap-4 rounded-full bg-[#244BFF] px-6 py-4 text-xs font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1738D6] sm:px-7"
            >
              {" "}
              Explore My Work{" "}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                {" "}
                ↗{" "}
              </span>{" "}
            </a>{" "}
            <a
              href="#contact"
              className="hero-cta group inline-flex items-center gap-2 px-3 py-3 text-xs font-semibold text-black/70 transition-colors hover:text-[#244BFF]"
            >
              {" "}
              Start a Project{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {" "}
                →{" "}
              </span>{" "}
            </a>{" "}
          </div>{" "}
          {/* QUICK SKILLS */}{" "}
          <div className="hero-description mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-black/10 pt-5 sm:mt-12">
            {" "}
            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40">
              {" "}
              Specializing in{" "}
            </span>{" "}
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-medium">
              {" "}
              Brand Identity{" "}
            </span>{" "}
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-medium">
              {" "}
              Social Media{" "}
            </span>{" "}
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-medium">
              {" "}
              Digital Growth{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
        {/* RIGHT VISUAL */}{" "}
        <div className="relative order-1 mx-auto w-full max-w-[460px] lg:order-2 lg:max-w-none">
          {" "}
          <div className="hero-visual relative mx-auto aspect-[0.88/1] w-[85%] max-w-[400px] sm:w-[78%] lg:w-full lg:max-w-[490px]">
            {" "}
            {/* BLUE FRAME */}{" "}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[48%_48%_12px_12px] bg-[#244BFF] sm:translate-x-4 sm:translate-y-4" />{" "}
            {/* IMAGE */}{" "}
            <div className="hero-visual-inner absolute inset-0 overflow-hidden rounded-[48%_48%_12px_12px] bg-[#DDD7CC]">
              {" "}
              <img
                src="/images/profile.jpeg"
                alt="Ashirbad pradhank"
                className="h-full w-full object-cover object-[50%_8%] grayscale transition-transform duration-700 hover:scale-105"
              />{" "}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />{" "}
              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
                {" "}
                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/75 sm:text-[10px]">
                  {" "}
                  Creativity meets strategy{" "}
                </p>{" "}
                <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                  {" "}
                  Make it memorable.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* ORBIT DECORATION */}{" "}
            <div className="hero-floating hero-orbit pointer-events-none absolute -right-5 top-[8%] z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#244BFF]/40 sm:-right-8 sm:h-28 sm:w-28">
              {" "}
              <div className="absolute inset-2 rounded-full border border-dashed border-[#244BFF]/50" />{" "}
              <span className="hero-star text-3xl text-[#244BFF] sm:text-4xl">
                {" "}
                ✳{" "}
              </span>{" "}
            </div>{" "}
            {/* FLOATING DESIGN CARD */}{" "}
            <div className="hero-floating hero-floating-card absolute -left-5 top-[17%] z-20 w-[125px] rounded-xl border border-black/[0.06] bg-white p-3 shadow-xl shadow-black/5 sm:-left-12 sm:w-[155px] sm:p-4">
              {" "}
              <div className="flex items-center justify-between">
                {" "}
                <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-black/45 sm:text-[9px]">
                  {" "}
                  Creative Lab{" "}
                </span>{" "}
                <span className="h-2 w-2 rounded-full bg-[#244BFF]" />{" "}
              </div>{" "}
              <div className="mt-3 flex gap-1.5">
                {" "}
                <span className="h-7 flex-1 rounded-md bg-[#244BFF]" />{" "}
                <span className="h-7 flex-1 rounded-md bg-[#F3C8A8]" />{" "}
                <span className="h-7 flex-1 rounded-md bg-[#171717]" />{" "}
                <span className="h-7 flex-1 rounded-md bg-[#DDD7CC]" />{" "}
              </div>{" "}
              <p className="mt-3 text-[9px] font-semibold text-black/75 sm:text-[10px]">
                {" "}
                Think. Design. Deliver.{" "}
              </p>{" "}
            </div>{" "}
            {/* DIGITAL MARKETING CARD */}{" "}
            <div className="hero-floating absolute -bottom-3 -right-2 z-20 w-[145px] rounded-xl bg-[#171717] p-3.5 text-white shadow-xl shadow-black/10 sm:-right-5 sm:w-[175px] sm:p-4">
              {" "}
              <div className="flex items-center justify-between">
                {" "}
                <span className="text-[9px] text-white/55 sm:text-[10px]">
                  {" "}
                  DIGITAL PRESENCE{" "}
                </span>{" "}
                <span className="text-[#8FA1FF]">↗</span>{" "}
              </div>{" "}
              <div className="mt-4 flex h-9 items-end gap-1.5">
                {" "}
                <span className="h-3 w-full rounded-t-sm bg-[#244BFF]" />{" "}
                <span className="h-5 w-full rounded-t-sm bg-[#4768FF]" />{" "}
                <span className="h-4 w-full rounded-t-sm bg-[#6E86FF]" />{" "}
                <span className="h-7 w-full rounded-t-sm bg-[#8FA1FF]" />{" "}
                <span className="h-9 w-full rounded-t-sm bg-white" />{" "}
              </div>{" "}
              <p className="mt-3 text-[10px] font-medium sm:text-xs">
                {" "}
                Creativity with purpose.{" "}
              </p>{" "}
            </div>{" "}
            {/* SMALL DECORATIVE STAR */}{" "}
            <div className="hero-floating absolute -bottom-6 left-[8%] text-3xl text-[#244BFF] sm:-bottom-8 sm:text-4xl">
              {" "}
              ✳{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* BOTTOM MARQUEE */}{" "}
      <div className="relative z-10 overflow-hidden border-y border-black/10 bg-[#EAE5DA] py-4 sm:py-5">
        {" "}
        <div className="flex min-w-max animate-[marquee_25s_linear_infinite] items-center gap-7 sm:gap-10">
          {" "}
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-7 sm:gap-10">
              {" "}
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
                {" "}
                Graphic Design{" "}
              </span>{" "}
              <span className="text-xl text-[#244BFF]">✳</span>{" "}
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
                {" "}
                Brand Identity{" "}
              </span>{" "}
              <span className="text-xl text-[#244BFF]">✳</span>{" "}
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
                {" "}
                Digital Marketing{" "}
              </span>{" "}
              <span className="text-xl text-[#244BFF]">✳</span>{" "}
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
                {" "}
                Creative Strategy{" "}
              </span>{" "}
              <span className="text-xl text-[#244BFF]">✳</span>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* MARQUEE ANIMATION */}{" "}
      <style>{` @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } @media (prefers-reduced-motion: reduce) { .animate-\\[marquee_25s_linear_infinite\\] { animation: none; } } `}</style>{" "}
    </section>
  );
};
export default Hero;
