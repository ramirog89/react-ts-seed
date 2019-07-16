import { TodoModel } from '../../models';

export enum ActionType {
  FETCH_START = '[todo] fetch start',
  FETCH_SUCCESS = '[todo] fetch success',
  FETCH_ITEM_START = '[todo] fetch item start',
  FETCH_ITEM_SUCCESS = '[todo] fetch item success',
}

export const actions = {
  fetchStart: () => ({ type: ActionType.FETCH_START, payload: null }),
  fetchSuccess: (todoList: TodoModel.ITodo[]) => ({ type: ActionType.FETCH_SUCCESS, payload: { todoList } }),
  fetchItemStart: (todoId: string) => ({ type: ActionType.FETCH_ITEM_START, payload: { todoId } }),
  fetchItemSuccess: (todoItem: TodoModel.ITodo) => ({ type: ActionType.FETCH_ITEM_SUCCESS, payload: { todoItem } })
};
