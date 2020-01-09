import React from 'react'
import Expenseitem from './Expenseitem'
import {MdDelete } from "react-icons/md";

const Expenselist = ({expenses}) => {
    return (
        <>
        {/* <ul className="list">
            {
                expenses.map((expense)=>{
                    return <Expenseitem key={expense.id} expense={expense}/>
                })
            }
        </ul> 
        {
            expenses.length > 0 && <button className="btn">clear expenses <MdDelete className="md-btn" /> </button>
        } */}
            
        </>
    )
}

export default Expenselist
