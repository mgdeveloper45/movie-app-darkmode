import React from "react";
import Movies from './components/Movies/Movies'
import { useSelector, useDispatch } from 'react-redux';
// import { increment_five, increment, decrement } from './actions';

function App() {
  
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const searchMovies = useSelector(state => state.movies)
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(increment_five(5))}>Add by 5</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      { isLogged ? <h3>Logged In</h3> : <h3>Logged Out</h3> } */}
      <Movies/>
    </div>
  );
}

export default App;
