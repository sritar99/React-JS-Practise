import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
//import React,{ useState } from 'react';

function ExpenseItem(props) {

  //to update or do any changes in the component contents we should use React HOOKS 
  //////const [title,setTitle]=useState(props.title);
  // these are called as React HOOKS which they all are start with 'use' and they should be only called inside of the functions  
  //useState will always returns exactly 2 elements 1st one is the old one and 2nd is the updated one
  


  // function clickHandler() {
  //   setTitle('Updated!');
  //   //Calling the HOOK useState
  //   console.log("Title Updated!");
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
      {/* we should not keep clickHandler()  if we keep that then only once it will trigger  if we remove those braces then whenever the user clicked it will trigger*/}
    </Card>
  );
}

export default ExpenseItem;
