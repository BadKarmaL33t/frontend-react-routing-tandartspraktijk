import React from 'react';
import {useNavigate} from "react-router-dom";

function Button({ label, className, message, path }) {
    const navigate = useNavigate();

    function clickHandler(e) {
        e.preventDefault();
        console.log(message)
        navigate(path);
    }

    return (
        <button type="button" className={className} onClick={clickHandler}>
            {label}
        </button>
    );
}

export default Button;