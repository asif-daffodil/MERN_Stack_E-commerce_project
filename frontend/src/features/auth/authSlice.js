import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {
    setCredentials: (state, action) => {
      const { newUser: user, token } = action.payload
      state.user = user;
      state.token = token;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer