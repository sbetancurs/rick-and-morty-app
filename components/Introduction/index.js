import Particles from "react-particles-js";
import { breakpoints, fontSizes, colors } from "style/theme";

const Introduction = () => {
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
        <div className='particles'>
          <Particles
            height={"100vh"}
            params={{
              particles: {
                number: {
                  value: 250,
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                },
                modes: {
                  bubble: {
                    distance: 150,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                  },
                },
              },
            }}
          />
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
          font-weight: 900;
          z-index: 1;
          font-size: 6rem;
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

        .particles {
          left: 0;
          top: 0;
          width: 100%;
          position: absolute;
          z-index: -100;
        }

        .space {
          margin: 0;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
          background: linear-gradient(midnightblue, ${colors.bg_Primary});
          overflow: hidden;
          z-index: -1;
        }

        @media (max-width: ${breakpoints.mobile}) {
          .title {
            font-size: ${fontSizes.font_size_lg};
          }

          div.particles > div {
            height: 100vh !important;
          }
        }
      `}</style>
    </>
  );
};

export default Introduction;
