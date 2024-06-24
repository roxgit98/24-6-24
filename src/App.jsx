import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import image from "./img/The-Dubai-Marina-District.webp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent imgLink={image} imgAlt={"dubai"} />
        <ButtonComponent id={"button"} textButton={"cliccami!"} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
