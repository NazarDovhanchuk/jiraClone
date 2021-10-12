import instance from '../request';
import { TodoSchema } from './TodoSchema';

const todoAPI = async (): Promise<TodoSchema[]> => {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  return instance.get(url).then(({ data }) => data);
};

export default todoAPI;
