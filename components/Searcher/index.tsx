import { fontSizes, colors, breakpoints } from "style/theme";

type ISearchProps = {
  children?: React.ReactNode;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  loading: boolean;
};

const Searcher = ({ children, handleClick, loading }: ISearchProps) => {
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Characters</h1>
        </div>
        <div className='searcher'>
          {children}
          <button onClick={handleClick} disabled={loading}>
            Search
          </button>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colors.bg_Primary};
          padding-bottom: 2rem;
        }

        .searcher {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          padding: 0 3rem;
        }

        .title {
          text-align: center;
          color: #fff;
        }

        h1 {
          font-size: ${fontSizes.font_size_lg};
        }

        button {
          background-color: ${colors.bg_Primary};
          border-color: #fff;
          color: #fff;
          cursor: pointer;
          font-size: ${fontSizes.font_size_xs};
          height: 50px;
          margin-top: 0.5rem;
          padding: 0 1rem;
        }

        button:disabled {
          opacity: 0.6;
        }

        button:hover:disabled {
          cursor: default;
        }

        @keyframes fill {
          0% {
            background-color: ${colors.bg_Primary};
          }
          50% {
            background-color: #002;
          }
          100% {
            background-color: #606060;
          }
        }

        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          .searcher {
            display: flex;
            padding-bottom: 4rem;
          }

          button {
            height: 65px;
            margin-top: 0.5rem;
            padding: 0 1rem;
          }

          h1 {
            font-size: ${fontSizes.font_size_xl};
          }
        }

        @media (min-width: ${breakpoints.pc}) {
          .searcher {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          button {
            height: 65px;
            margin-top: 0;
            padding: 0 1rem;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
          }

          button:hover:enabled {
            animation: fill 0.5s linear forwards;
          }
        }
      `}</style>
    </>
  );
};

export default Searcher;
