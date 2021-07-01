const Footer = () => {
  return <>
    <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Sebastian Betancur
        </a>
    </footer>
    <style jsx>{`
        footer {
          align-items: center;
          background-color:#202329;
          bottom:0;
          color:#fff;
          display: flex;
          height: 70px;
          justify-content: center;
          position:absolute;
          width: 100%;
        }
      `}</style>
    </>
}

export default Footer;