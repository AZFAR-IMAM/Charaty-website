import React from "react";
import Donate from "../Images/Donate.png";
import pic1 from "../Images/pic1.png";
import pic2 from "../Images/pic2.png";
import pic3 from "../Images/pic3.png";
import pic4 from "../Images/pic4.png";
import pic5 from "../Images/pic5.png";
import pic6 from "../Images/pic6.png";
import "../Footer/Footer.css";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhoneCall,
  FiTarget,
} from "react-icons/fi";
import { TiSocialGooglePlus, TiLocation } from "react-icons/ti";
function Footer() {
  return (
    <footer>
      <div className="upper-container">
        <div className="logo-container">
          {/* <img src={Donate} alt="" className="logo-footer" /> */}
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
          ></img>
          <p>
            Welcome and open yourself to your truest love this year with us!
            With the Release Process
          </p>
          <div className="button-container">
            <button>
              {" "}
              <FiFacebook size={20} />{" "}
            </button>
            <button>
              {" "}
              <FiTwitter size={20} />{" "}
            </button>
            <button>
              {" "}
              <FiInstagram size={20} />{" "}
            </button>
            <button>
              {" "}
              <TiSocialGooglePlus size={20} />{" "}
            </button>
          </div>
        </div>
        <div className="services-container">
          <h2>Services</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Causes</a>
            </li>
            <li>
              <a href="#">Latest News</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <h2>Contact</h2>
          <p>Would you have any enquiries. Please feel free to contuct us</p>
          <p>
            <FiMail /> &nbsp;aec.cse.mddanish@gmail.com
          </p>
          <p>
            {" "}
            <FiPhoneCall /> &nbsp;+91 77970 99015
          </p>
          <p>
            {" "}
            <TiLocation /> &nbsp;Asansol – Railpar
          </p>
        </div>
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="project-grid-container">
            <img src={pic1} id="first-project" alt="" />
            <img src={pic2} id="secound-project" alt="" />
            <img src={pic3} id="third-project" alt="" />
            <img src={pic4} id="fourth-project" alt="" />
            <img src={pic5} id="fifth-project" alt="" />
            <img src={pic6} id="sixth-project" alt="" />
          </div>
        </div>
      </div>
      <div className="lower-container">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
