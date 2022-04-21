import React from 'react';
import "./PokemonList.scss";

const getImageUrl = (pokemonIndex: number): string =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

function PokemonList() {
    return (
        <div className='base'>
            <ul className='list'>
                <li className='list-item'>
                    <img className='image' src="" alt="" />
                    <h3 className='name'>test</h3>
                    <h5 className='index'>#2131</h5>
                </li>
            </ul>
        </div>
    )
}

export default PokemonList