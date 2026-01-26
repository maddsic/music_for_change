import { Link } from "react-router";
import { useModal } from "~/hooks/useModal";
import Logo from "../logo/logo";
import { NavLinks, SocialLinks } from "~/data";

export function Footer() {
  const { openModal } = useModal();

  const handleContact = () => {
    setTimeout(() => openModal("contact"), 100);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Harnessing the power of music to inspire social change, raise
              awareness, and build a more just and inclusive Gambia.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">
              Explore
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              {NavLinks.map(({ id, name, href }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}

              <li>
                <Link
                  to="/profile"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Profile
                </Link>
              </li>

              <li>
                <button
                  onClick={() => openModal('contact')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">
              Contact
            </h4>
            <p className="text-sm text-gray-400 mb-2">info@musicforchange.org</p>
            <p className="text-sm text-gray-400">The Gambia, West Africa</p>
            <a href="tel:+2202291905" className="text-sm text-gray-400 hover:text-white transition-colors">Mobile: +220 2291905</a>

          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">
              Connect
            </h4>

            <div className="flex items-center gap-4">
              {SocialLinks.map(({ id, name, href, icon: Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
          <span>
            © {new Date().getFullYear()} Music For Change. All rights reserved.
          </span>

          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
