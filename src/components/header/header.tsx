import "./header.scss";

import Navbar from "../navbar/navbar.tsx";

const Header = () => {
  return (
    <header className="Header">
      <Navbar />

      <div className="OurTeam">
        <a href="/ourTeam">Our Team</a>
        <a href="/joinOurTeam">Join Our Team</a>
      </div>
    </header>
  );
};

export default Header;
