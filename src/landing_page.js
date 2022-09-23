import React from 'react';
import {useNavigate} from "react-router-dom"
import './App.css';

function LandingPage(){
    const navigate = useNavigate();
    const postview= ()=>{
        navigate('/postview');
    
    }
    return (
        <>
        <div className='landing-container'>
            <div>
                <img src='hyderabad.jpg' alt='no'></img>
            </div>
            <div className='rightside'>
                <div><h1>Project-Hyderabad</h1></div>
                <button onClick={()=>postview()}>Enter</button>
            </div>
        </div>
        </>
    );
}
export default LandingPage;