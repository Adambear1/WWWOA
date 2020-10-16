/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="uk-text-center uk-text-middle footer" id="footer">
      <ul class="footer-ul">
        <li class="footer-li">
          Western Washington Wrestling Officials Association
        </li>
        <li class="footer-li">
          <a href="tel:5555555555" target="_blank">
            (555)-555-5555
          </a>
        </li>
        <li class="footer-li">
          <a href="mailto:WWWOA@example.com" target="_blank">
            WWWOA@example.com
          </a>
        </li>
        <li class="footer-li">
          <a
            href="https://www.google.com/maps/place/555+E+55th+St,+Tacoma,+WA+98404/data=!4m2!3m1!1s0x5490ffc721949f95:0x36b2ef37e7e862b6?sa=X&ved=2ahUKEwiRysjuzLnsAhXLIzQIHf7-DZwQ8gEwAHoECAQQAQ"
            target="_blank"
          >
            555 E 55th St, Tacoma WA 98409
          </a>
        </li>
      </ul>
      <p className="company-name">© Quality Creations</p>
    </footer>
  );
}

export default Footer;
