import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
      };

    return (
        <li>
            <h3>{props.question}</h3>
            <p>{props.content}</p>
            <button className={isActive ? 'active' : ''} onClick={handleClick}><FontAwesomeIcon icon={faChevronDown} /></button>
        </li>
    );
};

export default Item;