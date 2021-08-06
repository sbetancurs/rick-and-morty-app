import { breakpoints } from "../../style/theme";
import { statuses } from "../../utils/enums";

/* eslint-disable @next/next/no-img-element */
const Character = (character: TCharacter) => {
  const getEpisodeId = (url: string) => {
    const episode = url.split("/");
    return episode[episode.length - 1];
  };

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case statuses.dead:
        return { backgroundColor: "red" };
      case statuses.alive:
        return { backgroundColor: "green" };
      default:
        return { backgroundColor: "gray" };
    }
  };

  return (
    <>
      <div className='container'>
        <div className='img'>
          <img
            src={character.image}
            alt={`${character.id}_${character.name.split(" ")[0]}`}
          />
        </div>
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
          border-radius: 0.5rem;
          padding-bottom: 1rem;
        }

        .img,
        img {
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }

        .img {
          min-width: 30%;
        }
        img {
          width: 100%;
          object-position: center center;
          object-fit: fit;
        }

        .characterInfo {
          padding: 0 1rem;
          width: 70%;
          min-height: 100%;
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
            padding-bottom: 0;
          }

          img {
            height: 100%;
          }

          .img,
          img {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            border-top-right-radius: 0;
          }
        }

        @media (min-width: ${breakpoints.pc}) {
          .container {
            flex-direction: row;
            justify-content: start;
            padding-bottom: 0;
            min-height: 250px;
          }

          .img,
          img {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            border-top-right-radius: 0;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Character;
