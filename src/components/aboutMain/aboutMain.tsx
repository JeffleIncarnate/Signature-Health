import "./aboutMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons/faBabyCarriage";

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
    </main>
  );
};

export default AboutMain;
