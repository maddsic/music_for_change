import { Link } from 'react-router';
import { NavLinks } from '~/data';
import { useModal } from '~/hooks/useModal';

export function NavLink() {
  const { openModal } = useModal();

  // Function to scroll to the specified section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="hidden xl:flex items-center gap-8 text-sm font-medium flex-1 justify-center">
      <Link to="/"
        className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
      >
        Home
      </Link>
      {NavLinks.map(({ id, name, href }) => (
        <button
          key={id}
          onClick={() => scrollToSection(href)}
          className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
        >
          {name}
        </button>
      ))}
      <Link to="/profile"
        className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
      >
        Profile
      </Link>
      <button
        className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
        onClick={() => openModal('contact')}
      >
        Contact
      </button>
    </nav>
  );
}
