import React from 'react';
import Pokemon from './Pokemon';

function PokeList() {
    return (
        <React.Fragment>
            <h1>Mi lista de pokemon</h1>
            <ul>
                <Pokemon />
            </ul>
        </React.Fragment>
    )
}
export default PokeList;