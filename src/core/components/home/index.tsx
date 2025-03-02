import { WhoAreWe } from "./who-are-we";
import { Values } from "./values";
import { WhatMakesUsDifferent } from "./what-makes-us-different";
import { ServicesWeOffer } from "./services-we-offer";

export const HomeMain = () => {
  return (
    <main className="mx-auto my-16 w-[90%] space-y-36">
      <WhoAreWe />
      <Values />
      <WhatMakesUsDifferent />
      <ServicesWeOffer />
    </main>
  );
};
