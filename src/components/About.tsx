
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Graphic Design",
    description:
      "Eye-catching visuals, creative layouts and designs that communicate your brand's message.",
    tags: ["Posters", "Banners", "Marketing Creatives"],
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that make businesses recognizable, memorable and consistent.",
    tags: ["Logo Design", "Typography", "Brand Systems"],
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Scroll-stopping creative content designed to build engagement and strengthen your online presence.",
    tags: ["Instagram", "Content Design", "Campaigns"],
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Creative digital campaigns that connect brands with their audience and support business growth.",
    tags: ["Digital Strategy", "SEO", "Online Promotion"],
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Section introduction
      gsap.from(".about-top", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-top",
          start: "top 85%",
          once: true,
        },
      });

      // Main headline reveal
      gsap.from(".about-heading-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          once: true,
        },
      });

      // Profile image reveal
      const photoTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-photo-wrap",
          start: "top 80%",
          once: true,
        },
      });

      photoTimeline
        .from(".about-photo-frame", {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
        })
        .from(
          ".about-photo-image",
          {
            scale: 1.2,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          ".about-photo-card",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.7"
        );

      // About description
      gsap.from(".about-copy-item", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-copy",
          start: "top 80%",
          once: true,
        },
      });

      // Statistics
      gsap.from(".about-stat", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
          once: true,
        },
      });

      // Services
      gsap.from(".about-service", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-services-grid",
          start: "top 80%",
          once: true,
        },
      });

      // Final statement
      gsap.from(".about-final-content", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-final",
          start: "top 80%",
          once: true,
        },
      });

      // Background typography movement
      gsap.to(".about-background-type", {
        yPercent: -15,
        xPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Floating design element
      gsap.to(".about-floating-star", {
        rotation: 180,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".about-floating-card", {
        y: -9,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Profile image mouse interaction
      const photoWrap = section.querySelector(
        ".about-photo-wrap"
      ) as HTMLElement | null;

      if (photoWrap) {
        const handleMouseMove = (event: MouseEvent) => {
          if (window.innerWidth < 1024) return;

          const rect = photoWrap.getBoundingClientRect();

          const x =
            (event.clientX - rect.left - rect.width / 2) /
            rect.width;

          const y =
            (event.clientY - rect.top - rect.height / 2) /
            rect.height;

          gsap.to(".about-photo-image", {
            x: x * 8,
            y: y * 8,
            duration: 0.7,
            ease: "power3.out",
            overwrite: "auto",
          });

          gsap.to(".about-photo-decoration", {
            x: x * -12,
            y: y * -10,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(
            [".about-photo-image", ".about-photo-decoration"],
            {
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              overwrite: "auto",
            }
          );
        };

        photoWrap.addEventListener("mousemove", handleMouseMove);
        photoWrap.addEventListener("mouseleave", handleMouseLeave);

        // Remove listeners when the component unmounts.
        return () => {
          photoWrap.removeEventListener(
            "mousemove",
            handleMouseMove
          );

          photoWrap.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        };
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#F5F1E9] py-24 text-[#171717] sm:py-32 lg:py-40"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-[8%] h-[350px] w-[350px] rounded-full border border-black/[0.06] sm:h-[550px] sm:w-[550px]" />

        <div className="absolute -right-16 top-[14%] h-[250px] w-[250px] rounded-full border border-black/[0.06] sm:h-[400px] sm:w-[400px]" />

        <div className="about-background-type absolute -right-[5%] top-[25%] select-none text-[35vw] font-black leading-none tracking-[-0.15em] text-[#244BFF]/[0.035]">
          ABOUT
        </div>

        <div className="absolute left-[8%] top-[40%] h-2 w-2 rounded-full bg-[#244BFF]" />

        <div className="absolute bottom-[15%] left-[5%] hidden h-20 w-20 rotate-12 border border-black/[0.08] lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        {/* SECTION HEADER */}

        <div className="about-top">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#244BFF]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/45 sm:text-[11px] sm:tracking-[0.3em]">
                Get to know me
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35 sm:text-[10px] sm:tracking-[0.25em]">
              About / 01
            </span>
          </div>

          <div className="mt-6 h-px bg-black/10" />
        </div>

        {/* MAIN HEADLINE */}

        <div className="about-heading mt-20 sm:mt-28 lg:mt-36">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-black/45 sm:text-xs">
            A little about my creative world
          </p>

          <h2 className="text-[clamp(3.4rem,10.5vw,10rem)] font-semibold leading-[0.88] tracking-[-0.085em]">
            <span className="block overflow-hidden pb-1">
              <span className="about-heading-line block">
                Creativity
              </span>
            </span>

            <span className="block overflow-hidden pb-1">
              <span className="about-heading-line block text-[#244BFF]">
                with purpose.
              </span>
            </span>

            <span className="mt-4 block max-w-3xl overflow-hidden pb-1 text-[clamp(1.2rem,3vw,2.5rem)] font-normal leading-tight tracking-[-0.05em] text-black/50">
              <span className="about-heading-line block">
                Design that speaks. Marketing that connects.
              </span>
            </span>
          </h2>
        </div>

        {/* PROFILE AND ABOUT COPY */}

        <div className="mt-20 grid items-center gap-14 sm:mt-28 sm:gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* PROFILE IMAGE */}

          <div className="about-photo-wrap relative mx-auto w-full max-w-[480px] lg:mx-0">
            {/* BLUE BACKGROUND FRAME */}

            <div className="about-photo-decoration absolute inset-0 translate-x-3 translate-y-3 rounded-[12px] bg-[#244BFF] sm:translate-x-4 sm:translate-y-4" />

            {/* IMAGE FRAME */}

            <div
              className="about-photo-frame relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#DDD7CC]"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <img
                src="/images/about.jpeg"
                alt="Abhijit Nayak — Graphics Designer and Digital Marketing Professional"
                className="about-photo-image h-full w-full object-cover object-center grayscale transition-[filter] duration-500 hover:grayscale-0"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

              {/* IMAGE LABEL */}

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 backdrop-blur-sm sm:left-7 sm:top-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A8B7FF]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-white sm:text-[9px]">
                  Creative Professional
                </span>
              </div>

              {/* IMAGE CAPTION */}

              <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/65">
                  Meet the creative mind
                </p>

                <p className="mt-2 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                  Ashirbad Pradhan.
                </p>

                <p className="mt-2 text-[10px] text-white/65 sm:text-xs">
                  Graphics Design · Digital Marketing
                </p>
              </div>
            </div>

            {/* FLOATING CREATIVE CARD */}

            <div className="about-photo-card about-floating-card absolute -left-2 top-[18%] z-20 w-[145px] rounded-xl border border-black/[0.05] bg-white p-3.5 shadow-xl shadow-black/[0.06] sm:-left-8 sm:w-[175px] sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-black/45 sm:text-[9px]">
                  Color palette
                </span>

                <span className="text-xs text-[#244BFF]">✳</span>
              </div>

              <div className="mt-3 flex gap-1.5">
                <span className="h-7 flex-1 rounded-md bg-[#244BFF]" />
                <span className="h-7 flex-1 rounded-md bg-[#171717]" />
                <span className="h-7 flex-1 rounded-md bg-[#D9C8AD]" />
                <span className="h-7 flex-1 rounded-md bg-[#F0D2C1]" />
              </div>

              <p className="mt-3 text-[9px] font-medium text-black/70 sm:text-[10px]">
                Visual storytelling
              </p>
            </div>

            {/* FLOATING STAR */}

            <div className="about-photo-card absolute -right-3 top-[8%] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#244BFF] text-3xl text-white shadow-xl shadow-blue-500/20 sm:-right-5 sm:h-[72px] sm:w-[72px] sm:text-4xl">
              <span className="about-floating-star">✳</span>
            </div>

            {/* BOTTOM IMAGE LABEL */}

            <div className="about-photo-card absolute -bottom-5 right-3 z-20 rounded-xl bg-[#171717] px-4 py-3 text-white shadow-xl sm:right-6 sm:px-5 sm:py-4">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/50">
                My creative approach
              </p>

              <p className="mt-1 text-xs font-medium sm:text-sm">
                Think. Create. Grow.
              </p>
            </div>
          </div>

          {/* ABOUT COPY */}

          <div className="about-copy lg:pl-2">
            <div className="about-copy-item flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#244BFF]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/45 sm:text-[10px]">
                The person behind the designs
              </span>
            </div>

            <h3 className="about-copy-item mt-7 max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.065em] sm:text-4xl lg:text-5xl">
              I turn creative ideas into{" "}
              <span className="text-[#244BFF]">
                meaningful experiences.
              </span>
            </h3>

            <p className="about-copy-item mt-7 max-w-xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              I'm Ashirbad Prdhan, a creative professional interested
              in visual communication, brand identity and digital
              marketing. I believe great design is more than
              appearance — it should tell a story and communicate
              the right message.
            </p>

            <p className="about-copy-item mt-5 max-w-xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
              From designing engaging social media creatives to
              developing consistent brand visuals and digital
              campaigns, my focus is on helping businesses present
              themselves confidently in the digital world.
            </p>

            {/* CREATIVE PRINCIPLES */}

            <div className="about-copy-item mt-8 grid grid-cols-1 gap-4 border-t border-black/10 pt-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#244BFF]/10 text-sm text-[#244BFF]">
                  ↗
                </span>

                <div>
                  <p className="text-xs font-semibold">
                    Purposeful Design
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-black/45 sm:text-xs">
                    Every visual has a reason.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#244BFF]/10 text-sm text-[#244BFF]">
                  ✳
                </span>

                <div>
                  <p className="text-xs font-semibold">
                    Strategic Thinking
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-black/45 sm:text-xs">
                    Creativity aligned with goals.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}

            <div className="about-copy-item mt-9">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-[#171717] px-6 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#244BFF]"
              >
                Let's Create Something

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            </div>

            {/* STATISTICS */}

            <div className="about-stats mt-12 grid grid-cols-2 gap-6 border-t border-black/10 pt-7 sm:gap-10">
              <div className="about-stat">
                <p className="text-4xl font-semibold tracking-[-0.08em] sm:text-5xl">
                  04<span className="text-[#244BFF]">.</span>
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-black/45 sm:text-[10px] sm:tracking-[0.2em]">
                  Creative Services
                </p>
              </div>

              <div className="about-stat">
                <p className="text-4xl font-semibold tracking-[-0.08em] sm:text-5xl">
                  360<span className="text-[#244BFF]">°</span>
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-black/45 sm:text-[10px] sm:tracking-[0.2em]">
                  Creative Perspective
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CREATIVE SERVICES */}

        <div
          id="skills"
          className="mt-32 scroll-mt-20 sm:mt-44 lg:mt-52"
        >
          <div className="flex flex-col justify-between gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#244BFF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/45 sm:text-[10px]">
                  What I can do for you
                </p>
              </div>

              <h3 className="mt-5 text-4xl font-semibold tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                Creative services<span className="text-[#244BFF]">.</span>
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/50">
              Creative thinking, purposeful visuals and digital
              strategies designed around your brand and audience.
            </p>
          </div>

          {/* SERVICE CARDS */}

          <div className="about-services-grid mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="about-service group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white/60 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#244BFF]/30 hover:bg-white hover:shadow-xl hover:shadow-black/[0.04] sm:min-h-[310px] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-black/35">
                    {service.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-lg transition-all duration-300 group-hover:rotate-45 group-hover:border-[#244BFF] group-hover:bg-[#244BFF] group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="mt-9">
                  <h4 className="text-xl font-semibold tracking-[-0.055em] sm:text-2xl">
                    {service.title}
                  </h4>

                  <p className="mt-4 text-xs leading-6 text-black/55 sm:text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.08] px-2.5 py-1.5 text-[9px] text-black/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#244BFF] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        {/* FINAL STATEMENT */}

        <div className="about-final mt-32 sm:mt-44 lg:mt-52">
          <div className="relative overflow-hidden rounded-3xl bg-[#244BFF] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Background pattern */}

            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/15 sm:h-96 sm:w-96" />

            <div className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/15 sm:h-72 sm:w-72" />

            <div className="pointer-events-none absolute bottom-0 right-[30%] h-40 w-40 rounded-full bg-white/[0.06] blur-3xl" />

            <div className="about-final-content relative z-10">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-white" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/65 sm:text-[10px]">
                  Have an idea?
                </p>
              </div>

              <h3 className="mt-8 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.075em] sm:text-6xl lg:text-8xl">
                Let's make your brand impossible to ignore.
              </h3>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">
                  Have a design project, a brand to build or a
                  digital presence to improve? Let's talk about
                  what we can create together.
                </p>

                <a
                  href="#contact"
                  className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5F1E9]"
                >
                  Start a Conversation

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#244BFF]/10 text-[#244BFF] transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION LINE */}

        <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-5 sm:mt-16">
          <span className="text-[8px] uppercase tracking-[0.2em] text-black/35 sm:text-[9px] sm:tracking-[0.25em]">
            Abhijit Nayak · Creative Portfolio
          </span>

          <a
            href="#home"
            className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-black/50 transition-colors hover:text-[#244BFF]"
          >
            Back to top

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

