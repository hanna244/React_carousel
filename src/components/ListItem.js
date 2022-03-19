import React, { useState } from 'react'


function ListItem({todo, id, checkComplate, handleEditTodos}) {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)
  const handleOnEdit = () => {
    setOnEdit(true)
  }

  const handleSave = id => {
    setOnEdit(false)
    if(editValue) {
      handleEditTodos(editValue, id)
    }else{
      setEditValue(todo.name)
    }
  }

  if(onEdit) {
    return (
      <li>
          <input className="item_inp" type="text" id="editValue" value={editValue} 
          name="editValue" onChange={e => setEditValue(e.target.value.toLowerCase())} />
        <button onClick={() => handleSave(id)}>저장</button>
      </li>
    )
  }else{
    return (
      <li>
        <label htmlFor={id} className={todo.complate ? "active" : ""}>
          <input className="item_inp" type="checkbox" id={id} checked={todo.complate} 
          onChange={() => checkComplate(id)} />
          {todo.name}
        </label>
        <button disabled={todo.complate} onClick={handleOnEdit} className="item_del" >수정</button>
      </li>
    )
  }

  
}

export default ListItem