import React from "react";
import styles from './ByCard.module.css';

interface CarCardProps {
  title: string;
  pricePerDay: string;
  imageUrl: string;
}

const ByCard: React.FC<CarCardProps> = ({ title, pricePerDay, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>{pricePerDay}</p>
      </div>
      <button className={styles.button}>Book Now</button>
    </div>
  );
};

export default ByCard;
