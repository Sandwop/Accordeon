import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {

    const [liActive, setLiActive] = useState(false);

    const handleClick = event => {
        setLiActive(current => !current);
      };

    return (
        <li className={liActive ? 'active' : ''}>
            <h3>{props.question}</h3>
            <p>{props.content}</p>
            <button onClick={handleClick}><FontAwesomeIcon icon={faChevronDown} /></button>
        </li>
    );
};

export default Item;