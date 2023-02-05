import React, { useEffect, useRef, useState } from 'react'
import { DelteBtn, EditBtn } from '../styles/style'
import { OnDelete, SetTodos, Todos } from './TodoItemList';

type Todostype = Todos
interface SetTodostype {
  setTodos : SetTodos
}
type onDeletetype = OnDelete

function TodoItem(
  { todos } : { todos : Todostype},
  { todo } : { todo : Todostype},
  { setTodos } : { setTodos : SetTodostype },
  { onDelete } : { onDelete : onDeletetype }
  ) {
  const { id, text }: { id: number, text: string}[] = todo;
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(text);
  const editInputRef = useRef<HTMLInputElement>(null);
  const onClickEditBtn = () => {
    setEdited(true);
  }  
  const onChangeEditInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  }
  const onClickSubmitBtn = () => {
    const editedTodoList = todos.map((item) => ({
      ...item, 
        text: item.id === id ? newText : text
    }));
    setTodos(editedTodoList);
    setEdited(false);
  }
  
  useEffect(() => {
    if(edited) {
      if (editInputRef.current) {
        editInputRef.current.focus();
      }
    }
  }, [edited])

  return (
    <div style={{display: "flex", marginBottom: "10px"}}>
      <input 
        style={{marginRight: "10px"}}
        type={"checkbox"} 
        />
      {!edited ? (
        <div style={
          {border: "1px solid", padding: "10px", marginRight: "10px"}}>
          {text}
        </div>) : (
        
          <input
          type={"text"}
          placeholder={text}
          value={newText}
          ref={editInputRef}
          onChange={onChangeEditInput}
        />
        
        )
      }
      {!edited ? (
        <EditBtn onClick={onClickEditBtn}>
          수정
        </EditBtn> ) : (
        <EditBtn onClick={onClickSubmitBtn}>
          완료
        </EditBtn>
      )}
      <DelteBtn onClick={()=>onDelete(id)} >삭제</DelteBtn>
    </div>
  )
}

export default TodoItem
