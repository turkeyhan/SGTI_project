import React from 'react';
import {Link} from "react-router-dom";

const SGTI = () => {
    
    return (
        <>
            <h1>SGTI 검사</h1>
            <p>
                SGTI는 서강대학교에 재학중인 학생에 한해 진행하는 검사입니다.<br></br>
                진행하시겠습니까?
            </p>
            <button>
                <Link to="/Question">시작</Link>
            </button>
        </>
    )
};

export default SGTI;