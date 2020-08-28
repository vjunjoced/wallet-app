import { Action } from '@ngrx/store';

export enum EuserSesionActions {
  update = '[UserSesion] Update',
  updateStats = '[UserSesion] Update Stats',
}

export class UserSesionUpdate implements Action {
  public readonly type = EuserSesionActions.update;
  constructor(public payload: any) { }
}

export class UserUpdateStats implements Action {
  public readonly type = EuserSesionActions.updateStats;
  constructor(public payload: any) { }
}

export type UserSesionActions = UserSesionUpdate | UserUpdateStats;
