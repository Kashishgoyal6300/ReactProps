import React, { useState } from 'react'
let z=10;
const Counter = () => {
   // let z=10;
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
  return (
    <div>
        {/* COunt z:{z}
        <br />
        <button onClick={()=>z+=1} >Inc</button> */}

  
        <p>Count:{x} is {x%2==0?'even':'odd'}</p> 
        
        <button onClick={()=>setX(x+1)} >Inc</button>
        <button onClick={()=> setX(x-1)}>Dec</button>

    </div>
  )
}

export default Counter
