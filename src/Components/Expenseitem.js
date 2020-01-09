import React from 'react'
import { MdEdit,MdDelete } from 'react-icons/md';

function Expenseitem({expense}) {
    const {id,charge,amount}=expense;
    return (
        <li>
         <div className="info">
           <span className="expense">{charge}</span>
           <span className="expense">{amount}</span>
       </div>
       <div>
          <button clasName="edit-btn" aria-label="edit button"><MdEdit/></button> 
       </div>
       <div>
          <button clasName="clear-btn" aria-label="delete button">
          <MdDelete />
          </button> 
       </div>
        </li>
    )
}

export default Expenseitem
