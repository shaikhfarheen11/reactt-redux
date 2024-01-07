import { Component } from 'react';
import {  connect } from 'react-redux';

import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter);

//   const incrementHandler = () => {
//     dispatch({ type: 'increment' });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' });
//   };



//   const toggleCounterHandler = () => {};
   

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//     <div className={classes.value}>{counter}</div>
//     <div>
//     <button onClick={this.incrementHandler.bind(this)}>IncrementBy5</button>
//       <button onClick={this.decrementHandler.bind(this)}>DecrementBy5</button>
//     </div>
//       <button onClick={toggleCounterHandler} className={classes.button}>
//         Toggle Counter
//       </button>
//     </main>
//   );
// };
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
    <main className={classes.counter}>
    <h1>Redux Counter</h1>
    <div className={classes.value}>{this.props.counter}</div>
    <div>
      <button onClick={this.incrementHandler.bind(this)}>IncrementBy5</button>
      <button onClick={this.decrementHandler.bind(this)}>DecrementBy5</button>
    </div>
    <button onClick={this.toggleCounterHandler} className={classes.button}>
      Toggle Counter
    </button>
  </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}
const mapDispatchToProps = dispatch => {
return {
  increment: () => dispatch({ type: 'increment' }),
  decrement: () => dispatch({type: 'decrement'}),

}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);