import Image from "next/image";

export const WhoAreWe = () => {
  return (
    <div className="flex h-[550px] w-full items-center justify-center gap-16">
      <div className="w-3/5 space-y-4">
        <h2 className="font-heading text-6xl font-bold">Who are We!</h2>

        <p className="font-text">
          Signature Health Group provides home care services to people living in
          the comfort of their homes within the Tauranga region. Our clients and
          their wellbeing are at the heart of our services. We offer services
          tailored to your needs so you can cherish the comfort of your home
          while enjoying the company of your Whānau. Our dedicated team of
          professional caregivers understands the importance of maintaining
          independence, dignity, and quality of life. Whether you need
          assistance with daily activities, personal care, or companionship, we
          are here to support you every step of the way. At Signature Health
          Group, we are committed to providing compassionate, reliable care that
          allows you to live life to the fullest, surrounded by the people and
          environment you love.
        </p>
      </div>

      <div className="relative h-full w-2/5 rounded-2xl">
        <Image
          src={"/gloves.jpg"}
          fill={true}
          alt="gloves"
          style={{ objectFit: "cover", borderRadius: "inherit" }}
        />
      </div>
    </div>
  );
};
