import styles from "./AnuncioLista.module.css";
import { useEffect, useState } from "react";
import AnuncioCard from "../anuncioLista/AnuncioCard";
import Container from "../layout/Container";

function AnuncioLista() {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/anuncios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAnuncios(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container customClass="start">
      <div className={styles.anuncio_lista}>
        {anuncios.length > 0 &&
          anuncios.map((anuncio) => (
            <AnuncioCard anuncio={anuncio} key={anuncio.id} />
          ))}
      </div>
    </Container>
  );
}

export default AnuncioLista;
