import React from 'react';

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