import styles from "./styles.module.scss";

export default function IndexPage() {
  return (
    <div className={styles.body}>
      <div className={styles.topBar}>Beirut Food</div>
      <img className={styles.img} src="/img/menu.png" alt="" />{" "}
    </div>
  );
}
