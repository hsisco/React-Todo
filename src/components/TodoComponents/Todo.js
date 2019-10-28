import React from 'react';

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleCast(props.todo.id)}>
      <p>{props.todo.hex}</p>
    </div>
  );
};

export default Todo;