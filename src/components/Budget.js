import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        // setNewBudget(event.target.value);

        if(event.target.value > 20000) {
            alert("The budget cannot exceed £20000");
            return
        } 

        if(event.target.value < expenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return
        }
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
            
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
