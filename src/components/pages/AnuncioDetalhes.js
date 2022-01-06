import styles from "./AnuncioDetalhes.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";

import Container from "../layout/Container";
import CardFoto from "../anuncio/CardFoto";
import CardDetalhes from "../anuncio/CardDetalhes";
import CardFotoLista from "../anuncio/CardFotoLista";

function AnuncioDetalhes() {
  const { id } = useParams();
  const [anuncio, setAnuncio] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/anuncios/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAnuncio(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {anuncio.id ? (
        <div className={styles.anuncio_detalhes_container}>
          
          <div className={styles.anuncio_detalhes_linha}>
            <div className={styles.anuncio_detalhes_foto}>
              <CardFoto
                titulo={`${anuncio.carro.nome} ${anuncio.carro.modelo}`}
                valor={anuncio.valor}
                fotoCapa={anuncio.foto_principal}
                fotos={anuncio.fotos}
              />
            </div>
            <div className={styles.anuncio_detalhes_dados}>
              <CardDetalhes anuncio={anuncio} />
            </div>
          </div>

          <div className={styles.anuncio_detalhes_linha}>
            <CardFotoLista fotos={anuncio.fotos} />
          </div>
        </div>
      ) : (
        <p>Sem anúncios!</p>
      )}
    </>
  );
}

export default AnuncioDetalhes;
