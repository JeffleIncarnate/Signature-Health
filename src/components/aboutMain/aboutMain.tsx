import "./aboutMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandshake,
  faAward,
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
          <h2>Mission / Vision</h2>

          <p>
            At Signature health, our mission is to enable our clients to
            continue living enriched lives within their communities, in comforts
            of their home and surrounded by their whanau.
          </p>

          <p>
            Our vision is to become largest home care and community support
            service in New Zealand.
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

      <div className="Honour">
        <h2>Honouring Te Tiriti</h2>

        <p>
          We at Signature Health are guided by the enduring principles of the
          Treaty of Waitangi and a steadfast commitment to equity. We believe in
          providing exceptional home care services that reflect the values of
          partnership, participation, and protection outlined in the Treaty.
        </p>
      </div>

      <div className="Team">
        <h2>The Team</h2>

        <div className="TeamWrapper">
          {teamMembers.map((member) => (
            <TeamMember
              img={member.img}
              description={member.description}
              jobName={member.jobName}
              name={member.name}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

function TeamMember({ img, name, jobName }: TeamMember) {
  return (
    <div className="TeamMember">
      <img src="/pictures/person.jpg" alt="" />

      <h3>{name}</h3>

      <p>{jobName}</p>
    </div>
  );
}

export default AboutMain;
