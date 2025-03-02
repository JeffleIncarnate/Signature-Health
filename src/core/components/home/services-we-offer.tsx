import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { SERVICES, Service as TService } from "@/core/data/services";

export const ServicesWeOffer = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="font-heading text-6xl font-bold">
          Here are some of our services we Offer
        </h2>
      </div>

      <div className="relative flex gap-8">
        {SERVICES.map((service) => {
          return <Service service={service} key={service.name} />;
        })}
      </div>

      <div className="flex justify-center">
        <button className="flex gap-2 rounded-lg border-2 border-solid border-green bg-green30 px-16 py-4 font-bold">
          Learn More
          <FontAwesomeIcon icon={faChevronRight} className="w-2" />
        </button>
      </div>
    </div>
  );
};

const Service = ({ service }: { service: TService }) => {
  return (
    <div className="min-h-[500px] flex-1">
      <div
        className="h-full w-full space-y-4 rounded-2xl bg-white p-8"
        style={
          service.mostPopular ? { position: "relative", bottom: "1rem" } : {}
        }
      >
        <h3 className="text-center font-heading text-3xl font-bold">
          {service.name}
        </h3>
        <p>{service.description}</p>
      </div>

      {service.mostPopular && (
        <div>
          <p className="text-center">Most Popular</p>
        </div>
      )}
    </div>
  );
};
