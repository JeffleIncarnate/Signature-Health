import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__Links">
        <div>
          <a href="/about">About Us</a>
        </div>
        <div>
          <a href="/services">Our Services</a>
        </div>
        <div>
          <a href="/news">News</a>
        </div>
        <div>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
