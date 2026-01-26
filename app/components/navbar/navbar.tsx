import Logo from '../logo/logo';
import { MobileNav } from '../mobileNav/mobileNav';
import { NavLink } from '../navLinks/navLinks';
import { GetInvolvedBtn } from '../getInvolvedBtn/getInvolvedBtn';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur-sm">
      {/* Centered container */}
      <div className="flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="flex justify-between items-center min-w-0 h-16">
            {/* Logo */}
            <Logo />
            {/* Navigation Links */}
            <NavLink />
            {/* CTA */}
            <GetInvolvedBtn />
            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
