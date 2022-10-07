import { React, useState } from "react";
import Button from "./components/button";
import CalculatorTitle from "./components/calculatorTitle";
import OutputScreen from "./components/outputScreen";
import "./index.css"

function Calculator() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClick = (event) => {
    console.log(event.target.value);
    const value = event.target.value;

    if (value === "=") {
      if (question !== "") {
        let ans = "";
        try {
          ans = eval(question);
        } catch (err) {
          setAnswer("Math Error");
        }
        if (ans === undefined) setAnswer("Math Error");
        else {
          setAnswer(ans);
          setQuestion("");
        }
      }
    } else if (value === "Clear") {
      setAnswer("");
      setQuestion("");
    } else if (value === "Del") {
      let str = question;
      str = str.substr(0, str.length - 1);
      setQuestion(str);
    } else {  
      setQuestion(question + value);
    }
  };
  console.log(question, answer);
  
  return (
    <div className="frame">
      <CalculatorTitle value="Raneh's Calculator" />
      <div className="mainCalc">
        <OutputScreen question={question} answer={answer} />
        <div className="button-row">
          <Button label={"Clear"} handleClick={handleClick} style={{color:"#f4ab41"}} />
          <Button label={"Del"} handleClick={handleClick} />
          <Button label={"."} handleClick={handleClick} />
          <Button label={"/"} handleClick={handleClick} style={{backgroundColor: "#e3e9ec",color:"#f4ab41"}} />
        </div>
        <div className="button-row">
          <Button label={"7"} handleClick={handleClick} />
          <Button label={"8"} handleClick={handleClick} />
          <Button label={"9"} handleClick={handleClick} />
          <Button label={"*"} handleClick={handleClick} style={{backgroundColor: "#e3e9ec",color:"#f4ab41"}} />
        </div>
        <div className="button-row">
          <Button label={"4"} handleClick={handleClick} />
          <Button label={"5"} handleClick={handleClick} />
          <Button label={"6"} handleClick={handleClick} />
          <Button label={"-"} handleClick={handleClick} style={{backgroundColor: "#e3e9ec",color:"#f4ab41"}} />
        </div>
        <div className="button-row">
          <Button label={"1"} handleClick={handleClick} />
          <Button label={"2"} handleClick={handleClick} />
          <Button label={"3"} handleClick={handleClick} />
          <Button label={"+"} handleClick={handleClick} style={{backgroundColor: "#e3e9ec", color:"#f4ab41"}} />
        </div>
        <div className="button-row">
          <Button label={"0"} handleClick={handleClick}/>
          <Button label={"="} handleClick={handleClick} style={{backgroundColor: "#e3e9ec", color:"#f4ab41"}}/>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
