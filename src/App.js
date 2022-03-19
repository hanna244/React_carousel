import './App.css'
import './style/normalize.css'
import './style/reset.css'
import React from 'react'
import TodoList from './components/TodoList'
import {DateProvider} from './components/DateProvider'

function App() {
  return (
    <DateProvider>
      <div className="App">
        <div className="container">
          <TodoList />
        </div>
      </div>
    </DateProvider>
  )
}

export default App