import { useState, useEffect } from 'react'

type Character = { name: string }

const CharactersList = () => {

    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data))


    })

    return <>
        <section className="characters">
            <h1>Characters</h1>
            <ul>
                {characters && characters.map(character => { <div>{ character}</div>})}
            </ul>
        </section>
        <style jsx>{ `
            .characters{
          background-color:#24282f;
          height: 100%;
          color:#fff
        }
        `}
        </style>
    </>
}

export default CharactersList;