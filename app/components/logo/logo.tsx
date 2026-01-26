import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="text-xl font-bold tracking-tight text-primary">
      <img
        src="/music_for_change_logo.png"
        alt="Music for change logo"
        className="h-28 w-auto object-cover z-60"
      />
    </Link>
  );
};

export default Logo;
