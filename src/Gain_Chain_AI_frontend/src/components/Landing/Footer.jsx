import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles

export default function Footer() {
  return (
    <MDBFooter className="bg-[#002C72] text-white text-center py-4">
      <MDBContainer className="d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="d-flex align-items-center">
          <img src="src/images/neuro.png" alt="Gain Chain Logo" style={{ height: '50px', marginRight: '15px' }} />
          <h5 className="mb-1" style={{ color: '#A9DFF1' }}>Gain Chain AI</h5>
          <div className="text-centre">
            <p style={{ color: '#A9DFF1', fontSize: '1rem' }}>Where AI and Blockchain Forge the Future</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </MDBBtn>
        </section>
      </MDBContainer>

      {/* Email Display */}
      <p className="mb-4" style={{ fontSize: '1rem', color: '#B0B0B0' }}>
        Email: <a href="mailto:gainchainai@gmail.com" style={{ color: '#40E0D0' }}>gainchainai@gmail.com</a>
      </p>

      {/* Footer Bottom */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Gain Chain. All rights reserved.
      </div>
    </MDBFooter>
  );
}
