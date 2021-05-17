import { useState } from 'react';
import './App.css';


function App() {

  const [result, updateResult] = useState("0");

  return (
    <main>
      <section id="calculator">
        <div className="resultField">{result}</div>
        <form id="buttonArea">
          <button type="button" className="operator" onClick={() => {updateResult(result + " + ");}} > + </button>
          <button type="button" className="operator" onClick={() => {updateResult(result + " - ");}} > - </button>
          <button type="button" className="operator" onClick={() => {updateResult(result + " * ");}} > × </button>
          <button type="button" className="operator" onClick={() => {updateResult(result + " / ");}} > ÷ </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "7" : result + "7");}} > 7 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "8" : result + "8");}} > 8 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "9" : result + "9");}} > 9 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "4" : result + "4");}} > 4 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "5" : result + "5");}} > 5 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "6" : result + "6");}} > 6 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "1" : result + "1");}} > 1 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "2" : result + "2");}} > 2 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "3" : result + "3");}} > 3 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "0" : result + "0");}} > 0 </button>
          <button type="button" className="number" onClick={() => {updateResult(result === "0" ? "." : result + ".");}} > . </button>
          <button type="button" className="clear" onClick={() => {updateResult("0");}}> AC </button>
          <button type="button" className="equal" onClick={() =>  {updateResult(eval(result));}} > = </button>       
        </form>
      </section>
    </main>
  );
}

export default App;
