import { colors } from "../../style/theme";

type IPaginationProps = {
  page: number;
  totalPages: number;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  loading: boolean;
};

const Pagination = ({
  page,
  totalPages,
  handleClick,
  loading,
}: IPaginationProps) => {
  console.log(page + "of" + totalPages);
  return (
    <>
      <div className='pagination'>
        <button
          name='prev'
          onClick={handleClick}
          disabled={page === 1 || loading}
        >
          Prev
        </button>
        <span className='index'>
          {page} of {totalPages}
        </span>
        <button
          name='next'
          onClick={handleClick}
          disabled={page === totalPages || loading}
        >
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
        button:hover:enabled {
          animation: fill 0.5s linear forwards;
          transform: scale(1.5);
        }

        button:disabled {
          opacity: 0.6;
          visibility: hidden;
        }

        button:hover:disabled {
          cursor: default;
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
};

export default Pagination;
