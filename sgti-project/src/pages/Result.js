import React, {useState} from 'react';
import { useLocation } from "react-router-dom"

const Result = () => {
    const [type, setType] = useState(1);
    const location = useLocation();
    console.log(location.state)
    return(
        <div>
            <h1>결과화면</h1>
            <p>
                {location.state.score1} <br></br>
                {location.state.score2} <br></br>
                {location.state.score3} <br></br>
                {location.state.score4} <br></br>
                {location.state.score5} <br></br>
                {location.state.score6} <br></br>
                {location.state.score7} <br></br>
                {location.state.score8} <br></br>
            </p>
        </div>
    )
};

export default Result;