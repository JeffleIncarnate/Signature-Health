import "./servicesMain.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Service {
  heading: string;
  text: string;
  itemsServiceHas: string[];
}

const ServicesMain = () => {
  const services: Service[] = [
    {
      heading: "PERSONAL CARE",
      text: "We offer personal cares including showering, dressing, toileting, and personal hygiene.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem"],
    },
    {
      heading: "HELP AT HOME",
      text: "We can help you with general household cleaning, laundry, shopping, vacuuming, ironing, and companionship.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
    },

    {
      heading: "RESPITE CARE",
      text: "Need a break from looking after your loved one? We can help with taking over care needs of your loved one, or work in tandem so you have some time for selfcare too!",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
    },
    {
      heading: "MEDICATION MANAGEMENT",
      text: "We can help you with medication administration, supervision and reminders.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
    },
    {
      heading: "PRIVATE CARE",
      text: "Need help but do not qualify for funded care? We are here to help at competitive rates as per your need.",
      itemsServiceHas: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
    },
    {
      heading: "DISABILITY SUPPORT",
      text: "Take disability head on while you enjoy your home environment. Get in touch for assistance with your specific needs.",
      itemsServiceHas: ["Lorem", "Lorem"],
    },
  ];

  return (
    <main className="ServicesMain">
      <div className="Services">
        <h2>SERVICES WE OFFER</h2>

        <div className="ServiceWrapper">
          {services.map((item) => (
            <Service
              heading={item.heading}
              text={item.text}
              itemsServiceHas={item.itemsServiceHas}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

function Service({ heading, itemsServiceHas }: Service) {
  return (
    <div className="Service">
      <h3>{heading}</h3>

      <ul>
        {itemsServiceHas.map((item) => {
          return (
            <div className="ServiceItem">
              <FontAwesomeIcon className="ServiceItemIcon" icon={faCheck} />
              <p>{item}</p>
            </div>
          );
        })}
      </ul>

      <button>Learn More</button>
    </div>
  );
}

export default ServicesMain;
