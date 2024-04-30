import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../features/Counter/counterSlice.js';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <p>Counter</p>
            <h1>Counter is: {count}</h1>
            <button onClick={() => dispatch(add())}>Add</button>
            <button onClick={() => dispatch(remove())}>Remove</button>
        </>
    );
};

export default Counter;
