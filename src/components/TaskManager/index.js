// Core
import React from 'react';

import TodoList from '../TaskList';
import TodoForm from '../TaskForm';
import Header from '../Header';
import Footer from '../Footer'

// Instruments
import Styles from './styles.module.scss';

export default function TodoManager() {
    return (
        <section className={Styles.scheduler}>
            <main>
                <Header />
                <section>
                    <TodoForm />
                    <TodoList />
                </section>
                <Footer />
            </main>
        </section>
    );
}
