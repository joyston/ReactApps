import Helloworld from "./Components/helloworld";
import Content from "./Components/contents";

function App() {
  const name = "Joyston";
  const num = 7;

  return (
    <div className="App">
      <Helloworld numberProps={num} />
      <Content name={name} number={num} />
    </div>
  );
}

export default App;
