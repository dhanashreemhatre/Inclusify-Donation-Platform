import React from "react";
import "./footer.css";
import Image from "next/image";
import Copyright from "./Image/icons8-copyright-32.png";
const page = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-items">
          <div className="footer_content">
            <div className="footer_content_heading">
              <h1>Lets be part of goodness.</h1>
              <p>Because Goodness starts with you</p>
              <h2>#StartFromYou</h2>
            </div>
            <div className="circle_footer">
              <p>Lets join with us</p>
            </div>
          </div>
          <footer className="links_footer">
            <div className="logo_footer">
              <h1>INCLUSIFY</h1>
              <p>Providing hope to unite goodness</p>
            </div>
            <div className="main_links">
              <div className="company">
                <h1>Sitemap</h1>

                <li>About</li>
                <li>Partner</li>
                <li>Agenda</li>
              </div>
              <div className="company">
                <h1>Join Us</h1>

                <li>Volunteer</li>
                <li>Careers</li>
                <li>Sponsership</li>
              </div>
              <div className="company">
                <h1>Company</h1>

                <li>About Us</li>
                <li>Blog</li>
                <li>Testimonial</li>
              </div>
            </div>
          </footer>
          <div className="copyright">
            <p>© 2023, Inclusify All right reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
