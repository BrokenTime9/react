import './App.css';
import { useState,useEffect } from 'react';

function MultiBoxSelector(){

  const [boxNum, setBoxNum] = useState(0);
  const [sliderVal, setSliderVal] = useState([180,180,180,180]);

  console.log(boxNum);

  return(<div className="heroPage"> 
    <BoxRotator 
      boxNum={boxNum} 
      setBoxNum={setBoxNum} 
      sliderVal={sliderVal}
      setSliderVal={setSliderVal}
    /> 
    <Box 
      sliderVal={sliderVal}
    />
    </div>
  );
}

function BoxRotator(
  {boxNum,
  setBoxNum,
  sliderVal,
  setSliderVal
  }
){
  const boxTag = [];

  const handleSliderChange = (ind,event) =>{
    const newVal = [...sliderVal];
    if(ind + 1 == boxNum){
    newVal[ind] = event.target.value;
    }
    setSliderVal(newVal);

  };

  useEffect(() => {
    console.log(sliderVal)

    return () => {
      console.clear()
    }
  }, [sliderVal])
  


  for(let i = 1;i < 5;i++){
    boxTag.push(<div 
      className="box"
      onClick={()=> setBoxNum(i)}
      key={i}
      
      style={
        boxNum === i? 
          {boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"} : 
          { boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} 
      }
    ><h1>{i}</h1>
      <form>
        <input 
          type="range"
          min="0"
          max="360"
          className="slider"
          style={
            boxNum === i?
            {opacity:"1"}:
            {opacity:"0"}
          }
          onChange={(e) => handleSliderChange(i - 1,e)}
        />
      </form>
    </div>);
  }
  return<div className="boxArr">{boxTag}</div>;
}

function Box({sliderVal}){
  const boxTag = [];
  for(let i = 1;i < 5;i++){
    boxTag.push(<div className="newBox"
    style={{ 
      transform:`rotate(${sliderVal[i - 1]}deg)`,
      }}
    ></div>)
  }

  return(<div className="newBoxArr">{boxTag}</div>);
}

export default function App(){
  return <MultiBoxSelector />;
};
