// Core
import React, {useState} from 'react';

import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import Header from '../Header';
import Footer from '../Footer'

// Instruments
import Styles from './styles.module.scss';

export default function TodoManager() {
    const [queryValue, setQueryValue] = useState('');

    const handleQueryValue = (e) => {
        setQueryValue(e.target.value);
    };

    return (
        <section className={Styles.scheduler}>
            <main>
                <Header value={queryValue} onChange={handleQueryValue}/>
                <section>
                    <TodoForm />
                    <TodoList query={queryValue}/>
                </section>
                <Footer query={queryValue}/>
            </main>
        </section>
    );
}
