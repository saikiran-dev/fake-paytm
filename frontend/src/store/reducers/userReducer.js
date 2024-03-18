import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    setUser(state, action) {
      state.isAuthenticated = action;
    }
  }
});

export const {
  actions: { setUser },
  reducer
} = userSlice;

export default reducer;
