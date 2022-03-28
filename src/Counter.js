import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
//어떤 state를 받아 action으로 변경된 새로운 state를 반환하는 함수

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);//userReducer(reducer,initialstate)

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;