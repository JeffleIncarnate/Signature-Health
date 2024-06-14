import "./navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ path }: { path: string }) => {
  return (
    <>
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
          <FontAwesomeIcon
            onClick={() => {
              let entireNav = document.getElementById("Navbar__Side");

              entireNav!.style.width = "100lvw";
            }}
            className="Navbar__Small__Icon"
            icon={faBars}
          />
        </div>
      </nav>

      <div id="Navbar__Side">
        <FontAwesomeIcon
          onClick={() => {
            let entireNav = document.getElementById("Navbar__Side");

            entireNav!.style.width = "0";
          }}
          className="Navbar__Side__Icon"
          icon={faXmark}
        />
        <a href="/about">About Us</a>
        <a href="/services">Our Services</a>
        <a href="/contact">Contact Us</a>
      </div>
    </>
  );
};

export default Navbar;
