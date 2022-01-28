import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 159, date: new Date(2022, 1, 27) },
    { title: "Bike Insurance", amount: 29, date: new Date(2022, 1, 27) },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
