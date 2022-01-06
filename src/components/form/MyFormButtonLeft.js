import styles from "./MyFormButtonLeft.module.css";

function MyFormButtonLeft({ handle }) {
  return (
    <button onClick={handle}>
      <img src="/assets/images/left.png" alt="Scroll Left" />
    </button>
  );
}

export default MyFormButtonLeft;
