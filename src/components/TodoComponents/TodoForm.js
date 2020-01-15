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
  }

  render(){
    return(
      <div className="hex-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="item"
            value={this.state.newItem}
            onChange={this.handleChanges}
            />
          <button type="submit">Add Hex</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;