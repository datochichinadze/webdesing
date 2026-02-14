import styles from "./Card.module.css";
import Image from "next/image";
import { CardProps } from "./props/Props";


const Card = ({ title, image }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <Image src={image} alt={title} fill className={styles.image} priority />

      <button className={styles.button}></button>
    </div>
  );
};

export default Card;
