import Result from "./Components/Result";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import "./app.css";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
import Nav from "./Components/Nav";
function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
    {
    <Nav/>
}
    
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
    </>
  );
}

export default App;
