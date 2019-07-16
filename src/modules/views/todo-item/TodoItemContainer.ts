import { connect } from 'react-redux';

import { IRootState } from '../../state-mgmt/rootState';
import { todoState } from '../../state-mgmt/todo';
import TodoList from './TodoItem';

export const mapStateToProps = (state: IRootState) => ({
  todoItem: state.todo.todoItem
});

export const mapDispatchToProps = dispatch => ({
  fetchTodoItem: (id) => dispatch(todoState.actions.fetchItemStart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
