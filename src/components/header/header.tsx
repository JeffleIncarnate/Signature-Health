import "./header.scss";

import Navbar from "../navbar/navbar.tsx";

const Header = ({ path }: { path: string }) => {
  return (
    <>
      <header className="Header">
        <Navbar path={path} />
        <div className="OurTeam">
          <a
            href="/ourTeam"
            className={path === "/ourTeam" ? "nav__active" : ""}
          >
            Our Team
          </a>
          <a
            href="/joinOurTeam"
            className={path === "/joinOurTeam" ? "nav__active" : ""}
          >
            Join Our Team
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
