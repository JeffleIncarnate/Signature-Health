import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Name">
        <h2>Signature Health</h2>
      </div>

      <div className="SectionRight">
        <div className="Links">
          <p>About</p>
          <p>Services</p>
          <p>News</p>
        </div>
        <div className="Chat">
          <p>Lets Chat! 👋</p>
          <p>support@signaturehealth.co.nz</p>
          <div className="Chat__Socials">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
