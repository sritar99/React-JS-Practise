import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React,{ useState } from 'react';

function ExpenseItem(props) {

  
  let title=props.title;


  function clickHandler() {
    title='Updated';

  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* we should not keep clickHandler()  if we keep that then only once it will trigger  if we remove those braces then whenever the user clicked it will trigger*/}
    </Card>
  );
}

export default ExpenseItem;
