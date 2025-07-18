import styles from "./Item.module.css";

const Item = ({ fooditem }) => {
  // let { fooditem } = props;
  return (
    <li className={`${styles["pk-item"]} list-group-item`}>
      <span className={styles["pk-span"]}>{fooditem}</span>
    </li>
  );
};
export default Item;
