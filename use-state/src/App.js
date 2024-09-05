import './App.css';
import { useState } from 'react';

function BoxSpinner(){
  
  const [rotate, setRotate] = useState(0);

  return(
  <div className="heroPage">
      <Box rotate={rotate} />
      <Spinner rotation={setRotate} />
  </div>
  );
}

function Box({ rotate }){
  const myStyle = {
    transform : `rotate(${rotate}deg)`
  }
  return <div className="box" style={myStyle}></div>;
}

function Spinner({ rotation }){
  return(
  
  <form>
      <input
        type="range"
        className="slider"
        min="0"
        max="360"
        onChange={(e) => rotation(e.target.value)}
      />

  </form>
  );
}


export default function App(){
  return <BoxSpinner />;
}
