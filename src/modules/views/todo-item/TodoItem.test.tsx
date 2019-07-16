import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { getTodo_1 } from '../../../test/entities';
import TodoItem from './TodoItem';

describe('TodoItem Component', () => {
  let Component;
  let props;

  beforeEach(() => {
    global.console.error = () => {/** */};
    props = {
      todoId: getTodo_1().id,
      todoItem: getTodo_1(),
      fetchTodoItem: jest.fn()
    };
    Component = mount(<TodoItem {...props} />);
  });

  it('should render with default props', () => {
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
