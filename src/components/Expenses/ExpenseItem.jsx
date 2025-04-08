import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card.jsx'
//Korrastatud 
const ExpenseItem = (props) => {
    return (
    <Card className='expense-item'>
        <div>
            <ExpenseDate date={props.data.date}/>
        </div>
        <div className='expense-item__description'>
            <h2>{props.data.title}</h2>
        </div>
        <div className='expense-item__price'>{props.data.price}</div>
    </Card>

    )
}

export default ExpenseItem