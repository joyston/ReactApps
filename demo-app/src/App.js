import Helloworld from "./Components/helloworld";
import Content from "./Components/contents";
import Sample from "./Components/sample";
import './App.css';
import Greeting from "./Components/Events";
import { GreetUser } from "./Components/Events";

function App() {
  const name = "Joyston";
  const num = 7;

  return (
    <div className="App">
      <Helloworld numberProps={num} />
      <Content name={name} number={num} />
      <div className="SheetStyle">Testing css stylesheet!</div>
      <Sample></Sample>
      <br></br>
      <Greeting></Greeting>
      <br></br>
      <GreetUser></GreetUser>
    </div>
  );
}

export default App;
