import ByCard from "../component/byCard/ByCard";
import Card from "../component/card/Card";
import { cars } from "../component/card/props/Props";
import { byCars } from "../component/byCard/props/Props";
import Header from "../component/header/Header";
import styles from "./page.module.css";
import Footer from "../component/footer/Footer";

const Page = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.cardDivContainer}>
        <p className={styles.carCategory}>Car Category</p>
        <div className={styles.cardContainer}>
          {cars.map((car) => (
            <Card key={car.id} title={car.title} image={car.image} />
          ))}
        </div>
      </div>

      <div className={styles.byCardMainContainer}>
        <div className={styles.headerCard}>
          <p className={styles.trendStyle}>Trend vehichles</p>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonView}>View all</button>
          </div>
        </div>
        <div className={styles.byCardContainer}>
          {byCars.map((carItem) => (
            <ByCard
              key={carItem.title}
              title={carItem.title}
              pricePerDay={carItem.pricePerDay}
              imageUrl={carItem.imageUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
