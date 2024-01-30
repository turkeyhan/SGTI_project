import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Question = () => {
    // 질문 상태 관리
    const [Qnum, setQnum] = useState(0);

    // 질문 저장
    const questions = [
        {question : "알로스가 울고 있는 모습을 보면 무슨 생각이 드나요?",
         sel1 : "나도 같이 울고 싶다",
         sel2 : "아무 생각이 없다",
         sel3 : "싫다",
         sel4 : "귀엽다"},
        {question : "갑자기 학교에 가기 싫을 때, 이유는?",
         sel1 : "날씨가 좋아서",
         sel2 : "졸려서",
         sel3 : "배고파서",
         sel4 : "그냥"},
        {question : "알바트로스 탑 분수대에 사람이 쓰러져 있을 때, 대처 방법은?",
         sel1 : "분수물을 모아 끼얹어 깨운다",
         sel2 : "옆에 같이 눕는다",
         sel3 : "119에 전화한다", 
         sel4 : "무시하고 간다"},
        {question : "OT나 MT에서 내가 주목을 받아서 말할 기회가 생겼습니다. 어떻게 할까요?",
         sel1 : "나의 존재감을 확실하게 심어주기 위해 춤을 춘다", 
         sel2 : "가장 무난한 멘트를 한다", 
         sel3 : "부끄러워하며 숨는다", 
         sel4 : "지켜보는 사람 중 만만한 사람을 골라 싸운다"},
        {question : "오늘은 동아리 거리제입니다. 어느 분야의 동아리로 갈까요?", 
        sel1 : "연행예술분과", 
        sel2 : "종교분과 또는 봉사분과", 
        sel3 : "체육분과", 
        sel4 : "학술분과 또는 사회교양분과"},
        {question : "동아리나 학회에 들어갔습니다. 나의 최적의 역할은?",
         sel1 : "대표자",
         sel2 : "총무", 
         sel3 : "홍보",
         sel4 : "일반인"},
        {question : "오늘은 축제입니다. 나의 행동은?",
         sel1 : "축제는 푸드트럭이지! 푸드트럭 푸드 파이트를 한다", 
         sel2 : "축제는 연예인이지! 연예인을 보기 위한 자리를 잡는다",
         sel3 : "축제는 동아리의 장이지! 내가 직접 동아리원으로 공연한다",
         sel4 : "축제는 남이 놀 때, 공부할 기회지! 로욜라 도서관에 가서 공부한다"},
        {question : "팀플 단톡방에서 아무도 대답이 없습니다. 나의 행동은?", 
        sel1 : "교수님에게 이른다", 
        sel2 : "가만히 있는다", 
        sel3 : "수업 때, 각 인원에게 찾아가서 좋게 타이른다", 
        sel4 : "단톡방에서 나간다"},
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