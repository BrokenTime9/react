import './App.css';
import { useState } from 'react';

function MultiBoxSelector(){

  const [boxNum, setBoxNum] = useState(0)
  console.log(boxNum);

  return(<div className="heroPage"> 
      <Box boxNum={boxNum} setBoxNum={setBoxNum} /> 
    </div>
  );
}

function Box(
  {boxNum,
  setBoxNum}
){
  const boxTag = [];
  for(let i = 1;i < 5;i++){
    boxTag.push(<div 
      className="box"
      onClick={()=> setBoxNum(i)}
      key={i}
      
      style={
        boxNum === i? 
          {backgroundColor: "red"} : 
          {backgroundColor: "white"} 
      }
    ><p>{i}</p></div>);
  }
  return<div className="boxArr">{boxTag}</div>;
}

export default function App(){
  return <MultiBoxSelector />;
};
