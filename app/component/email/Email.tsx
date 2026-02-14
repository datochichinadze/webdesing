import styles from "./Email.module.css";
import Image from "next/image";

const Email = () => {
  return (
    <>
      <div>
        <input type="email" placeholder="Eamil ..." className={styles.inputStyle} />
        <div className={styles.imageStyleContainer}>
            <Image src='/send.png' alt="photo" width={20} height={20} />
        </div>
      </div>
    </>
  );
};
export default Email;
