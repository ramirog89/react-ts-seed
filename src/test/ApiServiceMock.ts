import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { getLoginResponse, getTodo_1 } from './entities';

export class ApiServiceMock {
  public login = jest.fn().mockReturnValue(of(getLoginResponse()));
  public getTodoList = jest.fn().mockReturnValue(of([getTodo_1()]));
  public getTodoItem = jest.fn(id => of([getTodo_1()]).pipe(
    map(todoList => todoList.find(todo => todo.id === id))
  ));
}
