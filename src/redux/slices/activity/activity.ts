import { createSlice } from '@reduxjs/toolkit';
import { ActivityState } from '../../types/Activity';

const initialState: ActivityState = {
  isLoading: false,
  error: {
    buttonColor: null,
    title: null,
    message: null,
  }
}

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    activityStarted: (state) => {
      state.isLoading = true;
      state.error = {
        buttonColor: null,
        title: null,
        message: null,
      }
    },
    activityFinished: (state) => {
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = {
        buttonColor: '#ff4141' || null,
        title: action.payload.title,
        message: action.payload.message,
      }
    },
    clearError: (state) => {
      state.error = {
        buttonColor: null,
        title: null,
        message: null,
      }
    }
  }
})

export const {
  activityStarted,
  activityFinished,
  clearError,
  setError
} = activitySlice.actions;
export default activitySlice.reducer;
