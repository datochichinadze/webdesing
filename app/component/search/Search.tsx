import styles from "./Search.module.css";
import Image from "next/image";

const Search = () => {
  return (
    <>
      <div className={styles.inputDivStyle}>
        <input
          type="search"
          placeholder="Search _"
          className={styles.inputStyle}
        />
        <Image
          src="/searchs.png"
          alt="photo"
          width={20}
          height={20}
          className={styles.imageStyle}
        />
      </div>
    </>
  );
};
export default Search;
