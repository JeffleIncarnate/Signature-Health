import Image from "next/image";

export const Splash = () => {
  return (
    <header className="relative mx-auto h-[60lvh] w-[90%] rounded-2xl">
      <Image
        src={"/splash.webp"}
        fill={true}
        alt="Signature Health Logo"
        priority={true}
        style={{ objectFit: "cover", borderRadius: "inherit" }}
      />
    </header>
  );
};
