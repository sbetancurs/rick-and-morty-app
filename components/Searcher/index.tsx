import { fontSizes, colors } from "style/theme";

type ISearchProps = {
  children?: React.ReactNode;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const Searcher = ({ children, handleClick }: ISearchProps) => {
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Characters</h1>
        </div>
        <div className='searcher'>
          {children}
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colors.bg_Primary};
          padding-bottom: 4rem;
        }

        .searcher {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          text-align: center;
          color: #fff;
        }

        h1 {
          font-size: ${fontSizes.font_size_xl};
        }

        button {
          background-color: ${colors.bg_Primary};
          color: #fff;
          border-color: #fff;
          height: 65px;
          font-size: ${fontSizes.font_size_sm};
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          padding: 0 1rem;
          cursor: pointer;
        }

        button:hover:enabled {
          animation: fill 0.5s linear forwards;
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
      `}</style>
    </>
  );
};

export default Searcher;
