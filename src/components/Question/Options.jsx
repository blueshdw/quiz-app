import "../../index.css"

const Content = ({QuizData, questionNumber, locked, setLocked, score, setScore}) => {
  const answeredHandler = (e) => {
    const value = e.target.value
    const options = document.querySelectorAll('.option')
    const correctAnswer = QuizData[questionNumber].answer;
    const correctOption = Array.from(options).find((option) => option.value === correctAnswer)
    if (locked) {
      return
    }
    if (correctAnswer === value) {
      e.target.classList.add("true")
      setScore(score + 1)
      setLocked(true)
      
    }else{
      e.target.classList.add("false")
      correctOption.classList.add("true")
      setLocked(true)
    }

    if(questionNumber === (QuizData.length - 1)){
      setLocked(false)
    }
    
  }

  return (
    <div>
      <div className="mt-5">
        <button onClick={answeredHandler} className="option" value={QuizData[questionNumber].options[0]}>{QuizData[questionNumber].options[0]}</button>
        <button onClick={answeredHandler} className="option" value={QuizData[questionNumber].options[1]}>{QuizData[questionNumber].options[1]}</button>
        <button onClick={answeredHandler} className="option" value={QuizData[questionNumber].options[2]}>{QuizData[questionNumber].options[2]}</button>
        <button onClick={answeredHandler} className="option" value={QuizData[questionNumber].options[3]}>{QuizData[questionNumber].options[3]}</button>
      </div>
    </div>
  )
}

export default Content