import React from 'react';

const TodoForm = () => {
  return (
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text" id="todoText" />
      <label className="mdl-textfield__label" htmlFor="todoText">Create or Search a Todo Item</label>
    </div>
  );
};

export default TodoForm;