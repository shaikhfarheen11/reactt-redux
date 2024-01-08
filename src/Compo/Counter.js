import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/redux';



const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
 const toggleCounterHandler = () => {
  dispatch(counterActions.toggleCounter());
 };
   

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
    <div>
    <button onClick={incrementHandler} className={classes.increment}>Increment</button>
    <button onClick={increaseHandler} className={classes.inFive}>Increase By 10</button>
      <button onClick={decrementHandler} className={classes.decrement}>Decrement</button>
    </div>
      <button onClick={toggleCounterHandler} className={classes.button}>
        Toggle Counter
      </button>
    </main>
  );
};
export default Counter;
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//     <main className={classes.counter}>
//     <h1>Redux Counter</h1>
//     <div className={classes.value}>{this.props.counter}</div>
//     <div>
//       <button onClick={this.incrementHandler.bind(this)}>IncrementBy5</button>
//       <button onClick={this.decrementHandler.bind(this)}>DecrementBy5</button>
//     </div>
//     <button onClick={this.toggleCounterHandler} className={classes.button}>
//       Toggle Counter
//     </button>
//   </main>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }
// const mapDispatchToProps = dispatch => {
// return {
//   increment: () => dispatch({ type: 'increment' }),
//   decrement: () => dispatch({type: 'decrement'}),

// }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);