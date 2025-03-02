export type Service = {
  name: string;
  description: string;
  mostPopular: boolean;
};

export const SERVICES: Service[] = [
  {
    name: "Home Help",
    description:
      "We can help you with general household cleaning, laundry, shopping, vacuuming, ironing, and companionship.",
    mostPopular: false,
  },
  {
    name: "Personal Care",
    description:
      "We offer personal cares including showering, dressing, toileting, and personal hygiene.",
    mostPopular: true,
  },
  {
    name: "Respite Care",
    description:
      "Need a break from looking after your loved one? We can help with taking over care needs of your loved one, or work in tandem so you have some time for selfcare too!",
    mostPopular: false,
  },
  {
    name: "Specialised Care",
    description:
      "We provide compassionate, tailored support to enhance the comfort, dignity, and quality of life for individuals with serious or terminal illnesses in the familiarity of their own homes.",
    mostPopular: false,
  },
];
