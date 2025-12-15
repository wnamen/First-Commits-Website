import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border border-white/20 rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
                <div className="absolute inset-1 border border-white/40 rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
                <div className="absolute inset-2 bg-white rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]" />
              </div>
              <span className="text-lg font-medium tracking-tight">
                First Commits
              </span>
            </Link>
            <p className="mt-6 text-gray-500 text-body max-w-sm leading-relaxed">
              A private community for early operators—the ones who joined
              before the org chart, before the hype. Built on referrals, trust,
              and shared context.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-overline uppercase text-gray-500 mb-4">
                Navigate
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apply"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Apply
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-overline uppercase text-gray-500 mb-4">
                Community
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-600">Members</span>
                </li>
                <li>
                  <span className="text-gray-600">Gatherings</span>
                </li>
                <li>
                  <span className="text-gray-600">Cities</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-overline uppercase text-gray-500 mb-4">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@firstcommits.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <span className="text-gray-600">LinkedIn</span>
                </li>
                <li>
                  <span className="text-gray-600">Twitter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} First Commits. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
