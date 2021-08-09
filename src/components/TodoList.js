import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem done={true} text="Create the project"></TodoItem>
      <TodoItem done={true} text="Styling the components"></TodoItem>
      <TodoItem done={false} text="Develop the logic"></TodoItem>
      <TodoItem done={false} text="Implement the features"></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
