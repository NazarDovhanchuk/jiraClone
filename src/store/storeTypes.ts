import { store } from './configureStore';

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
