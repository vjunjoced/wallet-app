import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { UserSesionState } from '../state/userSesion.state';

const xUserSesion = (state: AppState) => state.userSesion;

export const selectUserSesion = createSelector(
  xUserSesion,
  (state: UserSesionState) => state.user
);
