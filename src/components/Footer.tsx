const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>
          © {new Date().getFullYear()} Ashirbad Pradhan
        </p>

        <div className="flex gap-6">
          {/* <a
            href="https://github.com/Abhijitnayak275"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhijit-nayak-26bba71b8/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;