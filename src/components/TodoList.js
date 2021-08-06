import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 30px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray;
`;

function TodoList() {
  return <TodoListBlock>Hello React!</TodoListBlock>;
}

export default TodoList;
