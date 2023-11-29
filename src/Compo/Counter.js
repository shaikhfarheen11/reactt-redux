
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler} className={classes.button}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
