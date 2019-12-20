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
      <div className="App container-md">  
      <h1 className="h1">Mi lista de Pokemon</h1>    
        <PokeList>
          {Characters.map((Character, key) => {
            return (
              <Pokemon
              id={key}
              image={Character.url}
              name={Character.name}
              type={Character.types}
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
