import React, { memo, useEffect } from 'react';

import { TodoModel } from '../../models';

export interface ITodoItemProps {
  todoId: number;
  todoItem: TodoModel.ITodo;
  fetchTodoItem: (id: number) => void;
}

const TodoItem = ({ todoId, fetchTodoItem, todoItem }: ITodoItemProps) => {
  useEffect(() => { fetchTodoItem(todoId); }, []); // eslint-disable-line
  return (
    <div className="container" key="TodoItem">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr key={todoItem.id}>
            <td>{todoItem.id}</td>
            <td>{todoItem.name}</td>
            <td>{todoItem.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default memo(TodoItem);
