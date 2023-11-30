import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter < 4 ? state.counter + 2 : state.counter,
      };
    case 'decrement':
      return {
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
