import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faElevator,
  faPersonHarassing,
} from "@fortawesome/free-solid-svg-icons";

export type Value = {
  icon: IconDefinition;
  name: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    icon: faHeart,
    name: "compassion",
    description:
      "Compassion drives us to provide empathetic, patient-centered care that respects their individuality and their lived experiences.",
  },
  {
    icon: faPersonHarassing,
    name: "integrity",
    description:
      "At signature health, integrity means consistently doing the right thing, building trust through honest and ethical practices.",
  },
  {
    icon: faElevator,
    name: "equity",
    description:
      "We are committed to equity, ensuring everyone receives fair and appropriate access to high-quality healthcare services.",
  },
];
