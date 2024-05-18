import Button from "../UI/Button";

const Start = ({startQuizHandler}) => {
  
  return (
    <div className="w-full h-[100vh] bg-[#212529] text-white flex justify-center items-center">
      <div>
        <h1 className="text-3xl">Quiz App with React</h1>
        <div className="button" onClick={startQuizHandler}>
          <Button>Start Quiz</Button>
        </div>
      </div>
    </div>
  );
};

export default Start;
