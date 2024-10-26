import React from "react";
import "../fourthSectionContact/fourthSectionContact.css";

const fourthSectionContact = () => {
  return (
    <div className="contact-fourth-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14627.479885015868!2d86.9921!3d23.6833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f77b81ed85df33%3A0x2bf3139ba2e3687!2sAsansol%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1665221486030!5m2!1sen!2sin"
          allowFullScreen={""}
          loading={"lazy"}
          referrerPolicy={"no-referrer-when-downgrade"}
        />
      </div>
    </div>
  );
};

export default fourthSectionContact;
