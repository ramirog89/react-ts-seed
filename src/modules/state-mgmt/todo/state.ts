import { GeneralModel, TodoModel } from '../../models';

export interface IState {
  todoMap: GeneralModel.IEntityMap<TodoModel.ITodo>;
  todoItem: TodoModel.ITodo;
}

export const initialState: IState = {
  todoMap: {},
  todoItem: {
    id: '',
    name: '',
    description: ''
  },
};
