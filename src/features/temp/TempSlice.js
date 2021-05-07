import { createSlice } from '@reduxjs/toolkit';

export const tempSlice = createSlice({
  name: 'temp',
  initialState: {
      value: '',
  },
  reducers: {
    storeValue: (state, action) => {
        console.log(action.payload);
      state.value = action.payload;
    },
    
  },
});

export const { storeValue } = tempSlice.actions;

export const selectValue = (state) => state.temp.value;


export default tempSlice.reducer;