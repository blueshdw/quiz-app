import Options from "./Options";
import Header from "./Header";
import Footer from "./Footer";
import {QuizData} from "../../Data";
import {useState} from "react";

const Question = ({answered, setAnswered, finished, setFinished}) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-[#212529]">
      <div className="bg-[#3D3D3D] text-white max-w-[1000px] w-full h-[500px] py-5 px-10 border border-white">
        <Header questionNumber={questionNumber} QuizData={QuizData}  />
        <Options
          questionNumber={questionNumber}
          QuizData={QuizData}
          locked={locked}
          setLocked={setLocked}
          score={score}
          setScore={setScore}
        />
        <Footer
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          locked={locked}
          setLocked={setLocked}
          answered={answered}
          setAnswered={setAnswered}
          finished={finished}
          setFinished={setFinished}
        />
        <div className="score mt-2">
          Score: {score} / {QuizData.length}
        </div>
      </div>
    </div>
  );
};

export default Question;
