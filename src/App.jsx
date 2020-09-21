import React, { useState } from 'react';
import './App.css';



const App=()=> {

  const bgcolor="#8e44ad";

  const [cColor,uColor]=useState(bgcolor);
  let count=0;
  
  const bgColor=()=>{
    const arr=["#11cf43","#7742d4","#473e57","#cf1515"];

    uColor(arr[count]);
      count=count+1;
      console.log(count)

  }

  return (
    <div className="div" style={{backgroundColor:cColor}}>
     <button className="button" onClick={bgColor}>Change Color</button>
    </div>
  );
}

export default App;
