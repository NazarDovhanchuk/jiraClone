import { RootState } from '../../../store';
import { AllTodos } from '../../../types/interfases';

export const getAllTodo = (state: RootState): AllTodos[] => state.todo.todos;
