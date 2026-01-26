import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '../UI/button/button';
import { cn } from '~/lib/utils';
import { NavLinks } from '~/data';
import { useModal } from '~/hooks/useModal';
import { Link } from 'react-router';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseAndOpenModal = () => {
    setIsOpen(false);
    setTimeout(() => openModal('contact'), 100);
  };

  const closeModal = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="xl:hidden pr-2">
      {/* Toggle Button */}
      <button
        onClick={closeModal}
        aria-expanded={isOpen}
        className="p-2 text-white"
      >
        <span className="sr-only">Toggle menu</span>
        {isOpen ? (
          <FiX size={26} className="text-black" />
        ) : (
          <FiMenu size={26} className="text-black" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          'h-fit fixed inset-x-0 top-16 bottom-0 z-70 bg-black text-white',
          'flex flex-col items-center justify-start gap-8 px-6 py-10',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <Link to="/"
          className="text-lg font-medium tracking-wide hover:text-primary transition-colors"
          onClick={closeModal}
        >
          Home
        </Link>
        {NavLinks.map(({ id, name, href }) => (
          <button
            key={id}
            onClick={() => scrollToSection(href)}
            className="text-lg font-medium tracking-wide hover:text-primary transition-colors"
          >
            {name}
          </button>
        ))}

        <Link to="/profile"
          className="text-lg font-medium tracking-wide hover:text-primary transition-colors"
          onClick={closeModal}
        >
          Profile
        </Link>
        <button
          className="text-lg font-medium tracking-wide hover:text-primary transition-colors"
          onClick={handleCloseAndOpenModal}
        >
          Contact
        </button>

        <button
          onClick={handleCloseAndOpenModal}
          className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md"
        >
          Get Involved
        </button>
      </div>
    </div>
  );
}
