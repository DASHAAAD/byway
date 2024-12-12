import Logo from "@/components/logo/Logo";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            <Logo />
            <a className={styles.link} href="#">
              Byway
            </a>
          </div>
          <p className={styles.text}>
            Empowering learners through accessible and engaging online
            education. Byway is an online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.{" "}
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>Get Help</h2>
          <p className={styles.link}>Contact Us</p>
          <p className={styles.link}>Latest Articles</p>
          <p className={styles.link}>FAQ</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>Programs</h2>
          <p className={styles.link}>Art & Design</p>
          <p className={styles.link}>Business</p>
          <p className={styles.link}>IT & Software</p>
          <p className={styles.link}>Languages</p>
          <p className={styles.link}>Programming</p>
        </div>
        <div className={`${styles.item} ${styles.contacts}`}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.link}>
            Address: Saint-Petersburg, Kronverkskaya st., building 7
          </p>
          <a className={styles.link} href="tel:88005553535">
            Tel: 8(800) 555-35-35
          </a>
          <a className={styles.link} href="mailto:bywayedu@webkul.in">
            Mail: bywayedu@webkul.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
