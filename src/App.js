import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{ useState } from 'react';

const SampleExpenses = [
  { id:'e1', title: "Car Insurance", amount: 159, date: new Date(2022, 1, 27) },
  { id:'e2', title: "Bike Insurance", amount: 29, date: new Date(2022, 2, 27) },
];


function App() {
  

  const [enteredExpenses,setAddedNewExpenses]=useState(SampleExpenses);

  function addExpenseHandler(newExpenses){
    setAddedNewExpenses((prevState) => {
      return([newExpenses, ...prevState])
    });
  };
  console.log(enteredExpenses);

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler}></NewExpense>
      {/* here we are passing the complete addExpenseHandler function to NewExpense component, so through props we can access the function there by we can execute this function in NewExpense component*/}

      <Expenses expenses={enteredExpenses}></Expenses>
    </div>
  );
}

export default App;
