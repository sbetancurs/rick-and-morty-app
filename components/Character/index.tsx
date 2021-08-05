import { breakpoints } from "../../style/theme";

/* eslint-disable @next/next/no-img-element */
const Character = (character: TCharacter) => {
  const getEpisodeId = (url: string) => {
    const episode = url.split("/");
    return episode[episode.length - 1];
  };

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case "dead":
        return { backgroundColor: "red" };
      case "alive":
        return { backgroundColor: "green" };
      default:
        return { backgroundColor: "gray" };
    }
  };

  return (
    <>
      <div className='container'>
        <img
          src={character.image}
          alt={`${character.id}_${character.name.split(" ")[0]}`}
        />
        <div className='characterInfo'>
          <h2>{character.name}</h2>

          <p>
            <span
              className={"status"}
              style={getStatusColorClass(character.status.toLowerCase())}
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
          width: 100%;
          height: max-content;
          border-radius: 0.5rem;
          padding-bottom: 1rem;
        }

        img {
          height: 250px;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          object-position: center center;
          object-fit: fit;
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
          border-radius: 50%;
          display: inline-block;
          height: 10px;
          width: 10px;
          align-self: center;
          margin-right: 0.5rem;
        }

        .lastKnowLocation,
        .firstSeen {
          margin-top: 1.5rem;
          color: rgb(158, 158, 158);
        }

        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
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

        @media (min-width: ${breakpoints.pc}) {
          .container {
            flex-direction: row;
            justify-content: start;
            width: 100%;
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
