import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>CNU</h1>
            <p>
                CNU는 웹 개발 학회입니다.. 어쩌구 저쩌구..
            </p>
            <button>
                <Link to="/SGTI">SGTI 검사하러 가기</Link>
            </button>
        </>
    )
};

export default Home;