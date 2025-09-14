import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
        <nav className="footer-nav">
          <a href="#about" className="footer-link">
            About
          </a>
          {" | "}
          <a href="#contact" className="footer-link">
            Contact
          </a>
          {" | "}
          <a href="#privacy" className="footer-link">
            Privacy
          </a>
        </nav>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="Facebook"
          ><i className="fab fa-facebook-f facebook-bg"></i></a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="Twitter"
          ><i className="fab fa-twitter twitter-bg"></i></a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="Instagram"
          ><i className="fab fa-instagram instagram-bg"></i></a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          ><i className="fab fa-linkedin-in linkedin-bg"></i></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer