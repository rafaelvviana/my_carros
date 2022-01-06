import MyFormTextWithLabel from "../form/MyFormTextWithLabel";
import MyFormTextTitle from "../form/MyFormTextTitle";
import styles from "./CardDetalhes.module.css";

function CardDetalhes({ anuncio }) {
  return (
    <div className={styles.card_detalhes}>
      <div className={styles.card_detalhes_titulo}>DETALHES</div>
      
      <div className={styles.card_detalhes_corpo}>
        <div className={styles.card_detalhes_item}>
          <MyFormTextWithLabel label="Marca" texto={anuncio.carro.marca} />
          <MyFormTextWithLabel label="KM" texto={anuncio.carro.km} />
          <MyFormTextWithLabel
            label="Ano-Modelo"
            texto={`${anuncio.carro.ano_fabricacao} / ${anuncio.carro.ano_modelo}`}
          />
          <MyFormTextWithLabel label="Cor" texto={anuncio.carro.cor} />
          <MyFormTextWithLabel label="Portas" texto={anuncio.carro.portas} />
        </div>
        
        <div className={styles.card_detalhes_item}>
          <MyFormTextTitle title="ACESSORIOS" />
          <MyFormTextWithLabel label="" texto={anuncio.carro.acessorios} />
        </div>
        
        <div className={styles.card_detalhes_item}>
          <MyFormTextTitle title="Observações" />
          <MyFormTextWithLabel label="" texto={anuncio.obs} />
        </div>
      </div>
    </div>
  );
}

export default CardDetalhes;
