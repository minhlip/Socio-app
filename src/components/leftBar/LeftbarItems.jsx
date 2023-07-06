import React from 'react'
import "./leftbar.scss"

const LeftbarItems = ({title,src}) => {

  return (
    <div className='item' >
      <img src={src} alt={title}/>
      <span>{title}</span>
    </div>
  )
}

export default LeftbarItems
