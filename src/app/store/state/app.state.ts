import { StatusApp, initialStatusAppState } from './statusApp.state';
import { UserSesionState, initialUserSesionState } from './userSesion.state';

export interface AppState {
  statusApp: StatusApp;
  userSesion: UserSesionState;
}

export const initialAppState: AppState = {
  statusApp: initialStatusAppState,
  userSesion: initialUserSesionState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
