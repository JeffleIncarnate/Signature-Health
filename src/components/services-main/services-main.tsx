import "./services-main.scss";

import {
  faHeartBroken,
  faHome,
  faPersonCane,
  faWheelchair,
  faClock,
  faHandshake,
  faCapsules,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Service } from "@/core/types";

const ServicesMain = () => {
  const services: Service[] = [
    {
      heading: "PERSONAL CARE",
      text: "We offer personal cares including showering, dressing, toileting, and personal hygiene.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem"],
      icon: faPersonCane,
    },
    {
      heading: "LONG TERM CARE",
      text: "We provide compassionate, tailored care to help individuals effectively manage chronic conditions and maintain independence at home.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem"],
      icon: faClock,
    },
    {
      heading: "RESPITE CARE",
      text: "Need a break from looking after your loved one? We can help with taking over care needs of your loved one, or work in tandem so you have some time for selfcare too!",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
      icon: faHeartBroken,
    },
    {
      heading: "HOME HELP",
      text: "We can help you with general household cleaning, laundry, shopping, vacuuming, ironing, and companionship.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
      icon: faHome,
    },
    {
      heading: "COMPANIONSHIP",
      text: "Our companionship service offers personalised, one-on-one support to help individuals feel engaged, valued, and comfortable at home.",
      itemsServiceHas: ["Lorem", "Lorem"],
      icon: faHandshake,
    },
    {
      heading: "MEDICATION OVERSIGHT",
      text: "We Ensure safe and reliable support for individuals in managing their prescriptions, promoting health and independence in the comfort of home and community settings.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
      icon: faCapsules,
    },
    {
      heading: "DISABILITY SUPPORT",
      text: "Our disability services are designed to empower individuals with tailored support, fostering independence, inclusion, and well-being within their homes and communities.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
      icon: faWheelchair,
    },
    {
      heading: "SPECIALISED CARE",
      text: "We provide compassionate, tailored support to enhance the comfort, dignity, and quality of life for individuals with serious or terminal illnesses in the familiarity of their own homes. ",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
      icon: faGraduationCap,
    },
  ];

  return (
    <main className="ServicesMain">
      <div className="Services">
        <h2>Your comfort, Our commitment</h2>

        <div className="ServiceWrapper">
          {services.map((service) => (
            <ServiceComponent
              icon={service.icon}
              heading={service.heading}
              text={service.text}
              itemsServiceHas={service.itemsServiceHas}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>

      <div className="Service__Philosophy">
        <h2>Our Service Philosophy</h2>
        <ul>
          <li>Respectful engagements</li>
          <li>Partnership approach to care</li>
          <li>Protection of your rights</li>
          <li>Active whanau Participation</li>
        </ul>
      </div>
    </main>
  );
};

function ServiceComponent({ heading, icon, text, itemsServiceHas }: Service) {
  return (
    <div className="Service">
      <FontAwesomeIcon className="ServiceIcon" icon={icon} />
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ServicesMain;
