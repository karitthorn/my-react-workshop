import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionData";

const Score = () => {
  const {score}= useContext(DataContext)
  const {setAppState,setScore}= useContext(DataContext)

  const restartApp = () => {
    setScore(0)
    setAppState("Menu")
  }
  return (
    <div className="score">
      <h1>สรุปผลการทดสอบ</h1>
      <h2>{score} / {QuestionsData.length}</h2>
      <button onClick={restartApp}>ทำเเบบทดสอบอีกครั้ง</button>
    </div>
    
  );
};

export default Score;
