import styles from "./Foto.module.css";
import Image from "mui-image";

function Foto({ caminhoFoto, nomeCarro }) {
  return (
    <div className={styles.foto}>
      <Image src={caminhoFoto} alt={nomeCarro ? nomeCarro : caminhoFoto} shiftDuration={50} />
    </div>
  );
}

export default Foto;
