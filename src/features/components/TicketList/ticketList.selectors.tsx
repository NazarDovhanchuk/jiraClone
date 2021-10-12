import { Todo } from '../../../types/interfases';
import { SelectFromState } from '../../../types/types';

export const getAllTodo:SelectFromState<Todo[]> = ({ todoReducer: { todoList } }) => todoList;
