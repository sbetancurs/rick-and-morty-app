import Head from 'next/head'
import Navbar from "components/Navbar"
import Footer from "components/Footer"

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }:LayoutProps) => {
  return (
    <>
      <Head>
        <title>Rick and Morty App!</title>
        <meta name="description" content="Rick and Morty App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="body">
        <Navbar/>
        {children}
      </body>
      <Footer />
      <style jsx>{`
        body{
          padding:0;
          margin:0;
        }
      
      `}</style>
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          .body{
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
  )
}

export default Layout;