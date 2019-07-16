import { mapStateToProps, mapDispatchToProps } from './TodoItemContainer';
import { todoState } from '../../state-mgmt/todo';

describe('TodoListContainer', () => {
  it('should mapStateToProps, ', () => {
    expect(mapStateToProps({ todo: { todoItem: {} } } as any)).toEqual({ todoItem: {} });
  });
  it('should mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props).toEqual({
      fetchTodoItem: expect.any(Function)
    });
  });

  it('should dispatch fetchTodoItem action', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    const todoId = 1;
    props.fetchTodoItem(todoId);
    expect(dispatch).toBeCalledWith(todoState.actions.fetchItemStart(todoId));
  });
});
