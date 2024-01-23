import React from "react";

import styles from "../../components/Footer/footer.module.css";

import WLogo from "../../src/assets/footer/WhiteLogo.svg";
import facebook from "../../src/assets/footer/Facebook.svg";
import instagram from "../../src/assets/footer/Instagram.svg";
import twitter from "../../src/assets/footer/Twitter.svg";

const Footer = () => {
  return (
    <>
      <nav className={styles.InfBase}>
        <div className={styles.footerContainer}>
          <div className={styles.wlogoContainer}>
            <a href="#">
              <img src={WLogo} alt="WLogo" />
            </a>
            <p className={styles.paragraph}>MyRide Inc., 2nd Floor, New York, NY 10016</p>

            <div className={styles.MediaContainer}>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>

            <div className={styles.aboutInfContainer}>
              <ul className={styles.footerList}>
                <li>
                  <h2 className={styles.footerSubtitle}>Company</h2>
                </li>
                <li className={styles.footerInfo}>
                  <p>About Us</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>News</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>Careers</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>How we work</p>
                </li>
              </ul>

              <ul className={styles.footerList}>
                <li>
                  <h2 className={styles.footerSubtitle}>Support</h2>
                </li>
                <li className={styles.footerInfo}>
                  <p>FAQ</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>US Office</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>Asia Office</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>Help Center</p>
                </li>
              </ul>

              <ul className={styles.footerList}>
              <li>
                  <h2 className={styles.footerSubtitle}>More</h2>
                </li>
                <li className={styles.footerInfo}>
                  <p>Become a partner</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>Partner Support</p>
                </li>
                <li className={styles.footerInfo}>
                  <p>Mobile app links</p>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
