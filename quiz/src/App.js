import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import "./App.css";

import { useState, createContext } from "react";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("Menu");
  const [score, setScore] = useState(0);
  return (
    <DataContext.Provider value={{ appState, setAppState,setScore,score }}>
      <div className="App">
        <h1>Quiz Now</h1>
        {appState === "Menu" && <Menu />}
        {appState === "Quiz" && <Quiz />}
        {appState === "Score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
