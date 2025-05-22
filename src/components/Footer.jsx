
const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        {/* Left Text */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white">React Post Manager</span>. All rights reserved.
        </p>

        {/* Right Links */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition-colors duration-200"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
