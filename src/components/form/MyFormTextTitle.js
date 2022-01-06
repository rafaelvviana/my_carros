import styles from "./MyFormTextTitle.module.css";

function MyFormTextTitle({ title }) {
  return (
    <div className={styles.my_form_text_title}>      
      <div>{title}</div>
    </div>
  );
}

export default MyFormTextTitle;
