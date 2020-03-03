// Core
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';


import Checkbox from '../../theme/assets/Checkbox';
import Star from '../../theme/assets/Star';
import Edit from '../../theme/assets/Edit';
import Remove from '../../theme/assets/Remove';

// Instruments
import Styles from './styles.module.scss';

export default function Todo ({todo, editTodo, onRemoveClick, onCompleteClick, onFavoriteClick}) {
    const [active, setActive] = useState(false);
    const inputElement = useRef(null);
    const {id, description, completed, favorite} = todo;

    React.useLayoutEffect(() => {
        if (active) focusOnElement(inputElement);
    }, [active]);

    const focusOnElement = (elem) => elem.current.focus();
    const isKey = (e,key) => e.key === key;
    const isEqual = (a, b) => a === b;

    const handleDescriptionChange = () => {
        if (!isEqual(inputElement.current.value, description)) {
            editTodo(id, inputElement.current.value);
        }
        setActive(false);
    };
    const onEditBtnClick = () => {
        if (active) {
            handleDescriptionChange();
        } else {
            setActive(true);
        }
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
            <div className={Styles.content}>
                <Checkbox
                    className={Styles.toggleTaskCompletedState}
                    color1={`rgb(59, 142, 243)`}
                    color2={`rgb(255, 255, 255)`}
                    onClick={() => onCompleteClick(id)}
                    checked={completed}
                />
                <input disabled={!active} onKeyDown={onKeyPress} ref={inputElement} defaultValue={description} maxLength="50" type="text"/>
            </div>
            <div className={Styles.actions}>
                <Star inlineBlock
                      color1={`rgb(59, 142, 243)`}
                      color2={`rgb(0, 0, 0)`}
                      className={Styles.toggleTaskFavoriteState}
                      onClick={() => onFavoriteClick(id)}
                      checked={favorite}
                />
                <Edit inlineBlock
                      color1={`rgb(59, 142, 243)`}
                      color2={`rgb(0, 0, 0)`}
                      className={Styles.updateTaskMessageOnClick}
                      onClick={onEditBtnClick}
                />
                <Remove
                    inlineBlock
                    color1={`rgb(59, 142, 243)`}
                    color2={`rgb(0, 0, 0)`}
                    onClick={() => onRemoveClick(id)}
                />
            </div>
        </li>
    )
};

Todo.propTypes = {
    todo: PropTypes.shape({
            id: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            favorite: PropTypes.bool.isRequired
        }
    ).isRequired,
    editTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};
