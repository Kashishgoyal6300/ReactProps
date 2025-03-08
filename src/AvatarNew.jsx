import React, { useState } from 'react'

const AvatarNew = () => {
    const [todos,setTodos]=useState(['todo 1 ' , 'todo 2']);
  return (
    <div>
      {todos.map((ele,idx)=> <li key={idx}>{ele}</li>)}
    </div>
  )
}

export default AvatarNew;
