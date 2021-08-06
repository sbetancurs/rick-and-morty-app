import { useState, useEffect } from "react";

import { breakpoints, colors, fontSizes } from "../../style/theme";

import Character from "components/Character";

type ICharactersListProps = {
  charactersList: TCharacter[];
  loading: boolean;
  searchField: IField;
};

const CharactersList = ({
  charactersList,
  loading,
  searchField,
}: ICharactersListProps) => {
  const [characters, setCharacters] = useState(charactersList);

  useEffect(() => {
    setCharacters(charactersList);
  }, [charactersList]);

  return (
    <section className='characters'>
      <div className='wrapper'>
        {characters
          .filter((x) =>
            x.name.toLowerCase().includes(searchField.value.toLowerCase())
          )
          .map((character) => {
            return <Character key={character.id} {...character} />;
          })}
      </div>
      <style jsx>{`
        .characters {
          background-color: ${colors.bg_Primary};
          min-height: 100vh;
          height: 100%;
          color: #fff;
        }

        .wrapper {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(1, minmax(100%, 1fr));
          opacity: ${loading ? 0.5 : 1};
          padding-top: 1rem;
          padding: 3rem;
        }

        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          .wrapper {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
            padding: 3rem;
          }
        }

        @media (min-width: ${breakpoints.pc}) {
          .wrapper {
            grid-template-columns: repeat(2, minmax(20px, 1fr));
            padding: 0 20rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CharactersList;
