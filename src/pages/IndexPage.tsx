import React from 'react'
import PokemonList from '../components/PokemonList'
import "./IndexPage.scss"
function IndexPage() {
    return (
        <div className="index-page base">
            <h2 className='title'>title </h2>
            <p className='description'>description is here</p>

            <PokemonList />

            <div className='image-wrapper'>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default IndexPage