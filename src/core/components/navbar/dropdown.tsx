"use client";

type TDropdown = {
  label: string;
  href: string;
};

export const Dropdown = ({
  text,
  dropdowns,
}: {
  text: string;
  dropdowns: TDropdown[];
}) => {
  return (
    <div>
      <h2>{text}</h2>

      <div>
        {dropdowns.map((dropdown) => {
          return (
            <a key={dropdown.href} href={dropdown.href}>
              {dropdown.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
