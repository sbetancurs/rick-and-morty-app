import Image from "next/image";

import Logo from "components/Icons/Logo";
import Name from "components/Icons/Name";

import { useWindowSize } from "hooks/useWindowSize";

export default function Navbar() {
  const { width } = useWindowSize();
  const isMobile = width <= 600;
  const nameWidth = isMobile ? "300" : "400";

  return (
    <>
      <nav>
        <a className='none'></a>
        <a href='#'>
          <Name width={nameWidth} />
        </a>
        <a href='#' className='none'>
          <Logo width='100' />
        </a>
      </nav>
      <style jsx>{`
        nav {
          align-items: center;
          background-color: #f0f0f0;
          display: flex;
          height: 100%;
          padding: 0rem 1rem;
          width: 100%;
          justify-content: center;
        }

        a {
          height: 100%;
          width: auto;
        }

        .hidden {
          visible: false;
        }

        .none {
          display: none;
        }

        @media only screen and (max-width: 600px) {
          a.logo,
          a.hidden {
            display: none;
          }

          nav {
            justify-content: center;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
