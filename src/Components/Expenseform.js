import React from 'react';
import { MdSend } from "react-icons/md"

function Expenseform({charge,amount,handleCharge,handleAmount,handleSubmit}) {
    return <form onSubmit={handleSubmit}>
    <div className="form-center">
       <div className="form group">
            <label htmlFor="expense">charge</label>
            <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
       </div>
    </div>
    <div>
         <label htmlFor="amount">amount</label>  
         <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
    </div>
    <div>
    <button type="submit" className="btn">
    submit!
    <MdSend className="btn-icon" />
    </button>
    </div>
</form>
        
};

export default Expenseform
