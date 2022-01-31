import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpenseData(expenseData);
        //calling the Function using props that which is passed from App Component to this component and thereby passing the object which has data to that function

    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
            {/* here we are passing the complete saveExpenseDataHandler function to ExpenseForm component, so through props we can access the function there by we can execute this function in ExpenseForm component*/}
        </div>
    );
}

export default NewExpense;