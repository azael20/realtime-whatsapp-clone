import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../types/Auth';

const initialState: AuthState = {
  id: '',
  username: '',
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.id = '';
      state.username = '';
      state.isAuthenticated = false;
    }
  }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
