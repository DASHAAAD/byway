import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

interface State {
  count: number;
}

const Counter = () => {
  const [state, setState] = useState<State>({ count: 0 });
  // setState({ count: state.count + 1 })}

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Сброс</button>
    </div>
  );
};

export default Counter;