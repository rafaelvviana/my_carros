import styles from "./MyFormTextWithLabel.module.css";

function MyFormTextWithLabel({ label, texto}) {
  return (
    <div className={styles.my_form_text}>
      <div>
        <span>{label}</span> 
      </div>
      <div>
        {texto}
      </div>
    </div>
  );
}

export default MyFormTextWithLabel;
