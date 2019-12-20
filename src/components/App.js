import React from 'react';
import '../stylesheet/App.css';
import PokeList from './PokeList';
import Characters from './apiData/api.json';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">      
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

export default App;
