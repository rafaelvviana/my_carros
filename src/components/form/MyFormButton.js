import styles from "./MyFormButton.module.css";

function MyFormButton({ text, handleClick }) {
  return (
    <button onClick={handleClick} className={styles.my_form_button}>
      {text}
    </button>
  );
}

export default MyFormButton;
