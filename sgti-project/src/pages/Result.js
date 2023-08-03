import React from 'react';
import useLocation from "react-router-dom"

const Result = (props) => {
    console.log(props.location.state);
    return(
        <div>
            <h1>결과화면</h1>
            {/* <p>
                {this.props.location.state.score1} <br></br>
                {this.props.location.state.score2} <br></br>
                {this.props.location.state.score3} <br></br>
                {this.props.location.state.score4} <br></br>
                {this.props.location.state.score5} <br></br>
                {this.props.location.state.score6} <br></br>
                {this.props.location.state.score7} <br></br>
                {this.props.location.state.score8} <br></br>
            </p> */}
        </div>
    )
};

export default Result;