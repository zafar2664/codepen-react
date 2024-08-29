// store.js
import { configureStore } from '@reduxjs/toolkit';
import codepenReducer from './codepenSlice'; // Adjust the import path as needed

const store = configureStore({
  reducer: {
    codepen: codepenReducer, // Registering the slice reducer under the key 'codepen'
  },
});

export default store;
