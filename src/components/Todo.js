
import React, {useContext} from 'react'
import ListItem from "./ListItem";
import {DateContext} from './DateProvider'

function Todo() {
  const [todos, setTodos]  = useContext(DateContext)

  const switchComplate = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if(index ===id) {
        todo.complate = !todo.complate
      }
    })
    setTodos(newTodos)
  }

  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if(index === id) {
        todo.name = editvalue
      }
    })
  }


  return (
    <ul className="resetList">
      {
        todos.map((todo, index) => (
          <ListItem todo={todo} key={index} id={index} checkComplate={switchComplate}
          handleEditTodos={handleEditTodos}  /> 
        ))
      }
    </ul>
  )
}

export default Todo