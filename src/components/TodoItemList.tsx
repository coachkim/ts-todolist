import React from 'react'
import { ListBox } from '../styles/style'
import TodoItem from './TodoItem'

export type Todos = {
  id: number;
  text: string;
}[]

export interface SetTodos  {
  setTodos : React.Dispatch<React.SetStateAction<{
    id: number;
    text: string;
  }[]>>
}

export type OnDelete = (a: number) => void

function TodoItemList(
  { todos } : { todos : Todos },
  { setTodos } : { setTodos : SetTodos },
  { onDelete } : { onDelete : OnDelete}
  ):JSX.Element {
  return (
      <ListBox>
      <ul>
        {todos && //todos가 있을때만 출력
          todos.map((todo) => (  
            <TodoItem 
                key={todo.id}
                todos={todos}
                {...todo}
                {...setTodos}
                {...onDelete}
            />
        ))}
      </ul>
      </ListBox>
  )
}

export default TodoItemList
