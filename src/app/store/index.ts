/**
 * index
 */

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlarm from './alarm-reducer';
import {State, reducer} from './alarm-reducer'

export interface appState {
    alarm: State;
}

export const reducers: ActionReducerMap<appState, any> = {
    alarm: reducer,
};

export const getAlarmState = createFeatureSelector<fromAlarm.State>('alarm');

export const getAlarms = createSelector(
    getAlarmState,
    fromAlarm.getAlarms
);
