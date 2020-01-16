import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="hex-list">
      {props.hexes.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleCast={props.toggleCast}
          />
      ))}
    </div>
  );
};

export default TodoList;