/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import todoAPI from '../api/Todo/Todo';
import { STATUSES } from '../types/enums';
import { AllTodos, Todos } from '../types/interfases';

const initialState: Todos = {
  todos: [],
};

export const getAllTodos = createAsyncThunk(
  'todo/getAllTodos',
  async () => {
    const response = await todoAPI();
    const updatedResponse: AllTodos[] = response.map(({ userId, title, id }) => ({
      userId,
      id,
      title,
      status: STATUSES.TODO,
    }));

    return updatedResponse;
  },
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    allTodos: (state, action: PayloadAction<Todos[]>) => {
      [...action.payload];
    },
    statusInProgress: (state, action: PayloadAction<number>) => {
      state.todos[action.payload] = {
        ...state.todos[action.payload],
        status: STATUSES.IN_PROGRESS,
      };
    },

    statusDone: (state, action: PayloadAction<number>) => {
      state.todos[action.payload] = {
        ...state.todos[action.payload],
        status: STATUSES.DONE,
      };
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todos = [...action.payload];
    });
  },
});

export const { allTodos, statusInProgress, statusDone } = todoSlice.actions;

export default todoSlice.reducer;
