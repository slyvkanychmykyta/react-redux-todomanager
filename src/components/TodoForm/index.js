import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {addTodo} from '../../store/actions';
import { connect } from 'react-redux';

import {generateRandomId} from '../../instruments';

export function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault();
        if (!value.trim()) return;
        const todoId = generateRandomId();
        addTodo(todoId, value);
        setValue('');
    }

    return (
        <form onSubmit={submitForm}>
            <input value={value} maxLength='50' onChange={handleChange} placeholder="Описание новой задачи" type="text"/>
            <button type='submit'>Добавить задачу</button>
        </form>
    );
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
   addTodo: (id, description) => dispatch(addTodo(id, description))
});

export default connect(null, mapDispatchToProps)(TodoForm);
