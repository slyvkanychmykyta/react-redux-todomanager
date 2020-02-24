import React, {useState} from 'react';
import {addTodo} from '../../store/actions';
import { connect } from 'react-redux';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault();
        if (!value.trim()) return;
        const todoId = Date.now();
        addTodo(todoId, value);
        setValue('');
    }

    return (
        <form onSubmit={submitForm}>
            <input value={value} onChange={handleChange} placeholder="Описание новой задачи" type="text"/>
            <button type='submit'>Добавить задачу</button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
   addTodo: (id, description) => dispatch(addTodo(id, description))
});

export default connect(null, mapDispatchToProps)(TodoForm);
