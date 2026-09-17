import { useState } from "react";
import "./App.css";

function App() {
  let [num, setNum] = useState(0); // use state hook is used to make variable dynamically (first part is the variable from which we can call the name, and second part is the setter method by which we can set the value) | in useState(default value)

  const increase = () => {
    setNum(num + 1); // we can put conditions 
  };
  const decrease = () => {
    if(num>0){
    setNum(num - 1);
    }
  };
  const reset = () => {

    if(num==0){
      alert('Already 0')
    }else{
    setNum(0)
    }
  };

  const greet = (name) => {
    console.log("Good Morning ", name);
  };

  return (
    <>
      <center>
        <h1>Welcome to my app</h1>
        <button onClick={() => greet("user")}>Greet User</button>{" "}
        {/*we cannot direcly pass a parameter and call the function instead we use anonomys function to do that we call function inside a function and then pass our parameter */}
        <button onClick={() => greet("admin")}>Greet Admin</button>
        <h2>Sum : {num} </h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        {/* <button onClick={()=>setNum(num+1)}>Increase</button>
        <button onClick={()=>setNum(num-1)}>Decrease</button>
        <button onClick={()=>setNum(0)}>Reset</button> */}
      </center>
    </>
  );
}

export default App;
