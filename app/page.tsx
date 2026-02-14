import AuthPage from "./auth/authPage";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <AuthPage />
    </div>
  );
}
