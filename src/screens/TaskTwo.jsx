import React, { Fragment } from 'react'
import Button from '../components/Button/Button'

const TaskTwo = () => {
  return (
    <Fragment>
      <h1>Task 2</h1>
      <div className='task_two_container'>
        <Button
          className='mx_10'
          color='#0b6bf2'
          text='Close Shipment'
          width={'fit-content'}
        />
        <Button
          className='mx_10'
          color='#0243eb'
          text='Close Shipment'
          width={'fit-content'}
        />
        <Button
          className='mx_10'
          color='#e9edf9'
          text='Close Shipment'
          width={'fit-content'}
        />
      </div>
      <div className='task_two_container'>
        <Button
          className='mx_10'
          color='#0b6bf2'
          text='SHOW'
          width={'fit-content'}
        />
        <Button
          className='mx_10'
          color='#0243eb'
          text='SHOW'
          width={'fit-content'}
        />
        <Button
          className='mx_10'
          color='#e9edf9'
          text='SHOW'
          width={'fit-content'}
        />
      </div>
      <div className='task_two_container'>
        <Button
          className='mx_10'
          color='#0b6bf2'
          text='GO'
          width={'fit-content'}
        />
        <Button
          className='mx_10'
          color='#0243eb'
          text='GO'
          width={'fit-content'}
        />
        <Button
          className='mx_10'
          color='#e9edf9'
          text='GO'
          width={'fit-content'}
        />
      </div>
    </Fragment>
  )
}

export default TaskTwo
