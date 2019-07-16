import { ActionsObservable } from 'redux-observable';

import { IEpicDependencies } from '../../state-mgmt/rootState';
import { todoGetEpicFetchStart, todoGetItemEpicFetchStart } from './epics';
import { actions } from './actions';
import { getDeps } from '../../../test/epicDependencies';
import { getTodo_1 } from '../../../test/entities';
import { coreState } from '../core';

describe('auth epics', () => {
  let deps: IEpicDependencies;
  let error;
  beforeEach(() => {
    error = new Error('scary error');
    deps = getDeps();
  });

  describe('todoGetEpicFetchStart', () => {
    it('should get epic for todo list', done => {
      todoGetEpicFetchStart(ActionsObservable.of(actions.fetchStart()), {} as any, deps).subscribe(output => {
        expect(deps.apiService.getTodoList).toBeCalled();
        expect(output).toEqual(actions.fetchSuccess([getTodo_1()]));
        done();
      });
    });

    it('should catch errors and dispatch them to the general error handler', done => {
      deps.apiService.getTodoList = () => { throw error; };
      todoGetEpicFetchStart(ActionsObservable.of(actions.fetchStart()), {} as any, deps).subscribe(output => {
        expect(output).toEqual(coreState.actions.epicError(error));
        done();
      });
    });
  });

  describe('todoGetItemEpicFetchStart', () => {
    it('should get epic for todo item', done => {
      todoGetItemEpicFetchStart(ActionsObservable.of(actions.fetchItemStart('1')), {} as any, deps).subscribe(output => {
        expect(deps.apiService.getTodoItem).toBeCalled();
        expect(output).toEqual(actions.fetchItemSuccess(getTodo_1()));
        done();
      });
    });

    it('should catch errors and dispatch them to the general error handler', done => {
      deps.apiService.getTodoItem = () => { throw error; };
      todoGetItemEpicFetchStart(ActionsObservable.of(actions.fetchItemStart(1)), {} as any, deps).subscribe(output => {
        expect(output).toEqual(coreState.actions.epicError(error));
        done();
      });
    });
  });

});
