
import React from 'react'
import './TodoList.sass'
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Footer from "./Footer";

function TodoList() {

  return (
    <React.Fragment>
      <h1 className="title_todo">todos</h1>
      <div className="wrap_todo">
        <TodoForm />
        <Todo />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default TodoList
