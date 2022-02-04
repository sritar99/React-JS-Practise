import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let FilteredContent = <p>No Expenses Found.</p>;

  if (props.getFilteredContent.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses!.</h2>;
  }

  if (props.getFilteredContent.length > 0) {
    FilteredContent = props.getFilteredContent.map(function (expense) {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );
    });
  }

  return <ul className="expenses-list">{FilteredContent}</ul>;
}

export default ExpensesList;
