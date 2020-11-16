import styles from "./styles.module.scss";

export default function IndexPage() {
  return (
    <div className={styles.body}>
      <div className={styles.topBar}>Beirut Marketing</div>
      <img width="300px" src="/img/marketing.png" alt="" />{" "}
    </div>
  );
}
