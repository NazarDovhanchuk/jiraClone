import { AppState } from '../store/storeTypes';

export type SelectFromState<T> = (state: AppState) => T;
