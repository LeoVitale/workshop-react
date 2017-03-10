import React from 'react';
import TodoItem from './todo-item';

const TodoList = (props) => {
  return (
    <ul className="demo-list-control mdl-list">
      <TodoItem />
    </ul>
  );
};

export default TodoList;