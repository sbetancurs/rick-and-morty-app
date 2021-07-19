import CharactersList from "components/CharactersList";
type IHomeListProps = {
  charactersList: TCharacter[];
};

export default function Home({ charactersList }: IHomeListProps) {
  return (
    <>
      <section className='introduction'>
        <h1 className='title'>
          <a href='https://rickandmortyapi.com/'>Rick and Morty App!</a>
        </h1>
        <p className='description'>
          Let´s go to know more about the characters
        </p>
      </section>

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
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            color: rgb(32, 35, 41);
            border: medium none;
            font-weight: 900;
            z-index: 1;
            font-size: 5.625rem;
            word-wrap: break-word;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            font-size: 1.5rem;
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
