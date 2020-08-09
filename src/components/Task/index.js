// Core
import React, { useState, useRef, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.module.scss';
import {FaStar} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import {GrCheckbox} from "react-icons/gr";
import {GrCheckboxSelected} from "react-icons/gr";


export default function Task ({task, editTodo, onRemoveClick, onCompleteClick, onFavoriteClick}) {
    const [active, setActive] = useState(false);
    const inputElement = useRef(null);
    const {id, description, completed, favorite} = task;

    useLayoutEffect(() => {
            if (active) focusOnRefElement(inputElement);
        }, [active]);

    const focusOnRefElement = (elem) => elem.current.focus();
    const isKey = (e,key) => e.key === key;
    const isEqual = (a, b) => a === b;

    const handleDescriptionChange = () => {
        if (!isEqual(inputElement.current.value, description)) {
            editTodo(id, inputElement.current.value);
        }
        setActive(false);
    };
    const onEditBtnClick = () => {
        active ? handleDescriptionChange() : setActive(true);
    };
    const onKeyPress = (e) => {
        if (isKey(e, `Enter`)) handleDescriptionChange();
        if (isKey(e, `Escape`) && !isEqual(inputElement.current.value, description)) {
            inputElement.current.value = description;
            setActive(false);
        }
    };

    return (
        <li className={Styles.task}>
            <div className={Styles.taskContent}>
                <span onClick={() => onCompleteClick(id)}>
                    {completed ? <GrCheckboxSelected /> : <GrCheckbox />}
                </span>
                <input className={Styles.taskEdit} disabled={!active} onKeyDown={onKeyPress} ref={inputElement} defaultValue={description} maxLength="50" type="text"/>
            </div>
            <div className={Styles.taskActions}>
                <FaStar className={`${Styles.actionIcon} ${favorite ? Styles.isFavorite : ``}`}
                        onClick={() => onFavoriteClick(id)}
                />
                <FaEdit className={Styles.actionIcon}
                        onClick={onEditBtnClick}
                />
                <MdClose
                    className={Styles.actionIcon}
                    onClick={() => onRemoveClick(id)}
                />
            </div>
        </li>
    )
};

Task.propTypes = {
    task: PropTypes.shape({
            id: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            favorite: PropTypes.bool.isRequired
        }
    ).isRequired,
    editTask: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onCompleteClick: PropTypes.func.isRequired,
    onFavoriteClick: PropTypes.func.isRequired
};
