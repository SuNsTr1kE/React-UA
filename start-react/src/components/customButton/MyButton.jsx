import React from 'react';
import style from '.\MyButton.module.css'

function MyButton(props) {
    return (
        <button className={style.custom}>
            Test module css 
        </button>
    );
}

export default MyButton;