import  '../css/ExpenseItem.css';

function ExpenseItem() {
    return ( <div className="expense-item">
        <div> March 28 th 2021 </div> 
        <div className="expense-item__description">
        <h2> Car Insurance </h2> 
        </div> <div className="expense-item__price"> $ 294.50 </div> </div >
    )
}

export default ExpenseItem;