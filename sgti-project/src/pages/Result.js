import React, {useState} from 'react';
import { useLocation } from "react-router-dom"

const Showresult = (props) => {
    if(props.idx === 1){
        return (
            <>
                
            </>
        )
    }
}

const Result = () => {
    const [type, setType] = useState(0);
    const location = useLocation();
    console.log(location.state)

    let maxNum = 0;
    let maxIdx = 0;
    const score = [location.state.score1,
        location.state.score2,
        location.state.score3,
        location.state.score4,
        location.state.score5,
        location.state.score6,
        location.state.score7,
        location.state.score8]


    for(let i = 0; i < 8; i++){
        if(maxNum < score[i]){
            maxNum = score[i];
            maxIdx = i + 1;
        }
    }
    
    const Setfunction = () => {
        setType(maxIdx);    


    return(
        <div>
            <h1>결과화면</h1>
            <p>
                <Setfunction></Setfunction>
                <Showresult idx = {type}></Showresult>
            </p>
        </div>
    )
};

export default Result;