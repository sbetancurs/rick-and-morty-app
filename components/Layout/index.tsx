import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ScrollTo from "components/ScrollTo";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main id='main' className='main'>
        <Navbar />
        {children}
        <ScrollTo />
        <Footer />
      </main>
      <style jsx>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          .main {
            display: flex;
            flex-direction: column;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
