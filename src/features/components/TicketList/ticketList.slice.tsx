import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import TodoApi from '../../../api/Todo/Todo';
import { STATUSES } from '../../../types/enums';
import { Todo } from '../../../types/interfases';
import { TodoState } from './ticketListState';

const initialState: TodoState = {
  todoList: [],
};

export const getAllTodos = createAsyncThunk(
  'todo/getAllTodos',
  async () => {
    const response = await TodoApi.getTodoList();
    const updatedResponse: Todo[] = response.map(({ userId, title, id }) => ({
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
    allTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todoList = [...action.payload];
    },
    statusInProgress: (state, action: PayloadAction<number>) => {
      state.todoList[action.payload] = {
        ...state.todoList[action.payload],
        status: STATUSES.IN_PROGRESS,
      };
    },

    statusDone: (state, action: PayloadAction<number>) => {
      state.todoList[action.payload] = {
        ...state.todoList[action.payload],
        status: STATUSES.DONE,
      };
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todoList = [...action.payload];
    });
  },
});

export const { actions: { allTodos, statusInProgress, statusDone }, reducer: todoReducer } = todoSlice;
