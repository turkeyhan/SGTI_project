import './App.css';
import React, {useState} from 'react';

//질문과 선택지와 대답을 받는 컴포넌트
const MultipleChoiceQuestion = ({ question, options, onAnswer})=>{
  const [selectedOption, setSelectedOption] = useState(null);
  
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  return(
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    // 여기서 answers 객체를 활용하여 결과를 계산하거나 다음 질문으로 이동할 수 있음
    console.log('사용자가 선택한 답변:', answers);
  };

  return (
    <div>
      <h1>심리테스트</h1>
      <MultipleChoiceQuestion
        question="알바트로스 탑을 보면 무슨 생각이 드나요?"
        options={['아무 생각이 안듦', '아름다움', '심리적 안정을 얻음', '배고픔', '부수고 싶음']}
        onAnswer={(answer) => handleAnswer('Albatross', answer)}
      />
      <MultipleChoiceQuestion
        question="좋아하는 색깔은 무엇인가요?"
        options={['빨강', '파랑', '초록', '노랑', '보라']}
        onAnswer={(answer) => handleAnswer('favoriteColor', answer)}
      />
      <button onClick={handleSubmit}>결과 확인</button>
    </div>
  );
};

export default App;