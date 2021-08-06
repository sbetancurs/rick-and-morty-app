import { useState, useEffect } from "react";

import Introduction from "components/Introduction";
import CharactersList from "components/CharactersList";
import Pagination from "components/Pagination";
import Searcher from "components/Searcher";

import { useField } from "../hooks/useField";
import { fontSizes, colors } from "style/theme";
import { statuses } from "../utils/enums";

// @ts-ignore
import { getCharacter } from "rickmortyapi";

type IResponse = {
  info: TInfo;
  results: TCharacter[];
  loading: boolean;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({} as TCharacter);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    info: {},
    results: [] as TCharacter[],
  } as IResponse);

  const searchField: IField = useField({
    type: "text",
    name: "search",
    placeholder: "Look for a character...",
  });

  const statusField: IField = useField({
    name: "status",
    placeholder: "estado",
  });

  const handleSearchClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setFilter({
      name: searchField.value,
      status: statusField.value,
    } as TCharacter);
  };

  useEffect(() => {
    setLoading(true);
    getCharacter({ ...filter, page: page })
      .then((res: IResponse) => setResponse(res))
      .then(() => setLoading(false));
  }, [page, filter]);

  const handlePaginationClick = (e: React.MouseEvent<HTMLElement>) => {
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
      <Searcher handleClick={handleSearchClick}>
        <input {...searchField} />
        <select {...statusField}>
          <option value={statuses.alive}>Alive</option>
          <option value={statuses.dead}>Dead</option>
          <option value={statuses.unknown}>Unknown</option>
        </select>
      </Searcher>
      {response.info && (
        <>
          <CharactersList
            charactersList={response.results}
            loading={loading}
            searchField={searchField}
          />
          <Pagination
            page={page}
            totalPages={response.info.pages}
            handleClick={handlePaginationClick}
          />
        </>
      )}
      {!response.info && (
        <div className='noCharacters'>
          <p>There is no characters to show.</p>
        </div>
      )}
      <style jsx>{`
        .noCharacters {
          display: flex;
          justify-content: center;
          align-items: start;
          padding-bottom: ;
          background: ${colors.bg_Primary};
          font-size: ${fontSizes.font_size_sm};
          color: #fff;
          min-height: 50vh;
        }
        input {
          background-color: white;
          color: black;
          border-color: #fff;
          height: 65px;
          font-size: ${fontSizes.font_size_sm};
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          padding: 0 1rem;
          width: 700px;
          margin-right: 0.2rem;
        }

        select {
          background-color: white;
          color: black;
          border-color: #fff;
          height: 65px;
          font-size: ${fontSizes.font_size_sm};
          padding: 0 1rem;
          margin-right: 0.2rem;
        }
      `}</style>
    </>
  );
}
