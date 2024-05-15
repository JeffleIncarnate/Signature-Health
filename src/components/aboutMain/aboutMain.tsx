import "./aboutMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandshake,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const AboutMain = () => {
  return (
    <main className="AboutMain">
      <div className="AboutUs">
        <div className="AboutUs__Text">
          <h2>ABOUT US</h2>
          <p>
            Signature Health Group provides home care services to people living
            the comfort of their homes within Tauranga region. Our clients are
            at the heart of our services. We offer services tailored to their
            needs as they cherish comfort of their homes and enjoy company of
            their Whanau.
          </p>
        </div>

        <div className="AboutUs__Image">
          <img src="/pictures/aboutImage.jpeg" alt="" />
        </div>
      </div>

      <div className="Values">
        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faHeart} />
          <h3>Compassion</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero!
          </p>
        </div>

        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faHandshake} />
          <h3>Trust</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero!
          </p>
        </div>

        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faAward} />
          <h3>Excellence</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero!
          </p>
        </div>
      </div>

      <div className="Philosophy">
        <h2>Philosophy</h2>

        <p>“Genuine care for all stakeholders”</p>
      </div>

      <div className="Mission">
        <div className="MissionWrapper">
          <h2>Mission</h2>

          <p>
            At Signature health, our mission is to enable our clients to
            continue living enriched lives within their communities, in comforts
            of their home and surrounded by their whanau.
          </p>
        </div>
      </div>

      <div className="Vision__Commitment">
        <p>
          Our vision is to become largest home care and community support
          service in New Zealand.
        </p>
        <p>
          At Signature Health, we are committed to ensuring that every
          individual we serve receives dignified, culturally appropriate care
          that honours their unique identity and respects their inherent rights.
          We stand as allies in the pursuit of holistic well- being for all,
          fostering a compassionate environment where the spirit of the Treaty
          flourishes, and every individual’s tikanaga is valued.
        </p>
      </div>
    </main>
  );
};

export default AboutMain;
