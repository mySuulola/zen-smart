import React from 'react'
import Button from '../components/Button/Button'
import './Todo.scss'

const DisplayText = ({ label, text }) => (
  <div className='py_5'>
    <p className='label'>{label}</p>
    <h4 className='title'>{text}</h4>
  </div>
)

const TodoDetails = ({ todoDetails, setIsDetailsPage, handleDeleteItem }) => {
  const handleGoBack = () => {
    return setIsDetailsPage({ value: false, selectedItem: null })
  }
  return (
    <div className='todo_details_container'>
      <DisplayText label={'Activity'} text={todoDetails.activity} />
      <DisplayText
        label={'Date'}
        text={new Date(todoDetails.date).toGMTString()}
      />
      <DisplayText label={'Category'} text={todoDetails.category} />
      <DisplayText
        label={'Status'}
        text={todoDetails.isDone ? 'Completed' : 'In-progress'}
      />

      <div>
        <Button
          isOutline={true}
          className='delete_button'
          onClick={handleDeleteItem}
          text={'Delete'}
        />
        <Button
          isOutline={true}
          className='grey_button'
          onClick={handleGoBack}
          text={'Go Back'}
        />
      </div>
    </div>
  )
}

export default TodoDetails
