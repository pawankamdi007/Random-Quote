import React, { useState } from 'react';


var i=0;
var j=0;
const Random=()=>{

      let Quote="I'm about as intimidating as a butterfly.";   
    const [cQuote,uQuote]=useState(Quote);
   
    const quote=()=>{
         const arr=[
                "अर्ज किया है, चाय के कप से उठते धुए में तेरी सकल नजर आती है, ऐसे खो जाते है तेरे खयालों में कि,अकसर मेरी चाय ठंडी हो जाती है…...!!! सुप्रभात",
                "आदमी कभी भी इतना झूठा नहीं होता,अगर औरतें इतने सवाल न करती…......!!!",
                "लगी है मेहंदी पावँ में क्या घूमोगे गावं मे,असर धूप का क्या जाने जो रहते है छावं मे…...!!!",
                "किसी से दिल लगाने से अच्छा है,घर में झाड़ु पोछा लगा लो,कम से कम मम्मी तो खुश हो जाएँगी.........!!!"
        ];
     
       uQuote(arr[i]);
       i++;
       if(i>=arr.length){
           i=0;
       }
        console.log(i);
        bgColor();

    }

    let color="red";
    const [cColor,uColor]=useState(color);
  const bgColor=()=>{
      const arr1=["green","blue","pink"];
     
      uColor(arr1[j]);
      j++;
      if(j>=arr1.length){
        j=0;
    }
  }
  
    return(
            <>
                <div className="container" style={{backgroundColor:cColor}}>
                <div className="wrapper">
                    <h1 className="heading">{cQuote}</h1>
                    <button onClick={quote} className="button">Click</button>
                </div>
                
                </div>
            </>
    );
}

export default Random;