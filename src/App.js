import React,{useState} from 'react';
import Expenselist from './Components/Expenselist';
import Alert from './Components/Alert'
import Expenseform from './Components/Expenseform'
import uuid from "uuid/v4";
import './App.css';

const initialExpenses = [
    // { id: uuid(), charge: "rent", amount: 1600 },
    // { id: uuid(), charge: "car payment", amount: 400 },
    // {
    //   id: uuid(),
    //   charge: "credit card bill ",
    //   amount: 1200
    // },
    // {
    //   id:uuid(),charge:"beer",amount:400},{
    //     id:uuid(),charge:"grossary",amount:100
    //   }
  ];
  // console.log("vdhdbjb",initialExpenses)

function App() {
  const [expenses,setExpenses]=useState(initialExpenses)
  //single expense
  const[charge,setcharge]=useState('');
  const[amount,setAmount]=useState('');

  const handleCharge=(e)=>{
    
    setcharge(e.target.value)
  };
  const handleAmount=(e)=>{
    setAmount(e.target.value)
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(charge!=='' && amount >0)
    {
     const singleExpense={id:uuid(),charge,amount};
      setExpenses([...expenses,singleExpense])
      setcharge("");
      setAmount("");
    }
    else{
      //handle alert
    }



  }
   
  return (
    <div className="App">
      <header className="App-header">
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
      <Expenseform charge={charge}
      amount={amount} 
      handleAmount={handleAmount} 
      handleCharge={handleCharge}
      handleSubmit={handleSubmit}
      />
      <Expenselist expenses={expenses}/>
      
      </main>
      <h1>
         total spending:<span className="total">
              ${expenses.reduce((acc,curr)=>{
                return (acc=acc+ parseInt(curr.amount)); 
              },0)}
        </span>
      </h1>
      </header>
    </div>
  );
}

export default App;
