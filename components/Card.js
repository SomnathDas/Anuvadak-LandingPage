import styles from "../styles/Card.module.css";
import { RiTranslate } from "react-icons/ri";

const Card = ({ title, description, icon }) => {
  return (
    <section className={styles.card_container}>
      <div className={styles.card_info}>
        <h1 className={styles.title}>{title}</h1>

        <h2>{description}</h2>
      </div>
    </section>
  );
};

export default Card;
