
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    const newCounter = state.counter < 5 ? state.counter + 1 : 5;
    return {
      counter: newCounter
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
