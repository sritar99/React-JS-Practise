import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{ useState } from 'react';

const SampleExpenses = [
  { id:'e1', title: "Car Insurance", amount: 159, date: new Date(2022, 1, 27) },
  { id:'e2', title: "Bike Insurance", amount: 29, date: new Date(2022, 2, 27) },
];

// unique id should be used if not we will encounter the problem : when we add a new item to the object without key then react will add the item to that object & and all the items of that object will be again called & updated.so to reduce this we will add key(unique id ) to the object so when we add new item react only respond on that particular item
// by using unique ID the object will get refreshed in the more efficient way.
// refer video 66 from the course.


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
