import { useState, useEffect } from "react";

import Introduction from "components/Introduction";
import CharactersList from "components/CharactersList";
import Pagination from "components/Pagination";
import Searcher from "components/Searcher";

import { useField } from "../hooks/useField";
import { fontSizes, colors, breakpoints } from "style/theme";
import { statuses, species } from "../utils/enums";

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
    disabled: loading,
  });

  const statusField: IField = useField({
    name: "status",
    disabled: loading,
  });
  const specieField: IField = useField({
    name: "specie",
    disabled: loading,
  });

  const handleSearchClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setFilter({
      name: searchField.value,
      status: statusField.value,
      species: specieField.value,
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
      <Searcher handleClick={handleSearchClick} loading={loading}>
        <input {...searchField} />
        <select {...specieField}>
          <option value=''>All Species</option>
          {Object.entries(species).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
        <select {...statusField}>
          <option value=''>All Status</option>
          {Object.entries(statuses).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
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
            loading={loading}
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
          text-align: center;
          background: ${colors.bg_Primary};
          font-size: ${fontSizes.font_size_sm};
          color: #fff;
          min-height: 50vh;
        }
        input[type="text"] {
          background-color: white;
          color: black;
          border-color: #fff;
          height: 40px;
          font-size: ${fontSizes.font_size_xs};
          padding: 0 0.5rem;
          width: 100%;
        }

        input[type="text"]:focus,
        select:focus {
          outline: none;
        }

        input[type="text"]:disabled {
          opacity: 0.6;
        }
        select {
          background-color: white;
          color: black;
          border-color: #fff;
          height: 50px;
          font-size: ${fontSizes.font_size_xs};
          padding: 0 1rem;
          margin-top: 0.5rem;
          width: 100%;
        }

        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          input[type="text"] {
            height: 65px;
            font-size: ${fontSizes.font_size_sm};
            padding: 0 1rem;
            width: 100%;
            margin-right: 0.2rem;
          }

          select {
            height: 65px;
            font-size: ${fontSizes.font_size_sm};
          }
        }

        @media (min-width: ${breakpoints.pc}) {
          input[type="text"] {
            border-top-left-radius: 25px;
            border-bottom-left-radius: 25px;
            height: 65px;
            font-size: ${fontSizes.font_size_sm};
            padding: 0 1rem;
            width: 700px;
            margin-right: 0.2rem;
          }

          select {
            height: 65px;
            font-size: ${fontSizes.font_size_sm};
            width: max-content;
          }

          select {
            margin: 0;
            margin-right: 0.2rem;
          }
        }
      `}</style>
    </>
  );
}
