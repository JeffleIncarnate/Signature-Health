import "./header.scss";

import Navbar from "../navbar/navbar.tsx";

const Header = () => {
  return (
    <header className="Header">
      <Navbar />

      <div className="Header__Text">
        <h1>SIGNATURE</h1>
        <h2>HEALTH</h2>

        <img src="/pictures/circle.svg" alt="" />
      </div>

      <div className="OurTeam">
        <a href="/ourTeam">Our Team</a>
        <a href="/joinOurTeam">Join Our Team</a>
      </div>
    </header>
  );
};

export default Header;
