import React from 'react';
import './App.css';

const Counter=()=>{
    let hello=0;
    var color;
    const Inc=()=>{
        const arr=["#11cf43","#7742d4","#473e57","#cf1515"];
        color=arr[hello];
        hello++;
        console.log(hello);
    }


    return(
        <>
            <div className="div" style={{backgroundColor:"cf1515"}}>
            <h1>{hello}</h1>
            <button onClick={Inc}>Click</button>
            </div>
        </>
    );
}

export default Counter;