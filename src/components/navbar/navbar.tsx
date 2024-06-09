import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__Home">
        <a href="/">Home</a>
      </div>

      <div className="Navbar__Links">
        <a href="/about">About Us</a>
        <a href="/services">Our Services</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className="Navbar__Small">
        <FontAwesomeIcon className="Navbar__Small__Icon" icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
