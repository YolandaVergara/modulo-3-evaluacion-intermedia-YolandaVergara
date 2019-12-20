import React from 'react';

function PokeList(props) {
  return (
    <ul className="list-group list-group-flush">
      {props.children}
    </ul>

  )
}
export default PokeList;