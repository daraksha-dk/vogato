import React from "react";
import "./Footer.scss";
import Facebook from "./../../assets/facebook.svg";
import Twitter from "./../../assets/twitter.svg";
import Instagram from "./../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-up">
        <div className="section-left">Vogato</div>
        <div className="section-right">
          <select className="india">
            <option>India</option>
          </select>
          <select className="eng">
            <option>English</option>
          </select>
        </div>
      </div>
      <div className="middle-section">
        <div className="first">
          <h6 class="title">Company</h6>
          <div>
            <a href="https://www.zomato.com/who-we-are">
              <p className="para">Who We Are</p>
            </a>
            <a href="https://blog.zomato.com/">
              <p className="para">Blog</p>
            </a>
            <a href="https://www.zomato.com/careers">
              <p className="para">Careers</p>
            </a>
            <a href="https://www.zomato.com/report-fraud">
              <p className="para">Report Fraud</p>
            </a>
            <a href="https://www.zomato.com/contact">
              <p className="para">Contact</p>
            </a>
            <a href="https://www.zomato.com/investor-relations">
              <p className="para">Investor Relations</p>
            </a>
          </div>
        </div>
        <div className="second">
          <h6 class="title">For Foodies</h6>
          <div>
            <a href="https://www.zomato.com/policies">
              <p class="para">Code of Conduct</p>
            </a>
            <a href="https://community.zomato.com/">
              <p class="para">Community</p>
            </a>
            <a href="https://www.zomato.com/bloggers">
              <p class="para">Blogger Help</p>
            </a>
            <a href="https://www.zomato.com/mobile">
              <p class="para">Mobile Apps</p>
            </a>
          </div>
        </div>
        <div className="third">
          <div className="up">
            <h6 class="title">For Restaurants</h6>
            <nav>
              <a href="https://www.zomato.com/partner_with_us">
                <p class="para">Add restaurant</p>
              </a>
            </nav>
          </div>
          <div className="down">
            <h6 class="title">For Enterprises</h6>
            <nav>
              <a href="https://www.zomato.com/enterprise-solutions">
                <p class="para">Zomato for Work</p>
              </a>
            </nav>
          </div>
        </div>
        <div className="fourth">
          <div>
            <h6 class="title">For You</h6>
            <nav>
              <a href="https://www.zomato.com/privacy">
                <p class="para">Privacy</p>
              </a>
              <a href="https://www.zomato.com/conditions">
                <p class="para">Terms</p>
              </a>
              <a href="https://www.zomato.com/security">
                <p class="para">Security</p>
              </a>
              <a href="https://www.zomato.com/directory">
                <p class="para">Sitemap</p>
              </a>
            </nav>
          </div>
        </div>
        <div className="fifth">
          <h6 class="title">Social links</h6>
          <div className="social-icons">
            <div className="social-logo">
              <img src={Facebook} alt="facebook" />
            </div>
            <div className="social-logo">
              <img src={Twitter} alt="twitter" />
            </div>
            <div className="social-logo">
              <img src={Instagram} alt="instagram" />
            </div>
          </div>
          <div className="app">
            <img
              alt="app"
              className="app-logo"
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
            />
          </div>
          <div>
            <img
              alt="app"
              className="app-logo"
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;