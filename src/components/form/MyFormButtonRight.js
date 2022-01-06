import styles from "./MyFormButtonRight.module.css";

function MyFormButtonRight({ handle }) {
  return (
    <button onClick={handle}>
      <img src="/assets/images/right.png" alt="Scroll Right" />
    </button>
  );
}

export default MyFormButtonRight;
