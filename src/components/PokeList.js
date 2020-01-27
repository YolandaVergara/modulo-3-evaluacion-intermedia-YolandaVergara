import React from 'react';

function PokeList(props) {
  return (
    <div className="cards__container">
      <ul className="cards">
        {props.children}
      </ul>
    </div>
  )
}
export default PokeList;