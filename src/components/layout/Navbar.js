import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/" className={styles.link}>
          Carros
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
