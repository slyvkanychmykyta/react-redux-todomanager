import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setAllCompleted} from '../../store/actions/action-creators';

import {GrCheckbox} from "react-icons/gr";
import {GrCheckboxSelected} from "react-icons/gr";

import Styles from './styles.module.scss';

export function Footer({tasks, setAllCompleted}) {
    const isChecked = tasks.every(({completed}) => completed);

    const handleClick = () => {
        if (!isChecked) {
            setAllCompleted();
        }
    };

    return (
        <footer className={Styles.footer}>
            <input className={Styles.checkbox} onClick={handleClick} type="checkbox" id="check-all-tasks"/>
            <label className={Styles.checkboxLabel} htmlFor="check-all-tasks">
                <span className={Styles.iconWrapper}>
                    {isChecked ? <GrCheckboxSelected/> : <GrCheckbox/>}
                </span>
                <span className={Styles.completeAllTasks}>Все задачи выполнены</span>
            </label>
        </footer>
    )
}

Footer.propTypes = {
    tasks: PropTypes.array.isRequired,
    setAllCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
   setAllCompleted: () =>  dispatch(setAllCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
