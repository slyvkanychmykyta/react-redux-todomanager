import React, {useState} from 'react';

export default function Header({value, onChange}) {

    return (
        <header>
            <h1>Планировщик задач</h1>
            <input value={value} onChange={onChange} placeholder="Поиск" type="text"/>
        </header>
    );
}
