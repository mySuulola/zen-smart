import React from 'react'
import './Button.scss'

const Button = ({ className, color, width, onClick, text, isOutline }) => {
  const styles = {
    button: {
      backgroundColor: color,
      width: width
    }
  }
  return (
    <button
      style={styles.button}
      className={`button ${
        isOutline === true ? 'outline_button' : 'solid_button'
      } ${className ?? ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
