import React from "react";
import { Link } from "react-router-dom";
import Donate from "../Images/Donate.png";
// import { BiSearch } from "react-icons/bi";
import "../Navbar/Navbar.css";
import ScrollToTop from "./scrollToTop";
import HamMenu from "./HamMenu";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="ham-menu">
          <HamMenu />
        </div>
        <div className="img-container">
          {/* <img src={CharitioLogo} id="charitioLogo" alt="" /> */}
          <img
            src={Donate}
            id="Donate_Logo_Wide"
            alt="Donate Logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
              margin: "auto",
            }}
          />
        </div>
        <div className="center-buttons">
          <div class="dropdown">
            <button className="dropbtn">
              {" "}
              <Link to="home"> Home </Link>{" "}
            </button>
            <div class="dropdown-content">
              <ul className="dropdown-content-navbar">
                <li className="hover-underline-animation">Charity</li><br/>
                <li className="hover-underline-animation">Education Charity</li>
                <li className="hover-underline-animation">Wildlife Charity</li>
                
                <li className="hover-underline-animation">
                  World Pandemic
                </li>
              </ul>
            </div>
          </div>
          <button>
            <Link to="about">About</Link>
          </button>
          <button>
            <Link to="contact">Contact</Link>
          </button>
        </div>
        <div className="right-buttons">
          <button id="donate-btn">
            <Link to="/DonationForm">Donate Now</Link>
          </button>
          <button id="search-nav">
            {/* <Link to="contact">
              <BiSearch />
            </Link> */}
            <Link to="signin">Signin</Link>
          </button>
        </div>
      </div>
      <ScrollToTop />
    </nav>
  );
}
export default Navbar;
