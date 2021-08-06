import { fontSizes } from "../../style/theme";
//@ts-ignore
import Typical from "react-typical";

const Loader = () => {
  return (
    <>
      <div className='loader' />
      <span>
        <Typical
          steps={["...", 1000, "Cargando!", 500]}
          loop={Infinity}
          wrapper='b'
        />
      </span>
      <style jsx>{`
        .loader {
          width: 100px;
          height: 100px;
          border: 4px solid #fff;
          border-radius: 50%;
          border-left-color: transparent;
          animation: spin 1s linear infinite;
          display: inline-block;
        }
        span {
          margin-top: 1rem;
          font-size: ${fontSizes.font_size_md};
          overflow: hidden;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes breath {
          0% {
            opacity: 1;
            width: 150px;
          }
          100% {
            opacity: 0.5;
            width: 210px;
          }
        }
      `}</style>
    </>
  );
};

export default Loader;
