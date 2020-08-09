import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {addTask} from '../../store/actions';
import { connect } from 'react-redux';

import {generateRandomId} from '../../utils/helpers/helpers';

import Styles from './styles.module.scss';

export function TaskForm({ addTask }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault();
        if (!value.trim()) return;
        const taskId = generateRandomId();
        addTask(taskId, value);
        setValue('');
    }

    return (
        <form className={Styles.form} onSubmit={submitForm}>
            <input className={Styles.addTask} value={value} maxLength='50' onChange={handleChange} placeholder="Описание новой задачи" type="text"/>
            <button className={Styles.submitBtn} type='submit'>Добавить задачу</button>
        </form>
    );
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
   addTask: (id, description) => dispatch(addTask(id, description))
});

export default connect(null, mapDispatchToProps)(TaskForm);
