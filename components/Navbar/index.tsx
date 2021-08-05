import { useWindowSize } from "hooks/useWindowSize";

import Name from "components/Icons/Name";

export default function Navbar() {
  const isMobile = useWindowSize();
  const nameWidth = isMobile ? "250" : "400";
  const nameHeight = isMobile ? "100" : "400";

  return (
    <>
      <nav>
        <Name width={nameWidth} height={nameHeight} />
      </nav>
      <style jsx>{`
        nav {
          align-items: center;
          background-color: midnightblue;
          display: flex;
          height: 150px;
          justify-content: center;
          padding-top: 10px;
          width: 100%;
          z-index: -1;
        }

        @media (max-width: 600px) {
          nav {
            justify-content: center;
            padding: 0;
            height: max-content;
          }
        }
      `}</style>
    </>
  );
}
