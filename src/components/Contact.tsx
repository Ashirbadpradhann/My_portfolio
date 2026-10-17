import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-label", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      });
      gsap.from(".contact-heading", {
        y: 65,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
      });
      gsap.from(".contact-panel", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-panel",
          start: "top 90%",
          once: true,
        },
      });
    }, section);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden border-t border-black/10 bg-[#F5F1E9] px-5 py-24 text-[#171717] sm:px-8 md:py-32 lg:px-14"
    >
      {" "}
      {/* Background decoration */}{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#244BFF]/[0.07] blur-3xl"
      />{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#244BFF]/[0.05] blur-3xl"
      />{" "}
      <div className="relative mx-auto max-w-7xl">
        {" "}
        {/* Top label */}{" "}
        <div className="contact-label mb-12 flex items-center justify-between gap-4">
          {" "}
          <div className="flex items-center gap-3">
            {" "}
            <span className="h-px w-10 bg-[#244BFF]" />{" "}
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#244BFF]">
              {" "}
              Contact{" "}
            </span>{" "}
          </div>{" "}
          <span className="hidden text-xs uppercase tracking-[0.18em] text-black/40 sm:block">
            {" "}
            Have a project in mind?{" "}
          </span>{" "}
        </div>{" "}
        {/* Main heading */}{" "}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          {" "}
          <div>
            {" "}
            <h2 className="contact-heading text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[104px]">
              {" "}
              Let's make <br /> something <br />{" "}
              <span className="font-serif font-normal italic text-[#244BFF]">
                {" "}
                remarkable.{" "}
              </span>{" "}
            </h2>{" "}
            <p className="contact-heading mt-8 max-w-xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              {" "}
              Have a brand to build, a creative idea to explore, or a digital
              project in mind? Let's talk about how we can bring it to
              life.{" "}
            </p>{" "}
          </div>{" "}
          {/* Contact side card */}{" "}
          <div className="contact-panel relative overflow-hidden rounded-3xl border border-black/[0.08] bg-white/60 p-6 sm:p-8 lg:p-9">
            {" "}
            <div className="mb-10 flex items-start justify-between">
              {" "}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#244BFF] text-white">
                {" "}
                <Sparkles size={25} strokeWidth={1.6} />{" "}
              </div>{" "}
              <span className="rounded-full border border-[#244BFF]/20 bg-[#244BFF]/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#244BFF]">
                {" "}
                Open to projects{" "}
              </span>{" "}
            </div>{" "}
            <p className="mb-3 text-sm text-black/50">
              {" "}
              Got something exciting?{" "}
            </p>{" "}
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {" "}
              Tell me about it.{" "}
            </h3>{" "}
            <p className="mt-4 text-sm leading-6 text-black/55">
              {" "}
              I'm always interested in creative collaborations and projects that
              make a difference.{" "}
            </p>{" "}
            <a
              href="mailto:abhijitnayak146@gmail.com?subject=Let's%20Work%20Together"
              className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#244BFF] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1738D8] hover:shadow-lg hover:shadow-[#244BFF]/20"
            >
              {" "}
              <span className="flex items-center gap-3">
                {" "}
                <Mail size={18} /> Get in touch{" "}
              </span>{" "}
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />{" "}
            </a>{" "}
            <div className="mt-6 flex items-center gap-3 border-t border-black/[0.08] pt-5">
              {" "}
              <MessageCircle size={16} className="text-[#244BFF]" />{" "}
              <a
                href="mailto:abhijitnayak146@gmail.com"
                className="break-all text-sm text-black/60 transition-colors hover:text-[#244BFF]"
              >
                {" "}
                {/* abhijitnayak146@gmail.com{" "} */}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom section */}{" "}
        <div className="mt-24 border-t border-black/[0.12] pt-7 sm:mt-32">
          {" "}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {" "}
            <div>
              {" "}
              <p className="text-sm font-semibold tracking-tight">
                {" "}
                Have an idea? Let's create something great.{" "}
              </p>{" "}
              <p className="mt-1 text-xs text-black/45">
                {" "}
                Graphic Design · Digital Marketing · Creative Strategy{" "}
              </p>{" "}
            </div>{" "}
            <a
              href="mailto:abhijitnayak146@gmail.com"
              aria-label="Email Abhijit"
              className="group flex h-12 w-12 items-center justify-center self-start rounded-full border border-black/15 transition-all duration-300 hover:border-[#244BFF] hover:bg-[#244BFF] hover:text-white sm:self-auto"
            >
              {" "}
              <ArrowDownRight
                size={20}
                className="transition-transform duration-300 group-hover:rotate-[-45deg]"
              />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Contact;
