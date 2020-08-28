import { Action } from '@ngrx/store';

export enum EstatusApp {
  StatusAppUpdate = '[StatusApp] Ready Update',
  Session = '[StatusApp] Session Update',
}

export class StatusAppSetReady implements Action {
  public readonly type = EstatusApp.StatusAppUpdate;
  constructor(public payload: boolean) {}
}

export class StatusAppSetSession implements Action {
  public readonly type = EstatusApp.Session;
  constructor(public payload: boolean) {}
}

export type StatusAppActions = StatusAppSetReady | StatusAppSetSession;
