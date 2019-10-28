import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    hex: 'Smudge House',
    id: 1528817077286,
    completed: false
  },
  {
    hex: 'Hex the patriarchy',
    id: 1528817084358,
    completed: false
  }
  // {
  //   hex: 'Manifest new party dress',
  //   id: 1528817084358,
  //   completed: false
  // },
  // {
  //   hex: 'Invoke Gma Ursula for pie recipe',
  //   id: 1528817084358,
  //   completed: false
  // },
  // {
  //   hex: 'ThinAir|ThickThighs Brownies',
  //   id: 1528817084358,
  //   completed: false
  // },
  // {
  //   hex: 'Spiteful Demon, Re: Felix',
  //   id: 1528817077286,
  //   completed: false
  // },
];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      hexes: data
    };
  }

  addItems = hex => {
    const newItem = {
      hex: hex,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      hexes: [...this.state.hexes, newItem]
    });
  }

  toggleCast = id => {
    this.setState({
      hexes: this.state.hexes.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            cast: !todo.cast
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleChanges = e => {
    this.setState({
      newItem: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("New hex submitted!");
    this.addItems(this.state.newItem);
    this.setState({ newItem: '' });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>WunderWitch</h2>
          <h3>A hex-management app</h3>
        </div>
        <TodoList
          toggleCast={this.toggleCast}
          hexes={this.state.hexes} />
        <TodoForm
          // state={this.state}
          setState={this.setState}
          addItems={this.addItems}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
