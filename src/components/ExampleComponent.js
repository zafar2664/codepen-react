// ExampleComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './codepenSlice'; // Adjust the import path as needed

const ExampleComponent = () => {
  const value = useSelector((state) => state.codepen.value); // Reading from the store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ExampleComponent;
