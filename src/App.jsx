import {useState} from "react";
import "./App.css";
import Question from "./components/Question/Question";
import Start from "./components/Start/Start";
import Finished from "./components/UI/Finished";

function App() {
  const [start, setStart] = useState(false);
  const [answered, setAnswered] = useState(true)
  const [finished, setFinished] = useState(false)

  const startQuizHandler = () => {
    setStart(true);
  };  

  return (
    <div className="App">
      {!finished && (start ? <Question setFinished={setFinished} answered={answered} setAnswered={setAnswered} finished={finished} /> : <Start startQuizHandler={startQuizHandler} answered={answered} setAnswered={setAnswered} />)}
      {finished && <Finished />}
    </div>
  );
}

export default App;
