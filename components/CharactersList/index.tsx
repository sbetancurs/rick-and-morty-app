import { useState, useEffect, lazy, Suspense } from "react";

import { breakpoints, colors } from "../../style/theme";

import Character from "components/Character";

type ICharactersListProps = {
  charactersList: TCharacter[];
};

const CharactersList = (props: ICharactersListProps) => {
  const [characters, setCharacters] = useState([] as TCharacter[]);

  useEffect(() => {
    setCharacters(props.charactersList);
  }, [props.charactersList]);

  return (
    <section className='characters'>
      <div className='title'>
        <h1>Characters</h1>
      </div>
      <div className='wrapper'>
        {characters &&
          characters.map((character) => {
            return <Character key={character.id} {...character} />;
          })}
      </div>
      <style jsx>{`
        .title {
          text-align: center;
        }

        .characters {
          background-color: ${colors.bg_Primary};
          height: 100%;
          color: #fff;
          padding: 3rem 0;
        }

        .wrapper {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(1, minmax(100%, 1fr));

          padding-top: 1rem;
        }

        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          .wrapper {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
          }
        }

        @media (min-width: ${breakpoints.pc}) {
          .wrapper {
            padding: 0 10rem;
            grid-auto-rows: 15.5rem;
            grid-template-columns: repeat(2, minmax(20px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default CharactersList;
