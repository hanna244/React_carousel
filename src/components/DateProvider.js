
import React, {useState, useEffect, createContext} from 'react'

export const DateContext = createContext();

export const DateProvider = (props) => {
    const [todos, setTodos] = useState([])
    
    // 입력한 todolist 정보를 기억
    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    }, [])

    useEffect(() => {
        localStorage.setItem('todoStore',  JSON.stringify(todos))
    }, [todos])
    

    return (
        <React.Fragment>
            <DateContext.Provider value={[todos, setTodos]}>
                {props.children}
            </DateContext.Provider>
        </React.Fragment>
      )
}

