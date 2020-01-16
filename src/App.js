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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
