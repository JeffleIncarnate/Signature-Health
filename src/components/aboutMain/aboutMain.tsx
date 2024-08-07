import "./aboutMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBullhorn,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";

const AboutMain = () => {
  return (
    <main className="AboutMain">
      <div className="Values">
        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faBullhorn} />
          <h3>Integrity</h3>
          <p>
            At signature health, integrity means consistently doing the right
            thing, building trust through honest and ethical practices.
          </p>
        </div>

        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faHeart} />
          <h3>Compassion</h3>
          <p>
            Compassion drives us to provide empathetic, patient-centered care
            that respects their individuality and their lived experiences.
          </p>
        </div>

        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faBarChart} />
          <h3>Equity</h3>
          <p>
            We are committed to equity, ensuring everyone receives fair and
            appropriate access to high-quality healthcare services.
          </p>
        </div>
      </div>

      <div className="Commitment">
        <h2>Commitment</h2>

        <p>
          At Signature Health, we are committed to ensuring that every
          individual we serve receives dignified, culturally appropriate care
          that honours their unique identity and respects their inherent rights.
          We stand as allies in the pursuit of holistic well-being for all,
          fostering a compassionate environment where the spirit of the Treaty
          flourishes, and every individual’s tikanaga is valued.
        </p>
      </div>

      <div className="Boss">
        <div className="top">
          <div className="top__image">
            <img src="/pictures/indeevar.jpeg" alt="" />
          </div>
          <div className="top__description">
            <h2>Message from Managaing Director</h2>
            <div>
              <p>
                Hey there I'm Indeevar Duhan. My story starts in the early 90s
                in Delhi, India. My early years were colourful, intriguing,
                sometimes chaotic and often blissful. It continued when I landed
                in Aotearoa/New Zealand at the age of 18 and I fell in love with
                the place. So much so, that now I call it home.
              </p>
              <p>
                I am a Registered nurse with experience spanning almost a
                decade. My work has been entirely aged care related and has been
                a truly life changing experience. Resilience of our older
                generation has humbled me many times and their life experiences
                have left me inspired. Their wisdom is enlightening, and their
                warmth can be felt when you hold their hand. It drives me to
                continue to deliver positive outcomes for them as they live in
                their homes with their families and friends.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <p>
            At Signature health, we understand the scope and magnitude of the
            mission we are trying to scale. Our team is guided by the principles
            of Te Tiriti, The Treaty of Waitangi and we acknowledge
            multicultural nature of Aotearoa/New Zealand. We strongly believe in
            true power of the collective and cherish all the fun it brings along
            with it.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMain;
