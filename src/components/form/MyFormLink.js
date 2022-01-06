import styles from "./MyFormLink.module.css";
import { Link } from "react-router-dom";

function MyFormLink({ link, text }) {
  return <Link to={link} className={styles.my_form_link}>{text}</Link>;
}

export default MyFormLink;
