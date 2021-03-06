import QuestionsData from "../data/QuestionData";
import {useState,useEffect,useContext} from "react"
import {DataContext} from "../App"
const Quiz = () => {
  const [current,setCurrent] = useState(0);
  const [selectChoice,setSelectChoice]= useState("");
  const {score, setScore} = useContext(DataContext)
  const {appState,setAppState} = useContext(DataContext)

  useEffect(()=>{
      checkAnswer()
  },[selectChoice])

  const checkAnswer=()=>{
      if(selectChoice !== ""){
          if(selectChoice === QuestionsData[current].answer){
              setScore(score+1)
              nextQuestion()

          }else{
              console.log("ผิด")
              nextQuestion()
              
          }
      }
  }

const nextQuestion = () => {
    setSelectChoice("")
    if(current < 4){
        setCurrent(current+1)
    }else{
        setCurrent(current+1)
        setAppState("Score")
    }
    
}
  return (
    <div className="quiz">
      <h1>{QuestionsData[current].question}</h1>
      <div className="choices">
          <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
          <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
          <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
          <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
          </div>
          <p>{`${current + 1}/5`}</p>
    </div>
  );
};

export default Quiz;
