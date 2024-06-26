import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    // <footer className="Footer">
    //   <div className="Name">
    //     <h2>Signature Health</h2>
    //   </div>

    //   <div className="SectionRight">
    //     <div className="Links">
    //       <a href="/about">About Us</a>
    //       <a href="/services">Our Services</a>
    //       <a href="/contact">Contact Us</a>
    //     </div>
    //     <div className="Chat">
    //       <p>Contact Us</p>
    //       <div className="Chat__Socials">
    //         <FontAwesomeIcon icon={faEnvelope} />
    //         <FontAwesomeIcon icon={faPhone} />
    //         <FontAwesomeIcon icon={faLinkedin} />
    //         <FontAwesomeIcon icon={faFacebook} />
    //       </div>
    //     </div>
    //   </div>
    // </footer>

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
