import styles from "./CardFoto.module.css";
import MyFormCurrencyText from "../form/MyFormCurrencyText";
import Foto from "./Foto";
import MyFormButtonLeft from "../form/MyFormButtonLeft";
import MyFormButtonRight from "../form/MyFormButtonRight";
import { useState } from "react";

function CardFoto({ titulo, valor, fotos }) {
  
  const inicioListaFotos = 0;
  const fimListaFotos = fotos.length - 1;

  const [caminhoFoto, setCaminhoFoto] = useState(fotos[inicioListaFotos]);
  const [indiceFoto, setIndiceFoto] = useState(inicioListaFotos);

  const handleLeftClick = (e) => {
    e.preventDefault();
    let novoIndice = indiceFoto - 1;    
    if (novoIndice < inicioListaFotos) {
      novoIndice = fimListaFotos;
    }
    setIndiceFoto(novoIndice);
    setCaminhoFoto(fotos[indiceFoto]);
  };

  const handleRightClick = (e) => {
    e.preventDefault();    
    let novoIndice = indiceFoto + 1;
    if(novoIndice > fimListaFotos) {   
      novoIndice = inicioListaFotos;
    }
    setIndiceFoto(novoIndice);
    setCaminhoFoto(fotos[novoIndice]);
  };

  return (
    <div className={styles.card_foto}>
      <div className={styles.card_foto_titulo}>
        {titulo}
        <MyFormCurrencyText valor={valor} />
      </div>
      <Foto caminhoFoto={caminhoFoto.urlFoto} nomeCarro={titulo} />
      <div className={styles.buttons}>
          <MyFormButtonLeft handle={handleLeftClick} />
          <MyFormButtonRight handle={handleRightClick} />
        
      </div>
      <br />
    </div>
  );
}

export default CardFoto;
