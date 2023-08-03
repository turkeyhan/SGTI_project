import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Question = () => {
    // 질문 상태 관리
    const [Qnum, setQnum] = useState(0);

    // 질문 저장
    const questions = [
        {question : "질문1", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문2", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문3", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문4", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문5", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문6", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문7", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문8", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문9", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문10", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문11", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문12", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문13", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문14", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"},
        {question : "질문15", sel1 : "선택지1", sel2 : "선택지2", sel3 : "선택지3", sel4 : "선택지4"}
    ]

    // 각 질문과 선택지에 대한 가중치 저장
    const score = [
        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],

        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],
    
        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],
    
        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],
    
        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],
    
        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],
    
        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}],
    
        [{score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8},
            {score1: 1, score2:2, score3:3, score4:4, score5:5, score6:6, score7:7, score8:8}]
    ]

    // 질문 개수
    const Size = questions.length;
    
    
    let saveScore = [0, 0, 0, 0, 0, 0, 0, 0];

    // 다음 질문으로 state 변경
    const nextQuestion = () => {
        setQnum(Qnum + 1);
    }
    
    // 이전 질문으로 state 변경
    const prevQuestion = () => {
        setQnum(Qnum - 1);
    }

    return (
        <>
            {
                Qnum === Size - 1
                ?
                //마지막 질문이라면
                <div>
                    <h1>Q{Qnum + 1}: {questions[Qnum].question}</h1>
                    <button><Link to={{pathname: `/Result`,
                    state: {
                        score1: saveScore[0],
                        score2: saveScore[1],
                        score3: saveScore[2],
                        score4: saveScore[3],
                        score5: saveScore[4],
                        score6: saveScore[5],
                        score7: saveScore[6],
                        score8: saveScore[7]
                    }}}>{questions[Qnum].sel1}</Link></button> <br></br>
                    <button><Link to={{pathname: `/Result`,
                    state: {
                        score1: saveScore[0],
                        score2: saveScore[1],
                        score3: saveScore[2],
                        score4: saveScore[3],
                        score5: saveScore[4],
                        score6: saveScore[5],
                        score7: saveScore[6],
                        score8: saveScore[7]
                    }}}>{questions[Qnum].sel2}</Link></button> <br></br>
                    <button><Link to={{pathname: `/Result`,
                    state: {
                        score1: saveScore[0],
                        score2: saveScore[1],
                        score3: saveScore[2],
                        score4: saveScore[3],
                        score5: saveScore[4],
                        score6: saveScore[5],
                        score7: saveScore[6],
                        score8: saveScore[7]
                    }}}>{questions[Qnum].sel3}</Link></button> <br></br>
                    <button><Link to={{pathname: `/Result`,
                    state: {
                        score1: saveScore[0],
                        score2: saveScore[1],
                        score3: saveScore[2],
                        score4: saveScore[3],
                        score5: saveScore[4],
                        score6: saveScore[5],
                        score7: saveScore[6],
                        score8: saveScore[7]
                    }}}>{questions[Qnum].sel4}</Link></button> <br></br>
                </div>
                : 
                //마지막 질문이 아니라면
                <div>
                    <h1>Q{Qnum + 1}: {questions[Qnum].question}</h1>
                    <button onClick={nextQuestion}>{questions[Qnum].sel1}</button> <br></br>
                    <button onClick={nextQuestion}>{questions[Qnum].sel2}</button> <br></br>
                    <button onClick={nextQuestion}>{questions[Qnum].sel3}</button> <br></br>
                    <button onClick={nextQuestion}>{questions[Qnum].sel4}</button> <br></br>
                </div>
            }
            {
                //첫 질문이라면
                Qnum === 0
                ? null
                : <button onClick={prevQuestion}>이전</button>
            }
        </>
    )
};

export default Question;