import { createSlice } from '@reduxjs/toolkit';
import { isArray } from '@apollo/client/utilities';

const initialState = {
  messages: [] as any[],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { message } = action.payload;
      if (isArray(action.payload)) {
        action.payload.map((item) => {
          state.messages = [...state.messages, item];
        })
      } else {
        state.messages = [...state.messages, message];
      }
    },
    clearState: (state) => {
      return initialState;
    }
  }
})

export const { addMessage, clearState } = messagesSlice.actions;
export default messagesSlice.reducer;
