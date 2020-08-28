import { createSelector } from '@ngrx/store';
import { StatusApp } from '../state/statusApp.state';
import { AppState } from '../state/app.state';

const xStatusApp = (state: AppState) => state.statusApp;

export const selectStatusApp = createSelector(
  xStatusApp,
  (state: StatusApp) => state.ready
);

export const selectSessionApp = createSelector(
  xStatusApp,
  (state: StatusApp) => state.session
);
