import  '../css/ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate=new Date(2021,10,26);
    const expenseTitle='Car Insurance';
    const expenseAmount=294.67;
    return ( <div className="expense-item">
        <div> {props.date }</div> 
        <div className="expense-item__description">
        <h2> {props.title}</h2> 
        </div> <div className="expense-item__price"> {props.amount} </div> </div >
    )
}

export default ExpenseItem;