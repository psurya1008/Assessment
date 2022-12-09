import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    randomize: (state)=>{
      state.value=Number(Math.floor(Math.random()*100));
    },
  },

});

export const { randomize } = counterSlice.actions;


export const selectCount = (state) => state.counter.value;


export default counterSlice.reducer;
