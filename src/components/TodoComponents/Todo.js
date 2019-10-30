import React from 'react';
import './Todo.css'

const Todo = props => {
  return (
    <div
      className={`hex${props.todo.cast ? ' cast' : ''}`}
      onClick={() => props.toggleCast(props.todo.id)}>
      <p>{props.todo.hex}</p>
    </div>
  );
};

export default Todo;