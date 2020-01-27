import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  return (
    <li className="cards-detail">
      <img
        className="card-image"
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

Pokemon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}
export default Pokemon;