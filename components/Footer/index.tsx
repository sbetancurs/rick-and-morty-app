import { fontSizes, colors, breakpoints } from "style/theme";
const Footer = () => {
  return (
    <>
      <footer>
        <p>Powered by Sebastian Betancur</p>
      </footer>
      <style jsx>{`
        footer {
          align-items: center;
          background-color: #202329;
          color: #fff;
          display: flex;
          height: 120px;
          justify-content: center;
          width: 100%;
        }

        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          footer {
            height: 70px;
          }
        }

        @media (min-width: ${breakpoints.pc}) {
          footer {
            height: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
