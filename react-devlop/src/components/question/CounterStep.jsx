// CREATE COUNTER OF Increment/Decrement WITH STEP

import React , {useState} from "react";
import MyButton from "./MyButton";

const CounterStep = () => {
    const [step , setStep] = useState(1);
    const [count, setCount] = useState(0);

    function inputChange(e){
        let val = parseInt(e.target.value)
        setStep(val)
    }

  return <div>
    <span className="text-9xl">{count}</span>
    <button className="btn" onClick={() =>  setCount(count => count + step)}>increment by step</button>
    <button className="btn" onClick={() =>  setCount(count => count - step)}>decrement by step</button>
    <button className="btn" onClick={() => setCount(0)}>Reset</button>
    <input 
    type="number"
    value={step}
    onChange={inputChange}

    />
 {/* <MyButton variant="primary" size="large" onClick={() => console.log("click")} className="m-6">Increment</MyButton> */}
  </div>;
};

export default CounterStep;






