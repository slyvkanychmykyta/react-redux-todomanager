import React, { useState } from 'react';
import {connect} from 'react-redux';
import {setAllCompleted} from '../../store/actions/action-creators';

import Checkbox from "../../theme/assets/Checkbox";
import Styles from "../TodoManager/styles.module.scss";



export function Footer({todos, setAllCompleted}) {
    const isChecked = todos.every(({completed}) => completed);

    const handleClick = () => {
        if (!isChecked) {
            setAllCompleted();
        }
    };

    return (
        <footer>
            <Checkbox
                color1={`rgb(0, 0, 0)`}
                color2={`rgb(255, 255, 255)`}
                onClick={handleClick}
                checked={isChecked}
            />
            <span className={Styles.completeAllTasks}>Все задачи выполнены</span>
        </footer>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
   setAllCompleted: () =>  dispatch(setAllCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
