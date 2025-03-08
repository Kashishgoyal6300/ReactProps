import React from 'react'

const Avatar = ({src,width,height,children}) => {
  return (
    <div>
        <img src={src} width={width} height={height}/>
        {children}
    </div>
  )
}

export default Avatar
