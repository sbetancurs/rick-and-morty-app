/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { breakpoints } from "../../style/theme";

export default function ScrollTo() {
  const [end, setEnd] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    const maxY = getMaxY();

    if (window.scrollY < maxY) {
      setEnd(false);
    } else if (window.scrollY === maxY) {
      setEnd(true);
    }
  };

  const scrollTo = () => {
    let scroll = getMaxY();
    if (window.scrollY === scroll) {
      scroll = 0;
    }

    window &&
      window.scrollTo({
        top: scroll,
        behavior: "smooth",
      });
  };

  const getMaxY = () =>
    window.scrollMaxY ||
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

  return (
    <>
      <div className='scroll'>
        <a onClick={scrollTo} className='float'>
          {end ? "☝️" : "👇"}
        </a>
      </div>
      <style jsx>{`
        .float {
          align-items: center;
          animation: breathing 1.5s linear infinite normal;
          background-color: midnightblue;
          border-radius: 50px;
          bottom: 40px;
          box-shadow: 2px 2px 3px #fff;
          color: white;
          cursor: pointer;
          display: flex;
          font-size: 3rem;
          height: 65px;
          justify-content: center;
          padding-bottom: 0.5rem;
          position: fixed;
          right: 40px;
          text-align: center;
          transform: scale(1);
          width: 65px;
        }
        @keyframes breathing {
          0% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }

          25% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
          }

          60% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }

          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }

        @media (max-width: ${breakpoints.pc}) {
          .float {
            right: 20px;
            width: 50px;
            height: 50px;
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
