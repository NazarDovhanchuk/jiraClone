import instance from '../request';
import { TodoSchema } from './TodoSchema';

class TodoApi {
  getTodoList = async (): Promise<TodoSchema[]> => {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    return instance.get(url).then(({ data }) => data);
  };
}

export default new TodoApi();
