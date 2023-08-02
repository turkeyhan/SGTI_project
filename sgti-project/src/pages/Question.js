import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Question = () => {
    const [Qnum, setQnum] = useState(0);
    const questions = [
        {question : "질문1", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문2", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문3", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문4", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"}
    ]
    const Size = questions.length;
    const nextQuestion = () => {
        setQnum(Qnum + 1);
    }
    
    const prevQuestion = () => {
        setQnum(Qnum - 1);
    }

    return (
        <>
            {
                Qnum === Size - 1
                ?
                <div>
                    <h1>Q{Qnum + 1}: {questions[Qnum].question}</h1>
                    <button><Link to="/Result">{questions[Qnum].sel1}</Link></button> <br></br>
                    <button><Link to="/Result">{questions[Qnum].sel2}</Link></button> <br></br>
                    <button><Link to="/Result">{questions[Qnum].sel3}</Link></button> <br></br>
                    <button><Link to="/Result">{questions[Qnum].sel4}</Link></button> <br></br>
                </div>
                : 
                <div>
                    <h1>Q{Qnum + 1}: {questions[Qnum].question}</h1>
                    <button onClick={nextQuestion}>{questions[Qnum].sel1}</button> <br></br>
                    <button onClick={nextQuestion}>{questions[Qnum].sel2}</button> <br></br>
                    <button onClick={nextQuestion}>{questions[Qnum].sel3}</button> <br></br>
                    <button onClick={nextQuestion}>{questions[Qnum].sel4}</button> <br></br>
                </div>
            }
            {
                Qnum === 0
                ? null
                : <button onClick={prevQuestion}>이전</button>
            }
        </>
    )
};

export default Question;