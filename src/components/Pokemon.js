import React from 'react';

function Pokemon(props) {
    return (
        <li>
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <ul>{props.types.map((git
            ))}
            </ul>
        </li>
    )
}
export default Pokemon;