import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="relative mx-auto my-6 flex w-[90%] items-center justify-center">
      <div className="absolute left-4">
        <Link href={"/"}>Home</Link>
      </div>

      <div className="space-x-4">
        <Link href={"/services"}>Services</Link>
        <Link href={"/careers"}>Careers</Link>
      </div>

      <div className="absolute right-4">
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};
