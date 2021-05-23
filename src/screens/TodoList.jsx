import React from 'react'
import Button from '../components/Button/Button'
import './Todo.scss'

const TodoList = ({ items, onItemsClick, onViewItem }) => {
  const handleMarkAsDone = (item, event) => {
    if (item.isDone) return
    onItemsClick(item, event)
  }

  return (
    <div>
      <div className='table_row display_none'>
        <h5 className='flex_1'>Activity</h5>
        <h5 className='flex_1 text_center'>Action</h5>
      </div>
      {items
        .sort((a, b) => a.id - b.id)
        .map(todo => (
          <div key={todo.id} className='table_row'>
            <div>
              <p className={`title ${todo.isDone && 'completed_text'}`}>
                {todo.activity}
              </p>
              <small className='date'>
                {new Date(todo.date).toGMTString()}
              </small>
            </div>
            <div className='inner_row'>
              <Button
                isOutline={true}
                className={
                  todo.isDone === false ? 'action_button' : 'grey_button'
                }
                onClick={e => handleMarkAsDone(todo, e)}
                text={todo.isDone === false ? 'Mark as Done' : 'Completed'}
              />
              <Button
                isOutline={true}
                className='edit_button'
                onClick={e => onViewItem(todo)}
                text={'View Details'}
              />
            </div>
          </div>
        ))}
      {items.length === 0 && <p className='text_center'>No data</p>}
    </div>
  )
}

export default TodoList
