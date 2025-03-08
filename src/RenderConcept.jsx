import React, { useState } from 'react'

const RenderConcept = () => {
    const[isEditing,setIsediting]=useState(false);
  return (
    <div>
        {
            (isEditing)?<input type="text" />:<p> Some todo</p>
        }
        <br />
        <button onClick={()=>setIsediting(!isEditing)}>Click</button>
    </div>
  )
}

export default RenderConcept
