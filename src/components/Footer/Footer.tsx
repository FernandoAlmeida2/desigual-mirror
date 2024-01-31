import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img
        src="/images/footer-logos.png"
        alt="logos do rodapé"
        className={styles.logos}
      />
    </footer>
  );
}