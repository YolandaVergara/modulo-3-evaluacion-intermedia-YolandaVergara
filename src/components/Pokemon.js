import React from 'react';

function Pokemon(props) {
  return (    
    <li className="list-group-item list-group-item-success col-sm-4 mr-1 mb-1 w-50">
      <img
      className="card-img"
        src={props.image}
        alt={props.name} />

      <h1>{props.name}</h1>
      <ul>  {props.type.map((type, key) => {
        return (
          <li className="text-center" id={key}>{type}
          </li>
        )
      }
      )}
      </ul>
    </li>
  )
}
export default Pokemon;