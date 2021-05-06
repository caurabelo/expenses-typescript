import Expense from "../../model/expense";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.scss";

const ExpenseItem: React.FC<{ expense: Expense }> = (props) => {
  return (
    <div className={styles["expense-item"]}>
      <ExpenseDate date={props.expense.date} />
      <div className={styles["expense-item__description"]}>
        <h2>{props.expense.title}</h2>
        <div className={styles["expense-item__price"]}>
          ${props.expense.amount}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
