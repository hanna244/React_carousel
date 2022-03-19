
import React, {useState, useContext} from 'react'
import {DateContext} from './DateProvider'

function TodoForm() {
  const [todos, setTodos]  = useContext(DateContext)
  const [todoName, setTodoName]  = useState('')

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, complate: false}])
    setTodoName('')
  }

  return (
    <React.Fragment>
      <form className="form_todolist" autoComplete="off" onSubmit={addTodo}>
        <button className="btn_allchoiceitem ico_downArrow" type="button" aria-label="할 일 모두 완료하기"></button>
        <input className="input_todo" type="text" name="todos" id="todos" required placeholder="오늘의 할 일을 입력하세요"
        value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())} />
        <button className="btn_addListItem" type="submit">추가</button>
      </form>
    </React.Fragment>
  )
}

export default TodoForm
