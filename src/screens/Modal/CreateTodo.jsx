import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import FormInput from '../../components/Form/FormInput'
import './CreateTodo.scss'

const CreateTodo = ({ setOpenCreateModal, setAllTodo }) => {
  const [todoForm, setTodoForm] = useState({
    date: '',
    category: '',
    activity: '',
    error: ''
  })

  const handleTextInput = (event, key) => {
    setTodoForm(oldState => ({
      ...oldState,
      [key]: event.target.value
    }))
  }

  const processTodoCreation = async () => {
    setTodoForm(oldState => ({
      ...oldState,
      error: ''
    }))
    const { date, category, activity } = todoForm
    if (!date || !category || !activity) {
      setTodoForm(oldState => ({
        ...oldState,
        error: 'All fields are required'
      }))
      return
    }
    await setAllTodo(oldState => [
      ...oldState,
      {
        id: oldState[oldState.length - 1].id + 1,
        date,
        category,
        activity,
        isDone: false
      }
    ])
    setOpenCreateModal(false)
  }

  return (
    <div className={'modal_container'}>
      <div className='inner_modal'>
        <p className='error_text'>{todoForm.error}</p>
        <FormInput
          label='Activity'
          onChange={e => handleTextInput(e, 'activity')}
          value={todoForm.activity}
        />
        <FormInput
          label='Date'
          onChange={e => handleTextInput(e, 'date')}
          value={todoForm.date}
          type='datetime-local'
        />
        <FormInput
          label='Category'
          onChange={e => handleTextInput(e, 'category')}
          value={todoForm.category}
        />
        <Button className='' onClick={processTodoCreation} text={'Create'} />
        <Button
          className='cancel_button'
          onClick={() => setOpenCreateModal(false)}
          text={'Cancel'}
        />
      </div>
    </div>
  )
}

export default CreateTodo
