import NumberFormat from 'react-number-format';
import styles from "./MyFormCurrencyText.module.css";

function MyFormCurrencyText({ valor }) {
  return (
    <NumberFormat
      value={valor}
      className=""
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      prefix={"R$ "}
      renderText={(value, props) => <div {...props}>{value}</div>}
    />
  );
}

export default MyFormCurrencyText;
