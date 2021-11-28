import { createStore } from 'redux';
import usuarioReducer from './userReducer';
import {persistReducer, persistStore} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'cd4c3b5bd5aa4a4f19c5e1f06b81a0d',
    storage,
}

const persistedReducer = persistReducer(persistConfig, usuarioReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };