import React from 'react';
import '../stylesheet/App.css';
import PokeList from './PokeList';
import Characters from './apiData/api.json';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Characters
    };
  }

  render() {
    return (
      <div className="app">  
      <h1 className="h1">Mi lista de Pokemon</h1>    
        <PokeList>
          {Characters.map((character) => {
            return (
              <Pokemon
              id={character.id}
              image={character.url}
              name={character.name}
              type={character.types}
              />
            )
          }
          )
          }
        </PokeList>
      </div>
    );
  }
}

export default App;
