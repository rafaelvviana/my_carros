import styles from "./AnuncioCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NumberFormat from "react-number-format";
import MyFormLink from '../form/MyFormLink';
import MyFormCurrencyText from '../form/MyFormCurrencyText';

function AnuncioCard({ anuncio }) {
  return (
    <Card sx={{ maxWidth: 300 }} className={styles.anuncio_card}>
      
      <CardMedia
        component="img"
        height="250"
        image={anuncio.foto_principal}
        alt={anuncio.carro.nome}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {anuncio.carro.nome} - {anuncio.carro.modelo} <br />            
          <MyFormCurrencyText valor={anuncio.valor} />          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span>Marca:</span> {anuncio.carro.marca} <br />
          <span>Ano Fabrição:</span> {anuncio.carro.ano_fabricacao}
          <br />
          <span>Ano Modelo:</span> {anuncio.carro.ano_modelo}
          <br />
          <span>Cor:</span> {anuncio.carro.cor}
          <br />
          <span>Portas:</span> {anuncio.carro.portas}
          <br />
          <span>Km:</span> {anuncio.carro.km}
          <br />
          <span>Acessórios:</span> {anuncio.carro.acessorios}
          <br />
          <span>Obs:</span> {anuncio.obs}
          <br />
        </Typography>
        <MyFormLink link={`/anuncioDetalhe/${anuncio.id}`} text="Ver mais" />
      </CardContent>
    </Card>
  );
}

export default AnuncioCard;
