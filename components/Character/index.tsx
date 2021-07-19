/* eslint-disable @next/next/no-img-element */
const Character = (character: TCharacter) => {
  const getEpisodeId = (url: string) => {
    const episode = url.split("/");
    return episode[episode.length - 1];
  };

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case "dead":
        return "red";
      case "alive":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <>
      <div className='container'>
        <img src={character.image} alt={character.id + "."} />
        <div className='characterInfo'>
          <h2>{character.name}</h2>

          <p>
            <span
              className={
                `status ` + getStatusColorClass(character.status.toLowerCase())
              }
            ></span>
            {character.status} - {character.species}
          </p>

          <p className='lastKnowLocation'>Last known location:</p>
          <p>{character.location.name}</p>

          <p className='firstSeen'>First seen in:</p>
          <p>episode {getEpisodeId(character.episode[0])}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: start;
          background-color: #3c3e44;
          width: calc(100vw - 2rem);
          height: 100%;
          min-height: 300px;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
        }

        img {
          height: 100%;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          object-position: center center;
          object-fit: cover;
           {
            /* object-fit: contain; */
          }
        }

        .characterInfo {
          padding: 0 1rem;
        }

        .characterInfo h2,
        p {
          margin: 0;
        }

        .characterInfo h2 {
          margin-top: 0.5rem;
        }

        .status {
          border-radius: 50px;
          display: inline-block;
          height: 10px;
          width: 10px;
          align-self: center;
          margin-right: 0.5rem;
        }

        .red {
          background-color: red;
        }

        .green {
          background-color: green;
        }

        .gray {
          background-color: gray;
        }

        .lastKnowLocation,
        .firstSeen {
          margin-top: 1.5rem;
          color: rgb(158, 158, 158);
        }

        @media (min-width: 1025px) {
          .container {
            flex-direction: row;
            justify-content: start;
            width: 100%;
            height: 250px;
            padding-bottom: 0;
          }

          img {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            border-top-right-radius: 0;
            object-position: left center;
          }
        }
      `}</style>
    </>
  );
};

export default Character;
