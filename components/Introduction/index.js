const Introduction = () => {
  const COUNT_OF_STARS = 30;
  const starsArray = Array(COUNT_OF_STARS).fill("");

  const createStar = (i) => {
    const style = {
      width: `calc(${Math.random() * 1.5 + 1} * 1px)`,
      height: `calc(${Math.random() * 1.5 + 1} * 4px)`,
      left: `calc(${Math.ceil(Math.random() * 100)} * 1vw)`,
      animationDuration: `calc(${Math.random() * 2 + 1} * 1s)`,
      animationDelay: `calc(${i * -0.05} * 1s)`,
    };

    return;
  };

  const getLeft = () => Math.ceil(Math.random() * 100);
  const getSize = () => Math.random() * 1.5 + 1;
  const getOpacity = () => Math.random() * 0.3 + 0.5;
  const getDuration = () => Math.random() * 2 + 1;
  const getDelay = (i) => i * -0.05;

  return (
    <>
      <section className='space'>
        <div className='rocket'>
          <span className='fins'></span>
        </div>
        <div className='intro'>
          <h1 className='title'>
            <a href='https://rickandmortyapi.com/'>Rick and Morty App!</a>
          </h1>
          <p className='description'>
            Let´s go to know more about the characters
          </p>
        </div>
        <div className='line'>
          <div className='arrow'>
            <div className='pin'></div>
            <div className='pin'></div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .logo {
          width: 90vw;
          height: max-content;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          border: medium none;
          font-weight: 900;
          z-index: 1;
          font-size: 5.625rem;
          word-wrap: break-word;
        }

        .title,
        .description {
          text-align: center;
          color: #fff;
        }

        .description {
          font-size: 1.5rem;
        }

        .line {
          border-bottom: solid 2px #fff;
          height: 40px;
          position: relative;
          width: 50%;
          z-index: 1;
        }
        .arrow {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          height: 20px;
          width: 80px;
          z-index: 2;
          background-color: midnightblue;
        }
        .arrow .pin {
          width: calc(50% + 5px);
          height: 2px;
          background: #fff;
          display: inline-block;
          float: left;
          transform: rotate(25deg);
          transform-origin: 0 0;
        }
        .arrow .pin:last-child {
          transform: rotate(-25deg);
          transform-origin: 100% 0;
          float: right;
          margin-top: -2px;
        }

        .space {
          margin: 0;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
          background: linear-gradient(black, midnightblue);
          overflow: hidden;
          z-index: -1;
        }

        .rocket {
          width: 7em;
          height: 11em;
          font-size: 16px;
          background: radial-gradient(
              circle at 3.5em 5em,
              transparent 1.5em,
              lightslategray 1.5em,
              lightslategray 2em,
              transparent 2em
            ),
            radial-gradient(
              circle at 3.3em 5.2em,
              deepskyblue 1.4em,
              transparent 1.6em
            ),
            radial-gradient(circle at 3.5em 5em, white 1.5em, transparent 1.5em),
            linear-gradient(whitesmoke, darkgray);
          border-radius: 50% / 70% 70% 5% 5%;
          position: relative;
        }

        .rocket::before {
          content: "";
          position: absolute;
          width: 6em;
          height: 2em;
          background-color: #444;
          border-radius: 20%;
          top: 10em;
          left: 0.5em;
          z-index: -1;
        }

        .rocket::after {
          content: "";
          position: absolute;
          box-sizing: border-box;
          width: 4em;
          height: 4em;
          background: gold;
          top: 10em;
          left: 1.5em;
          border-radius: 80% 0 50% 45% / 50% 0 80% 45%;
          transform: rotate(135deg);
          border: 0.5em solid orange;
          z-index: -2;
          animation: flame-spout 0.3s infinite;
        }

        @keyframes flame-spout {
          0%,
          100% {
            filter: opacity(0.1);
          }

          50% {
            filter: opacity(1);
          }
        }

        .fins::before,
        .fins::after {
          content: "";
          position: absolute;
          width: 2em;
          height: 6em;
          background: linear-gradient(tomato, darkred);
          top: 7em;
        }

        .fins::before {
          left: -2em;
          border-radius: 3em 0 50% 100%;
        }

        .fins::after {
          right: -2em;
          border-radius: 0 3em 100% 50%;
        }
      `}</style>
    </>
  );
};

export default Introduction;
