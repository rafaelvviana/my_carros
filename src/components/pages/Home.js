import styles from "./Home.module.css";
import Container from "../layout/Container";
import AnuncioLista from '../anuncioLista/AnuncioLista';

function Home() {
  return (
    <div className={styles.home}>
      <Container customClass="start">
        <AnuncioLista />
      </Container>
    </div>
  );
}

export default Home;
