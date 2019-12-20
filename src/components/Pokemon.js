import React from 'react';

function Pokemon(props) {
  return (    
    <li className="list-group-item">
      <img
        src={props.image}
        alt={props.name} />

      <h1>{props.name}</h1>
      <ul>  {props.type.map((type, key) => {
        return (
          <li id={key}>{type}
          </li>
        )
      }
      )}
      </ul>
    </li>
  )
}
export default Pokemon;