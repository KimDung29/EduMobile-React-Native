/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonReducer from './slice/commonSlice';
import userReducer from './slice/userSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
// Need to separate each one
const persistedCommon = persistReducer(persistConfig, commonReducer);
const persistedUser = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    common: persistedCommon,
    user: persistedUser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
