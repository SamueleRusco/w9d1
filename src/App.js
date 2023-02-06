import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./componenti/ButtonComponent";
import ImageComponent from "./componenti/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent style={{ color: "green" }} text="Ciao!" />.
      <ButtonComponent style={{ backgroundColor: "green" }} text="Ciao!" />
      <ButtonComponent style={{ "border-color": "red" }} text="Ciao!" />
      <ImageComponent
        src="https://pbs.twimg.com/media/CuDQCh0VYAEpedg.jpg"
        alt="quellochevoglio"
        title="Hello World!"
      />
    </div>
  );
}

export default App;
