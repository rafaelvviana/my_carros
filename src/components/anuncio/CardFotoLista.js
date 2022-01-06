import styles from './CardFotoLista.module.css'; 
import FotoLista from './FotoLista';

function CardFotoLista({fotos}) {
  return (
     <div className={styles.card_foto_lista}>         
        <FotoLista fotos={fotos} />
     </div>
  );
}

export default CardFotoLista;
