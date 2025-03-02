import {
  Difference as TDifference,
  DIFFERENCES,
} from "@/core/data/differences";

export const WhatMakesUsDifferent = () => {
  return (
    <div className="flex w-full gap-16">
      <div className="flex-1">
        <h2 className="font-heading text-6xl font-bold">
          What makes us{" "}
          <span className="font-fancy font-normal">Different</span>
        </h2>
      </div>

      <div className="flex-1 space-y-12">
        <div className="w-full">
          <p>
            At Signature Health, we are committed to ensuring that every
            individual we serve receives dignified, culturally appropriate care
            that honours their unique identity and respects their inherent
            rights.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 grid-rows-2 gap-6">
          {DIFFERENCES.map((difference) => {
            return (
              <Difference difference={difference} key={difference.number} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Difference = ({ difference }: { difference: TDifference }) => {
  return (
    <div>
      <h3>{difference.number}.</h3>
      <p>{difference.difference}</p>
    </div>
  );
};
