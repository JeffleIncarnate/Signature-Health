import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Links">
        <a href="/about">About Us</a>
        <i>•</i>
        <a href="/services">Our Services</a>
        <i>•</i>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="Socials">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </footer>
  );
};

export default Footer;
