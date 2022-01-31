import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React,{ useState } from 'react';


function Expenses(props) {

  const [filteredYear,setFilteredYear]=useState('2022');


  function filterChangeHandler(selectedYear){
    console.log("selected Year : "+selectedYear);
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter defaultYear={filteredYear} onFilterYearChange={filterChangeHandler}></ExpenseFilter>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
