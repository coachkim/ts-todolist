import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, TextInput, InputBtn } from '../styles/style'
import { SubmitType } from './TodoTemplate';

type ToInsertprops = {
    onSubmit : SubmitType
}


function TodoInsert({onSubmit}: ToInsertprops) {
    const [content, setContent] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!content) return;
        onSubmit(content);
        setContent("");
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
        <TextInput
            ref={inputRef}
            type={"text"}
            placeholder="오늘 할 일"
            value={content}
            onChange={handleChange}
        />
        <InputBtn
            type="submit" 
            // onClick type 지정 ?
            // onClick={handleSubmit}
        >
        작성
        </InputBtn>
        </Form>
    </Container>
  )
}

export default TodoInsert