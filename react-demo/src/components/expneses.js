import '../css/Expense.css';
import Card from './cards';
import ExpenseItem from './expenseItem';

function Expense(props)
{  
 return(
    <Card className="expenses">
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
    </Card>
 )
}

export default Expense;