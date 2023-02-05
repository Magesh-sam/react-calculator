import React,{useState} from 'react';
import './App.css';


function App() {
  const [result, setResult] = useState("")
  const [errormsg, setErrormsg] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
    setErrormsg("");
}
const clear = () => {
    setResult("");
    setErrormsg("");

}
const backspace = () => {
    result==="Error" ? setResult("") :
    setResult(result.slice(0, -1)); // Or -1
    setErrormsg("");

}
const calculate = () => {
    try {
        setResult(eval(result).toString());
    } catch(err) {
        
      let newerr = "Error, Please provide the correct input!"
      setErrormsg(newerr);
        
    }  
    

}
 
const handleError = () =>{
  setErrormsg("")
}

  return (
    <>
    <div className="calculator-grid">
      <h1>Calculator</h1> 
      <div className='output'>
        <div className='current-operand'>{result}</div>
      </div>
      <button className='span-two' onClick={clear} >AC</button>
      <button onClick={backspace}>DEL</button>
      <button value={"/"} onClick={handleClick} >&divide;</button>
      <button value={"1"} onClick={handleClick} >1</button>
      <button value={"2"} onClick={handleClick} >2</button>
      <button value={"3"} onClick={handleClick} >3</button>
      <button value={"*"} onClick={handleClick} >&times;</button>
      <button value={"4"} onClick={handleClick} >4</button>
      <button value={"5"} onClick={handleClick} >5</button>
      <button value={"6"} onClick={handleClick} >6</button>
      <button value={"+"} onClick={handleClick} >+</button>
      <button value={"7"} onClick={handleClick} >7</button>
      <button value={"8"} onClick={handleClick} >8</button>
      <button value={"9"} onClick={handleClick} >9</button>
      <button value={"-"} onClick={handleClick} >-</button>
      <button value={"."} onClick={handleClick} >.</button>
      <button value={"0"} onClick={handleClick} >0</button>
      <button className='span-two' onClick={calculate} >=</button>
      <p className='errormsg' onClick={handleError} >{errormsg}</p>
    </div>
    </>
  );
}

export default App;
