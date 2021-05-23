import React from 'react'
import './FloatingButton.scss'
const FloatingButton = ({ handleOpenModal }) => {
  return (
    <button onClick={handleOpenModal} className='floating_button'>
      +
    </button>
  )
}

export default FloatingButton
