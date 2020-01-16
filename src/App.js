import React from 'react';

const data = [
  {
    hex: 'Smudge House',
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
