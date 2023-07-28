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

  export default MultipleChoiceQuestion;