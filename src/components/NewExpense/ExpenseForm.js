import "./ExpenseForm.css";
import React,{ useState } from 'react';
function ExpenseForm() {

    //one way
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    //or 
    //2nd way
    // const [userInput,setUserINput]=useState({
    //     enteredTitle:'',
    //     setEnteredDate:'',
    //     setEnteredAmount:''
    // });

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
        //console.log(event.target.value);
        //2nd way
        // setUserINput((prevState)=>{
        //    return{ ...prevState,enteredTitle:event.target.value};
        // });

    };
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
        //console.log(event.target.value);
        //2nd way
        // setUserINput((prevState)=>{
        //    return{ ...prevState,enteredAmount:event.target.value};
        // });
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
        //console.log(event.target.value);
        //2nd way
        // setUserINput((prevState)=>{
        //    return{ ...prevState,enteredDate:event.target.value};
        // });
    }

    function submitHandler(event){
        event.preventDefault();
        //Actually when user submits a form the page is reloaded so to avoid that we can use preventDefault.

        //Gathering the updated details entered by the user after submitting the form
        const newExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(newExpenseData);
        //clearing all the details which are entered and show it as empty for entering the new data.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01'  value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
      </div>
      <div className="'new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
