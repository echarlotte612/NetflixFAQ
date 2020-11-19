import React from 'react';
import Plus from '../images/plusIcon.png';
import './Faq.css';



function Faq(props) {


    return (
        <div>
            <h4>{props.title}</h4>
            <img src={Plus} alt="Plus" />
        </div>
    )
}

export default Faq;