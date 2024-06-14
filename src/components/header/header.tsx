import "./header.scss";

import Navbar from "../navbar/navbar.tsx";

const Header = ({ path }: { path: string }) => {
  return (
    <>
      <header className="Header">
        <Navbar path={path} />
        <div className="OurTeam">
          <a href="/ourTeam">Our Team</a>
          <a href="/joinOurTeam">Join Our Team</a>
        </div>
      </header>
    </>
  );
};

export default Header;
