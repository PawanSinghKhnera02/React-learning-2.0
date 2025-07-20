import TodoItem from "../TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          className="pk-row"
          key={index}
          todoName={item.Name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
