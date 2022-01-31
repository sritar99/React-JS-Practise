import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{ useState } from 'react';
function App() {
  
  const expenses = [
    { id:'e1', title: "Car Insurance", amount: 159, date: new Date(2022, 1, 27) },
    { id:'e2', title: "Bike Insurance", amount: 29, date: new Date(2022, 1, 27) },
  ];

  //const [enteredExpenses,setAddedNewExpenses]=useState(expenses);

  function addExpenseHandler(newExpenses){
    

  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler}></NewExpense>
      {/* here we are passing the complete addExpenseHandler function to NewExpense component, so through props we can access the function there by we can execute this function in NewExpense component*/}

      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
