import React from 'react'
import "./Button.css"
const Button24 = (prop) => {
  return (
    <button className="button-24" style={{
        backgroundColor: prop.bg
    }}>{prop.text}</button>
  )
}

export default Button24;