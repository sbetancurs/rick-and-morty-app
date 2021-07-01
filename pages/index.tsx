

export default function Home() {
  return (
    <>
      <section className="introduction">
          <h1 className="title">
          Welcome to <a href="https://rickandmortyapi.com/">Rick and Morty App!</a>
          </h1>
          <p className="description">
            Let´s go to know more about the characters
          </p>
      </section>
      <section className="characters">
      <h1>section</h1>
      </section>
      <style jsx>{`
        .introduction{
          background-color:#f0f0f0;
          padding: 5rem 0;
        }

        .characters{
          background-color:#24282f;
          height: 100%;
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
        }

        .title,
        .description {
          text-align: center;
        }
        
        .description {
          font-size: 1.5rem;
        }
`}</style>
    </>
  )
}
