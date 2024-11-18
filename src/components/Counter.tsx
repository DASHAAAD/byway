// import React, { useState } from 'react';
// import { useAppSelector, useAppDispatch } from '../app/hooks';
// import { increment, decrement, reset } from './counterSlice';

// interface State {
//   count: number;
// }

// const Counter = () => {

//   const count = useAppSelector((state) => state.counter.value);
//   const dispatch = useAppDispatch();

//   return (
//     <div style={{backgroundColor: 'black'}}>
//       <h1>Счётчик: {count}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button onClick={() => dispatch(reset())}>Сброс</button>
//     </div>
//   );
// };

// export default Counter;