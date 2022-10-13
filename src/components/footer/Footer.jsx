import "./footer.css";
import { Twitter } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <img width="80%" src="MUN_Logo.png" alt="" />
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#services">Commitee</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Management House, D-1, Sector-V, Saltlake Electronics Complex
                Kolkata – 700 091, West Bengal, India.
                <br />
                <strong>Phone:</strong> +91 8420486351
                <br />
                <strong>Email:</strong> officialiemmun@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <div className="social-links">
                <h4>Follow Us</h4>
                <a
                  href="https://twitter.com/iemmun2022"
                  target="_blank"
                  className="twitter" rel="noreferrer"
                >
                  <i className="bi bi-twitter"><Twitter/></i>
                </a>
                <a
                  href="https://www.facebook.com/iemmun2022"
                  target="_blank"
                  className="facebook" rel="noreferrer"
                >
                  <i className="bi bi-facebook"><Facebook/></i>
                </a>
                <a
                  href="https://www.instagram.com/iemmun2022/"
                  target="_blank"
                  className="instagram" rel="noreferrer"
                >
                  <i className="bi bi-instagram"><Instagram/></i>
                </a>
                <a href="/" className="linkedin">
                  <i className="bi bi-linkedin"><Linkedin/></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>IEM MUN 2022</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
