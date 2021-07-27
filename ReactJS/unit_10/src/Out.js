
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectValue,
    selectText
} from './app/taskReducerSlice';

export default function Out() {
    const task1 = useSelector(selectValue);  // получаем данные из store из value
    const addText = useSelector(selectText);// получаем данные из store из text
    const dispatch = useDispatch();

    return (
        <div>
            <hr/>
            <h2>Task 1</h2>
            <p>{task1}</p>
            <p>{addText}</p>

        </div>
    );
}

