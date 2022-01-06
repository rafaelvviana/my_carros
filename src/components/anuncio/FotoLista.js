import styles from "./FotoLista.module.css";

import Container from "../layout/Container";
import { ImageList, ImageListItem } from '@mui/material';

function FotoLista({ fotos }) {

  return (
    <Container customClass="start">
      {fotos.length > 0 ? (
        <div className={styles.foto_lista}>
          <div >
            <ImageList
              sx={{ width: 1000 }}
              cols={5}
              rowHeight={164}
            >
              {fotos.map((foto, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${foto.urlFoto}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${foto.urlFoto}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={foto.urlFoto}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          
        </div>
      ) : (
        <p>Sem fotos</p>
      )}
    </Container>
  );
}

export default FotoLista;
