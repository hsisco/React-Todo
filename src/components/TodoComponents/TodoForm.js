import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChanges = e => {
    this.setState({ ...this.state, newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItems(this.state.newItem);
    this.setState({ ...this.state, newItem: ""});
  };

  render(){
    return(
      <div className="hex-form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            type="text"
            name="item"
            value={this.state.newItem}
            />
          <button type="submit">
            Add Hex
          </button>
        </form>
        <button 
          type="button"
          className="clear-btn"
          onClick={this.props.clearCast}>
          Clear Hexes Cast
        </button>
      </div>
    );
  }
}

export default TodoForm;