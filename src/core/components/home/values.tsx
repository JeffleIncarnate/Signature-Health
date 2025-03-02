import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Value as TValue, VALUES } from "@/core/data/values";

export const Values = () => {
  return (
    <div className="flex w-full flex-wrap gap-8">
      {VALUES.map((value) => {
        return <Value key={value.name} value={value} />;
      })}
    </div>
  );
};

export const Value = ({ value }: { value: TValue }) => {
  return (
    <div className="flex-1 space-y-4 rounded-2xl bg-white p-8">
      <div className="bg-green30 w-fit rounded-3xl border-2 border-solid border-green p-4">
        <FontAwesomeIcon icon={value.icon} className="w-12" />
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-3xl font-bold capitalize">
          {value.name}
        </h2>
        <p>{value.description}</p>
      </div>
    </div>
  );
};
