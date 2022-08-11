import './contact.css'
import { GeoAlt} from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';

import React from 'react'

export default function Contact() {
  return (
    <section id="contact" style={{backgroundColor:" white"}} className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Contact Us</h3>
          <p>
            You can connect with us for further information using any of the
            following channels
          </p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt"><GeoAlt/></i>
              <h3>Address</h3>
              <address>
                Management House, D-1, Sector-V, Saltlake Electronics Complex
                Kolkata – 700 091, West Bengal, India.
              </address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone"><Phone/></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+91 9988776655">+91 9988776655</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope"><Envelope/></i>
              <h3>Email</h3>
              <p><a href="mailto:info@iemcal.com">officialiemmun@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="form">

          <div className="text-center">
            <a type="submit" href="mailto:officialiemmun@gmail.com"
              className="btn btn-outline-success  animate__animated animate__fadeInUp">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
