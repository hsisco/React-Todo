import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.props.setState.hexes = {
      newItem: ''
    }
  }

  render(props){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="todo">New Hex</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={this.props.newItem}
          onChange={this.props.handleChanges}
          />
          <button type="submit">Add</button>
          <button type="button" className="clear-btn" onClick={this.props.clearCast}>
        Clear Hexes Cast
      </button>
      </form>
    );
  }
}

export default TodoForm;