import React from "react";
import "../styles/Footer.css";
import { FaHome, FaInfoCircle, FaPhone, FaShieldAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h2 className="footer-label">Links</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li className="clickables">
            <FaHome style={{ marginRight: "0.5rem" }} />{" "}
            <Link to="/home">Home</Link>
          </li>
          <li className="clickables">
            <FaInfoCircle style={{ marginRight: "0.5rem" }} />{" "}
            <Link to="/about">About</Link>
          </li>
          <li className="clickables">
            <FaPhone style={{ marginRight: "0.5rem" }} />{" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="clickables">
            <FaShieldAlt style={{ marginRight: "0.5rem" }} />{" "}
            <Link to="/pvc">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      {/* darkline */}
      <div
        style={{
          width: "0.5vw",
          backgroundColor: "#EBC26D",
          borderRadius: "1rem",
          alignSelf: "stretch",
        }}
      ></div>

      <div className="footer-section">
        <h2 className="footer-label">Get in touch</h2>
        <input type="email" placeholder="Your email address" />
        <textarea
          name=""
          id=""
          cols="25"
          rows="5"
          placeholder="Enter mail here..."
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        ></textarea>
        <button>Send</button>
      </div>

      {/* darkline */}
      <div
        style={{
          width: "0.5vw",
          backgroundColor: "#EBC26D",
          borderRadius: "1rem",
          alignSelf: "stretch",
        }}
      ></div>

      <div className="footer-section">
        <h2 className="footer-label">Follow Us</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            className="clickables"
            onClick={() => {
              window.open("https://google.com", "_blank");
            }}
          >
            <FaFacebook
              color="#3b5998"
              size={24}
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Facebook
          </li>
          <li
            className="clickables"
            onClick={() => {
              window.open("https://google.com", "_blank");
            }}
          >
            <FaInstagram
              color="#E4405F"
              size={24}
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Instagram
          </li>
          <li
            className="clickables"
            onClick={() => {
              window.open("https://google.com", "_blank");
            }}
          >
            <FaTwitter
              color="#1DA1F2"
              size={24}
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Twitter
          </li>
          <li
            className="clickables"
            onClick={() => {
              window.open("https://google.com", "_blank");
            }}
          >
            <FaLinkedin
              color="#0077b5"
              size={24}
              style={{ marginRight: "0.5rem" }}
            />{" "}
            LinkedIn
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
