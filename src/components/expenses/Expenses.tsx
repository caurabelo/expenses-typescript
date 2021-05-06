import styles from "./Expenses.module.scss";
import ExpenseItem from './ExpenseItem';
import Expense from "../../model/expense";

const Expenses: React.FC<{ expenses: Expense[] }> = (props) => {
  return (
    <div className={styles.expenses}>
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </div>
  );
};

export default Expenses;
