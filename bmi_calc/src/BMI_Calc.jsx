import React, { useMemo, useState } from "react";

const name = prompt("what's your name : ")

const BMI_Calc = () => {
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(58);

  const output = useMemo(()=>{
    const calculateHeigth = height/100;
    const heightSquare = calculateHeigth*calculateHeigth; 

    return (weight/heightSquare).toFixed(1);
  },[weight,height])


  const onHeightChange = (e) => {
    setHeight(e.target.value);
  }

  const onWeightChange = (e) => {
    setWeight(e.target.value);
  }

  

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <div className="weight">
        <p>WEIGHT : {weight} kgs</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="0"
          max="250"
          onChange={onWeightChange}
          />
      </div>
      <div className="height">
        <p>HEIGHT : {height} cm</p>
        <input className="input-slider" type="range" onChange={onHeightChange} step="1"
          min="0"
          max="250"/>
      </div>
      </div>
      <div className="output-section">
        <p>{name.charAt(0).toUpperCase()+name.slice(1)}'s BMI' : <span className="output">{output}</span> </p>
      </div>
  
    </main>
  );
};

export default BMI_Calc;
