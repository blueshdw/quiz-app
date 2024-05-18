import Button from "../UI/Button";
import {QuizData} from "../../Data";

const Footer = ({questionNumber, setQuestionNumber, locked, setLocked, answered, setAnswered, finished, setFinished}) => {
  const nextQuestionHandler = () => {
    const options = document.querySelectorAll('.option')
    setLocked(false)
    if (locked) {
    setQuestionNumber(prevState => prevState + 1)
    setAnswered(true)
    }else{
      setAnswered(false)
    }
    
    Array.from(options).map((option) => {
      option.classList.remove("true")
      option.classList.remove("false")
    })

    if ((questionNumber === QuizData.length - 1)) {
      setFinished(true)
    }
  }

  return (
    <div>
      <div onClick={nextQuestionHandler}><Button >Next Question</Button></div>
    </div>
  );
};

export default Footer;
