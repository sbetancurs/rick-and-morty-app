import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

import Character from "components/Character";

type ICharactersListProps = {
  charactersList: TCharacter[];
};

const CharactersList = (props: ICharactersListProps) => {
  const [characters, setCharacters] = useState([] as TCharacter[]);

  useEffect(() => {
    if (props.charactersList) {
      setCharacters(props.charactersList);
    }
  }, [props.charactersList]);

  return (
    <>
      <div className='wrapper'>
        {characters &&
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))}
      </div>
      <style jsx>{`
         {
          /* .wrapper {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 20px;
          padding: 2rem;
        } */
        }

        .wrapper {
          display: grid;
          gap: 1rem;
          grid-auto-rows: 30rem;
          grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
          padding: 1rem;
        }

        @media (min-width: 1025px) {
          .wrapper {
            /*grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
            padding: 1rem 7rem;*/
            padding: 0 5rem;
            grid-auto-rows: 19rem;
          }
        }
      `}</style>
    </>
  );
};

export default CharactersList;
