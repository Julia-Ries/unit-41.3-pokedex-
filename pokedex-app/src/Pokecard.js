import React from 'react';

const POKE_API = "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(name, id, type, exp){
    const imgScr = `${POKE_API}${id}.png`;

    return (
        <div className='Pokecard'>
            <div className='Pokecard-title'>{name}</div>
            <img className='Pokecard-img' src= {imgScr} alt="name" />
            <div className='Pokecard-type'>Type:{type}</div>
            <div className='Pokecard-exp'>Exp: {exp} </div>
            

        </div>
    )
}


export default Pokecard;