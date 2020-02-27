// Core
import React, { useState, useRef } from 'react';
import Checkbox from '../../theme/assets/Checkbox';
import Star from '../../theme/assets/Star';
import Edit from '../../theme/assets/Edit';
import Remove from '../../theme/assets/Remove';

// Instruments
import Styles from './styles.module.scss';

export default function Todo ({todo, editTodo, onRemoveClick, onCompleteClick, onFavoriteClick}) {
    const [focused, setFocused] = useState(false);
    const inputElement = useRef(null);
    const {id, description, completed, favorite} = todo;

    React.useLayoutEffect(() => {
        if (focused) focusOnElement(inputElement);
    }, [focused]);

    const focusOnElement = (elem) => elem.current.focus();
    const isKey = (e,key) => e.key === key;
    const handleDescriptionChange = () => {
        inputElement.current.value !== description ?
            editTodo(id, inputElement.current.value) :
            setFocused(false);
    };

    const onEditBtnClick = () => {
        if (!focused) {
            setFocused(true);
            return;
        }
        handleDescriptionChange();
    };

    const onKeyPress = (e) => {
        if (isKey(e, `Enter`)) handleDescriptionChange();
        if (isKey(e, `Escape`)) {
            if (inputElement.current.value !== description) editTodo(id, description);
            setFocused(false);
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
                <input disabled={!focused} onKeyDown={onKeyPress} ref={inputElement} defaultValue={description} maxLength="50" type="text"/>
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
