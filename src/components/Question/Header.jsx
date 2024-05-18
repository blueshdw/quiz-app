
const Header = ({QuizData, questionNumber}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="question">
          <p className="font-bold text-2xl">{questionNumber + 1} - {QuizData[questionNumber].question}</p>
        </div>
        <div className="question-number">{questionNumber + 1} / {QuizData.length}</div>
      </div>
    </div>
  );
};

export default Header;
