import React from 'react';
import logo from '../images/logo.png';
import './KeepCss.css';
const KeepHeader = () =>
{
    return(
        <>
        <div className="header">
            <img src={logo} alt="logo" height="40px" />
            <h1>Google Keep App</h1>
        </div>

        </>

    )
}

export default KeepHeader;