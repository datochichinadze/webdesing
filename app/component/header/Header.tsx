import Search from "../search/Search";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.containers}>
          <div className={styles.container}>
            <div>
              <Image
                src="/porsche.png"
                alt="photo"
                width={70}
                height={70}
                className={styles.porscheImage}
              />
            </div>
            <div className={styles.headerParagrapContainer}>
              <p className={styles.headerParagrapStyle}>Home</p>
              <p className={styles.headerParagrapStyle}>Service</p>
              <p className={styles.headerParagrapStyle}>Fleet</p>
              <p className={styles.headerParagrapStyle}>FAQ</p>
              <p className={styles.headerParagrapStyle}>Contact</p>
            </div>
            <div className={styles.searchContainer}>
              <Search />
              <Image
                src="/user.png"
                alt="photo"
                width={24}
                height={24}
                className={styles.imageStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
