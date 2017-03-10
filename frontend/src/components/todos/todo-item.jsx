import React from 'react';
import CircularButton from '../common/circularButton';

const TodoItem = (props) => {
  return (
    <li className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        Bryan Cranston
      </span>
      <span className="mdl-list__item-secondary-action">
        <CircularButton icon="done" colored={true} onClick={() => props.handleMarkAsDone(todo)} />
        <CircularButton icon="replay" colored={true} onClick={() => props.handleMarkAsDone(todo)}/>
        <CircularButton icon="delete" colored={false} onClick={() => props.handleMarkAsDone(todo)}/>
      </span>
    </li>
  );
};

export default TodoItem;