import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ethan Jaynes</h1>
      </header>
      <section>
        <p>
          Brooklyn, NY
          <br />
          Senior Software Engineer at{" "}
          <a href="https://www.olo.com/" target="_blank" rel="noreferrer">
            Olo
          </a>
        </p>
      </section>
      <section>
        <p>
          <a href="mailto:ethandjay@gmail.com" target="_blank" rel="noreferrer">
            Contact
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/ethanjaynes1/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://twitter.com/ethan_jaynes"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
