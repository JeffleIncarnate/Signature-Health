import "./aboutMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandshake,
  faAward,
  faBars,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface TeamMember {
  img: string;
  name: string;
  jobName: string;
  description: string;
}

const AboutMain = () => {
  const teamMembers: TeamMember[] = [
    {
      img: "e",
      name: "Samuel Harrington",
      jobName: "FOUNDER & CEO",
      description: "",
    },
    {
      img: "e",
      name: "Patrick Patterson",
      jobName: "CHIEF MARKETING OFFICER",
      description: "",
    },
    {
      img: "e",
      name: "Teresa Carr",
      jobName: "PRESIDENT",
      description: "",
    },
    {
      img: "e",
      name: "Chester Hill",
      jobName: "CHIEF FINANCIAL OFFICER",
      description: "",
    },
    {
      img: "e",
      name: "Eleanor Wright",
      jobName: "CHIEF TECHNOLOGY OFFICER",
      description: "",
    },
    {
      img: "e",
      name: "Addie Mann",
      jobName: "CHIEF OF STAFF",
      description: "",
    },
  ];

  const [modelOpen, setModelOpen] = useState<boolean>(false);

  return (
    <main className="AboutMain">
      <div className="Mission">
        <div className="Mission__Image">
          <img src="/pictures/aboutImage.jpeg" alt="" />
        </div>
        <div className="Mission__Text">
          <h2>Our Mission</h2>
          <p>
            Signature Health Group provides home care services to people living
            the comfort of their homes within Tauranga region. Our clients and
            their wellbeing are at the heart of our services. We offer services
            tailored to your needs as you cherish comfort of your home and enjoy
            company of your Whanau.
          </p>
        </div>
      </div>

      <div className="Values">
        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faHeart} />
          <h3>Integrity</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero!
          </p>
        </div>

        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faHeart} />
          <h3>Compassion</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero!
          </p>
        </div>

        <div className="Value">
          <FontAwesomeIcon className="Value__Icon" icon={faBarChart} />
          <h3>Equity</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero!
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
        <div className="left">
          <div className="Boss__Image">
            <img src="/pictures/person.jpg" alt="" />
          </div>

          <div className="Boss__Description__Bottom">
            <p>
              At Signature health, we understand the scope and magnitude of the
              mission we are trying to scale. Our team is guided by the
              principles of Te Tiriti, The Treaty of Waitangi and we acknowledge
              multicultural nature of Aotearoa/New Zealand. We strongly believe
              in true power of the collective and cherish all the fun it brings
              along with it.
            </p>
          </div>
        </div>

        <div className="right">
          <div className="Boss__Description__Right">
            <h2>Hey there, I'm Indeevar</h2>
            <p>
              The managing director of Signature health. My story starts in the
              early 90s in Delhi, India. My early years were colourful,
              intriguing, sometimes chaotic and often blissful. It continued
              when I landed in Aotearoa/New Zealand at the age of 18 and I fell
              in love with the place. So much so, that now I call it home.
            </p>
            <p>
              I am a Registered nurse with experience spanning almost a decade.
              My work has been entirely aged care related and has been a truly
              life changing experience. Resilience of our older generation has
              humbled me many times and their life experiences have left me
              inspired. Their wisdom is enlightening, and their warmth can be
              felt when you hold their hand. It drives me to continue to deliver
              positive outcomes for them as they live in their homes with their
              families and friends.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMain;
