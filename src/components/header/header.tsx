import "./header.scss";

import Navbar from "../navbar/navbar.tsx";

const Header = () => {
  return (
    <header className="Header">
      <Navbar />
      <div className="Header__Wrapper">
        <h1>SIGNATURE</h1>
        <h2>HEALTH</h2>
      </div>
    </header>
  );
};

export default Header;
