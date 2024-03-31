import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpense] = useState([
    {
      id: 1,
      description: "",
      amount: 0,
      category: "",
    },
  ]);

  return (
    <>
      <Form
        setData={(data) => {
          setExpense([
            ...expenses,
            {
              id: data.id,
              description: data.description,
              amount: data.amount,
              category: data.category,
            },
          ]);
        }}
      ></Form>
      {/* {console.log(expenses)} */}
      <ExpenseList
        data={expenses}
        onDelete={(id) => setExpense(expenses.filter((item) => item.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
