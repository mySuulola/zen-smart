import React, { useState, useEffect, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Loader } from './components/Loaders/Loaders'
import ErrorFallBack from './components/ErrorFallBack/ErrorFallBack'
import TodoList from './screens/TodoList'
import TodoDetails from './screens/TodoDetails'
import FloatingButton from './components/FloatingButton/FloatingButton'
import CreateTodo from './screens/Modal/CreateTodo'
import './App.css'
import TaskTwo from './screens/TaskTwo'
import { Fragment } from 'react'

const data = [
  {
    id: 1,
    date: new Date(),
    category: 'Learning',
    activity: 'Learn Golang',
    isDone: false
  },
  {
    id: 2,
    date: new Date(),
    category: 'Relax',
    activity: 'Play chess with Michael',
    isDone: false
  }
]

const App = () => {
  const [isDetailsPage, setIsDetailsPage] = useState({
    value: false,
    selectedItem: null
  })
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [allTodo, setAllTodo] = useState([])

  const handleItemSelected = async (todo, event) => {
    const otherItems = allTodo.filter(item => item.id !== todo.id)
    otherItems.push({ ...todo, isDone: true })
    setAllTodo(otherItems)
  }
  const handleViewDetails = todo => {
    return setIsDetailsPage({ value: true, selectedItem: todo })
  }

  const handleOpenModal = () => {
    setOpenCreateModal(true)
  }

  const handleDeleteItem = async () => {
    const otherItems = allTodo.filter(
      item => item.id !== isDetailsPage.selectedItem.id
    )
    setAllTodo(otherItems)
    setIsDetailsPage({ value: false, selectedItem: null })
  }

  useEffect(() => {
    setAllTodo(data)
  }, [])

  return (
    <ErrorBoundary FallbackComponent={<ErrorFallBack />}>
      <Suspense fallback={<Loader fullscreen />}>
        <Fragment>
          {isDetailsPage.value === true ? (
            <TodoDetails
              todoDetails={isDetailsPage.selectedItem}
              handleDeleteItem={handleDeleteItem}
              setIsDetailsPage={setIsDetailsPage}
            />
          ) : (
            <>
              <h1>Task 1</h1>
              <TodoList
                items={allTodo}
                onItemsClick={handleItemSelected}
                onViewItem={handleViewDetails}
              />
            </>
          )}
          <FloatingButton handleOpenModal={handleOpenModal} />
          {openCreateModal && (
            <CreateTodo
              setAllTodo={setAllTodo}
              setOpenCreateModal={setOpenCreateModal}
            />
          )}
        </Fragment>
        {isDetailsPage.value === false && <TaskTwo />}
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
