import React from 'react';

function PokeList(props) {
  return (
    <ul className="row">
      {props.children}
    </ul>

  )
}
export default PokeList;