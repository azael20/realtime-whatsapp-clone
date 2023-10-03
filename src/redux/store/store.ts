import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../slices/auth/auth';
import messagesReducer from '../slices/messages/messages';
import activityReducer from '../slices/activity/activity';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  user: authReducer,
  messages: messagesReducer,
  activity: activityReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export default store;
