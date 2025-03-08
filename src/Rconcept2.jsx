import React, { useState } from 'react'

const Rconcept2 = () => {
    const[todos,setTodos]=useState(['todo1','todo2']);
  return (
    <div>
        <ul>
            {todos.map((todo)=>
                <li>{todo}</li>
            )}
             <button onClick={()=>setTodos([...todos,'another one'])}> CLICK</button>
        </ul>

    </div>
  )
}

export default Rconcept2
