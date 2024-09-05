import './App.css';
import { useState } from 'react';

function BoxSpinner(){
  
  const [rotate, setRotate] = useState(0);

  return(
  <div className="heroPage">
      <Box rotate={rotate} />                        
      <Spinner rotation={setRotate} />
  </div>
  );                                                 //Porps go weeeeeeeeeeeeee
}

function Box({ rotate }){                            //Dont forget the proppppp man i hate props
  const myStyle = {
    transform : `rotate(${rotate}deg)`               //Add string for valuesss onlyyyyyyyyyyyyyyyyy
  };
  return <div className="box" style={myStyle}></div>;
}

function Spinner({ rotation }){                      // params/props need destructurizing every fucking timee broooooooooo
  return(
  
  <form>
      <input
        type="range"
        className="slider"
        min="0"
        max="360"
        onChange={(e) => rotation(e.target.value)}  //Dont forget the fucking equal to
      />

  </form>
  );
}


export default function App(){
  return <BoxSpinner />;
}
