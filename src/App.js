import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    hex: 'Smudge home',
    id: 1528817077286,
    cast: false
  },
  {
    hex: 'Invoke Gma Ursula for pie recipe',
    id: 1579068659537,
    cast: false,
  },
  {
    hex: 'Hex the patriarchy',
    id: 1528817084358,
    cast: false
  }
];

class App extends React.Component {
  state = {
    hexes: data
  };
  
  addItems = hex => {
    const newState = {
      ...this.state,
      hexes: [
        ...this.state.hexes,
        {
          hex: hex,
          id: Date.now(),
          cast: false
        }
      ]
    };
    this.setState(newState);
  }

  toggleCast = id => {
    // console.log("This is the id")
    const newState = {
      ...this.state,
      hexes: this.state.hexes.map(todo => {
        if(todo.id === id){
          return ({
            ...todo,
            cast: !todo.cast
          });
        }
        return todo;
      })
    };
    this.setState(newState);
  };

  clearCast = () => {
    const newState = {
      ...this.state,
      hexes: this.state.hexes.filter(todo => {
        return !todo.cast;
      })
    };
    this.setState(newState);
  };

  render() {
    console.log(this.state.hexes);
    return (
      <div className="App">
        <header className="header">
          <h2>WunderWitch</h2>
          <h3>A Hex-management App</h3>
        </header>
        
        <TodoForm
          addItems={this.addItems} 
          clearCast={this.clearCast}/>

        <TodoList
          toggleCast={this.toggleCast}
          hexes={this.state.hexes} />
      </div>
    );
  }
}

export default App;
