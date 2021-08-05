import { useState, useEffect } from "react";
import Introduction from "components/Introduction";
import CharactersList from "components/CharactersList";

// @ts-ignore
import { getCharacter } from "rickmortyapi";

import { colors } from "../style/theme";

type IApiAnswer = {
  info: TInfo;
  results: TCharacter[];
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState({
    info: {},
    results: [] as TCharacter[],
  } as IApiAnswer);

  useEffect(() => {
    getCharacter({ page: page }).then((res: IApiAnswer) => setResponse(res));
  }, [page]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { name } = e.target as any;
    switch (name) {
      case "prev":
        setPage(page - 1);
        break;
      case "next":
        setPage(page + 1);
        break;
    }
  };

  return (
    <>
      <Introduction />
      <CharactersList charactersList={response.results} />
      <div className='pagination'>
        <button name='prev' onClick={handleClick} disabled={page === 1}>
          Prev
        </button>
        <span className='index'>
          {page} / {response.info.pages}
        </span>
        <button name='next' onClick={handleClick}>
          Next
        </button>
      </div>
      <style jsx>{`
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100px;
          background-color: ${colors.bg_Primary};
        }

        button {
          padding: 0.5rem 1.5rem;
          margin: 0 1rem;
          cursor: pointer;
          border: 2px solid #fff;
          border-radius: 2rem;
          transition: transform 0.2s;
          background: transparent;
          color: #fff;
          font-weight: bold;
          font-style: oblique;
          text-transform: uppercase;
        }

        button:disabled {
          visibility: hidden;
        }

        button:hover:enabled {
          animation: fill 0.5s linear forwards;
          transform: scale(1.5);
        }

        .index {
          color: #fff;
          margin: 0 1rem;
        }

        @keyframes fill {
          0% {
            background-color: ${colors.bg_Primary};
            border-radius: 1.5rem;
          }
          50% {
            background-color: #016;
            border-radius: 1rem;
          }
          100% {
            background-color: #fff;
            color: #000;
            border-radius: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
