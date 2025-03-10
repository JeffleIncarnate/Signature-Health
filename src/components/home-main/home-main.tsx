import "./home-main.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBullhorn,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const HomeMain = () => {
  return (
    <main className="HomeMain">
      <div className="AboutUs">
        <h2>About us</h2>
        <p>
          Signature Health Group provides home care services to people living in
          the comfort of their homes within the Tauranga region. Our clients and
          their wellbeing are at the heart of our services. We offer services
          tailored to your needs so you can cherish the comfort of your home
          while enjoying the company of your Whānau. Our dedicated team of
          professional caregivers understands the importance of maintaining
          independence, dignity, and quality of life. Whether you need
          assistance with daily activities, personal care, or companionship, we
          are here to support you every step of the way. At Signature Health
          Group, we are committed to providing compassionate, reliable care that
          allows you to live life to the fullest, surrounded by the people and
          environment you love.
        </p>
      </div>

      <div className="Values">
        <h2>Our Values</h2>

        <section>
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
        </section>
      </div>

      <div className="Commitment">
        <h2>Our commitment</h2>

        <p>
          At Signature Health, we are committed to ensuring that every
          individual we serve receives dignified, culturally appropriate care
          that honours their unique identity and respects their inherent rights.
          We stand as allies in the pursuit of holistic well-being for all,
          fostering a compassionate environment where the spirit of the Treaty
          flourishes, and every individuals tikanaga is valued. Our team is
          Guided by the enduring principles of Te Tiriti (The Treaty of
          Waitangi) and a steadfast commitment to Equity. We strive to provide
          exceptional home care services that reflect the values of Partnership,
          Participation and Protection outlined in the Treaty.
        </p>
      </div>

      <div className="Boss">
        <div className="top">
          <div className="top__image">
            <Image
              src="/pictures/indeevar.webp"
              alt="Picture of Indeevar Duhan, Managaing Director of Signature Health"
              fill={true}
              style={{ borderRadius: "1rem", height: "100%" }}
            />
          </div>
          <div className="top__description">
            <h2>Message from Managaing Director</h2>
            <div>
              <p>
                Hey there I&apos;m Indeevar Duhan. My story starts in the early
                90s in Delhi, India. My early years were colourful, intriguing,
                sometimes chaotic and often blissful. The bliss continued when I
                landed in Aotearoa/New Zealand at the age of 18 and I fell in
                love with the place. So much so, that now I call it home. I am a
                Registered nurse with experience spanning almost a decade. My
                work has been entirely aged care related and it has been a truly
                life changing experience. Resilience of our older generation has
                humbled me many times and their life experiences have left me
                inspired. Their wisdom is enlightening, and their warmth can be
                felt when you hold their hand. It drives me to continue to work
                with them in community and home care environment where they
                cherish their homes and families. At Signature health, our goal
                is to provide excellent healthcare to our clients in the comfort
                of their homes. We cater to unique need of each individual and
                consistently work with them to understand their changing needs.
                We aspire to become largest and most trusted home care provider
                in New Zealand in the coming years.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <p>
            We are aware of the scope and magnitude of the mission we are trying
            to achieve. We strongly believe in true power of the collective and
            cherish all the fun it brings along with it. Our team is guided by
            the principles of Te Tiriti, The Treaty of Waitangi and we
            acknowledge multicultural nature of Aotearoa/New Zealand. It’s a
            combination that will enable us to achieve our mission and we are
            confident of delivering positive outcomes for people we serve.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
