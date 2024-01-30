//import Link from "next/link";
import styles from "./navbar.module.css";

type Props = {
  changeTopic: Function;
};

export default function NavBar({ changeTopic }: Props) {
  return (
    <div className={styles.container}>
      <img
        src="/images/desigualLab-vert-col-pos.svg"
        alt="logo desigual lab"
        className={styles.logo}
      />

      <div className={styles.navbar}>
        <div className={styles.navItem} onClick={() => changeTopic(1)}>
          Tópico 1
        </div>
        <div className={styles.navItem}>Tópico 2</div>
        <div className={styles.navItem}>Tópico 3</div>
        <div className={styles.navItem}>Tópico 4</div>
      </div>
    </div>
  );
}
