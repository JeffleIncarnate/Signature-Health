import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="relative flex gap-24 bg-green px-24 py-16 text-white">
      <p className="absolute bottom-4 left-4">
        Powered by{" "}
        <Link href={"https://dhruvrayat.com"} className="text-gold">
          Dhruv
        </Link>
      </p>

      <div className="flex-1">
        <h3 className="font-heading text-4xl font-bold">Signature Health</h3>
      </div>

      <div className="h-64 w-[3px] bg-white"></div>

      <div className="flex flex-[2] gap-8">
        <div className="w-1/2 space-y-2">
          <h4 className="font-heading text-xl font-bold">Navigation</h4>
          <hr className="h-[3px] border-none bg-white" />
          <div>
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="w-1/2 space-y-2">
          <h4 className="font-heading text-xl font-bold">Services</h4>
          <hr className="h-[3px] border-none bg-white" />
          <div>
            <p>Personal Care</p>
            <p>Long Term Care</p>
            <p>Respite Care</p>
            <p>Home Help</p>
            <p>Companionship</p>
            <p>Medication Oversight</p>
            <p>Disability Support</p>
            <p>Specialised Care</p>
          </div>
        </div>
      </div>

      <div className="h-64 w-[3px] bg-white"></div>

      <div className="flex-1 space-y-2">
        <h4 className="font-heading text-xl font-bold">Services</h4>
        <hr className="h-[3px] border-none bg-white" />
        <div className="flex gap-4">
          <div className="cursor-pointer rounded-full bg-gray-500 p-2 transition-colors hover:bg-gold">
            <FontAwesomeIcon
              className="aspect-square w-6 text-white"
              icon={faLinkedin}
            />
          </div>

          <div className="cursor-pointer rounded-full bg-gray-500 p-2 transition-colors hover:bg-gold">
            <FontAwesomeIcon
              className="aspect-square w-6 text-white"
              icon={faFacebook}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
