
import React, {useState, useContext} from 'react'
import { DateContext } from './DateProvider'

function Footer() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DateContext)

  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complate = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo = () => {
    const newTodos = todos.filter(todo => {
      return todo.complate === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }
  return (
    <React.Fragment>
        <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" onClick={handleCheckAll} />
            모두 완료하기
          </label>
          <br />
          오늘 해야할 {todos.length}가지
          <br />
          <button id="delete" onClick={deleteTodo}>완료한 것 삭제</button>
        </div>
    </React.Fragment>
  )
}

export default Footer
