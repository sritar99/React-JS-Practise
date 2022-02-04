import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  function filterChangeHandler(selectedYear) {
    console.log("selected Year : " + selectedYear);
    setFilteredYear(selectedYear);
  }
  {/* Rendering the expense items dynamically using filter function to get the contents of particular year*/}
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let FilteredContent= <p>No Expenses Found.</p> ;
  if(filteredExpenses.length > 0){
    FilteredContent=filteredExpenses.map(function (expense) {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );
    })
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onFilterYearChange={filterChangeHandler}
        ></ExpenseFilter>
        
{/* Rendering the expense items dynamically corressponding to the particular year if thers no data it'll show no expenses */}
        {FilteredContent}

        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem> */}
        {/* Hardcoded of rendering the items in expense items from props  */}
      </Card>
    </div>
  );
}

export default Expenses;
