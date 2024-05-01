import "./header.scss";

import Navbar from "../navbar/navbar.tsx";

const Header = () => {
  return (
    <header className="Header">
      <Navbar />
      <div className="Header__Wrapper">
        <h1>Signature</h1>
        <h2>Health</h2>
      </div>

      <div className="Header__Circle"></div>
    </header>
  );
};

export default Header;
