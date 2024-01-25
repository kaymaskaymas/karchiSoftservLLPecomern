// Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFlag, faHome, faBuilding } from "@fortawesome/free-solid-svg-icons";
import "./ContactUs.css";

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact us using the information below.</h2>
            {/* <p>Contact us using the information below.</p> */}
            <p className="contact-info">
                <FontAwesomeIcon icon={faBuilding} className="icon" /> Karchi Softserv LLP.<br />
                <FontAwesomeIcon icon={faHome} className="icon" /> 15, Mahalakshmi Plaza, Khanapur Rd<br />
                Tilakwadi,<br />
                Belgaum, Karnataka<br />
                590006<br />
                India<br />
                <FontAwesomeIcon icon={faFlag} className="icon" /> Near RPD Cross<br /><br />

                <a href="https://www.hpworldstores.in/hp-world-karchi-softserv-llp-laptop-store-tilakwadi-belgaum-605/Home" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faHome} className="icon" /> https://www.hpworldstores.in/hp-world-karchi-softserv-llp-laptop-store-tilakwadi-belgaum-605/Home
                </a><br /><br />

                <FontAwesomeIcon icon={faPhone} className="icon" /> +918657568523
            </p>
        </div>
    );
}

export default Contact;
