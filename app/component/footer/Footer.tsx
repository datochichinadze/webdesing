import Email from "../email/Email";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.footerEmailContainer}>
            <Image
              src="/porsche.png"
              alt="photo"
              width={70}
              height={70}
              style={{ cursor: "pointer" }}
            />
            <div className={styles.emailContainer}>
              <p>Subscribe to the newsletter</p>
              <Email />
            </div>
          </div>
          <div className={styles.footerText}>
            <p className={styles.footerTextHeader}>Top cities</p>
            <div className={styles.footer}>
              <p className={styles.footerDownText}>New York</p>
              <p className={styles.footerDownText}>London</p>
              <p className={styles.footerDownText}>Berlin</p>
              <p className={styles.footerDownText}>Los Angeles</p>
              <p className={styles.footerDownText}>Paris</p>
            </div>
          </div>
          <div className={styles.footerText}>
            <p className={styles.footerTextHeader}>Explore</p>
            <div className={styles.footer}>
              <p className={styles.footerDownText}>Intercity rides</p>
              <p className={styles.footerDownText}>Limousine service</p>
              <p className={styles.footerDownText}>Chauffeur service</p>
              <p className={styles.footerDownText}>Private car service</p>
              <p className={styles.footerDownText}>Airport transfer</p>
            </div>
          </div>
          <div className={styles.footerText}>
            <p className={styles.footerTextHeader}>Intercity rides</p>
            <div className={styles.footer}>
              <p className={styles.footerDownText}>East Hampton - New York</p>
              <p className={styles.footerDownText}>New York - Washington</p>
              <p className={styles.footerDownText}>New York - Philadelphia</p>
              <p className={styles.footerDownText}>Abu Dhabi - Dubai</p>
              <p className={styles.footerDownText}>London - Birmingham</p>
            </div>
          </div>
        </div>
        <div className={styles.lastFooterContainer}>
          <p style={{ color: "#B9B9B9" }}>&copy; 2026 porsche</p>
          <div className={styles.footerLastTextContainer}>
            <p className={styles.footerLastText}>Terms</p>
            <p className={styles.footerLastText}>Privacy Policy</p>
            <p className={styles.footerLastText}>Legal notice</p>
            <p className={styles.footerLastText}>Accessibility</p>
          </div>
          <div className={styles.footerImageStyle}>
            <Image
              src="/facebooks.png"
              alt="photo"
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            />
            <Image
              src="/google.png"
              alt="photo"
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            />
            <Image
              src="/ios.png"
              alt="photo"
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
