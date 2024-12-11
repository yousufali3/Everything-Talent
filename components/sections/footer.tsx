import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 36 24"
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="12" r="6" fill="#FF00FF" />
              <circle cx="18" cy="12" r="6" fill="#00BFFF" />
              <circle cx="28" cy="12" r="6" fill="#FFB700" />
            </svg>
            <h2 className="text-white text-2xl font-bold">Everything Talent</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hiring Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Get Started
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hiring Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Funded Startups
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Free Trial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Trust
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  CCPA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
