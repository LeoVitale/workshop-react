import React, {Component} from 'react';

import TodoForm from './todo-form';
import TodoList from './todo-list';

import '../../sass/todos.scss';

class Todos extends Component {
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--3-col"></div>
        <div className="mdl-cell mdl-cell--6-col">

          <TodoForm />

          <div className="todo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">Minhas Tasks</h2>
            </div>
            <div className="mdl-card__supporting-text">

              <TodoList />

            </div>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--3-col"></div>
      </div>
    );
  }
};

export default Todos;