import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import logo2 from "../../assets/images/logo2.png";

function Footer() {
  return (
    <footer className="footer-section">
      <section className="footer-item1 flex">
        <div className="nav-logo">
          <img src={logo2} alt="logo2" />
        </div>
        <div>
          <ul className="footerlinks flex">
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <form>
          <input type="text" placeholder="Type email here" />
          <button className="bttn bttn-primary">Send</button>
        </form>
      </section>
      <section className="footer-item2 flex">
        <h5>Cerebrum &copy; 2020. All rights reserved.</h5>
        <div className="footer-icons">
          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaFacebook />
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
