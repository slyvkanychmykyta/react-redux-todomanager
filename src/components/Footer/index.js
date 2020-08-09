import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setAllCompleted} from '../../store/actions/action-creators';

import Checkbox from "../../theme/assets/Checkbox";

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
