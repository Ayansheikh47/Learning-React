import './App.css'

function App() {

  function greet(){
     console.log("Hello from greet function");
  }

  let myName = "Sakib"

  let num1=10; // if not declared then white screen appears, so always check console for errors   
  let num2=20;

  // in {} brackets we only write things that return something 
  return (
    <>
    <button onClick={greet}>greet me</button>
    <h1>My name is {myName}</h1>
    <h2>Add : {num1+num2}</h2>
    </>
  )
}

export default App
