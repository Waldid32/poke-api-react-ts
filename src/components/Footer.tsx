import { Link } from "react-router-dom";
import styles from "./footer.module.css";

// Assets
import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footerLink} to="/pokemons">
        <img className={styles.footerIcon} src={PokemonPic} alt="Pokemon" />
        Pokemons
      </Link>
      <Link
        className={styles.footerLink}
        onClick={(event) => event.preventDefault()}
        to="/items"
      >
        <img className={styles.footerIcon} src={ItemsPic} alt="Pokemon" />
        Items
      </Link>
      <Link
        className={styles.footerLink}
        onClick={(event) => event.preventDefault()}
        to="/location"
      >
        <img className={styles.footerIcon} src={LocationPic} alt="Pokemon" />
        Mapa
      </Link>
    </footer>
  );
};

export default Footer;
