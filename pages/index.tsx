import Introduction from "components/Introduction";
import CharactersList from "components/CharactersList";

type IHomeListProps = {
  charactersList: TCharacter[];
};

export default function Home({ charactersList }: IHomeListProps) {
  return (
    <>
      <Introduction />

      <section id='ch' className='characters'>
        <div className='chTitle'>
          <h1>Characters</h1>
        </div>
        <CharactersList charactersList={charactersList} />
      </section>

      <style jsx>
        {`
          .introduction {
            background-color: #f0f0f0;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            min-height: 500px;
            padding: 5rem 2rem;
            width: 100%;
          }

          .characters {
            background-color: #24282f;
            height: 100%;
            color: #fff;
          }

          .chTitle {
            text-align: center;
          }
        `}
      </style>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const charactersList = data.results;

  return {
    props: {
      charactersList,
    },
  };
};
