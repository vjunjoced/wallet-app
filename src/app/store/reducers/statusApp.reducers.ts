import { initialStatusAppState, StatusApp } from '../state/statusApp.state';
import { StatusAppActions, EstatusApp } from '../actions/statusApp.actions';

export function StatusAppReducer(
  state: StatusApp = initialStatusAppState,
  action: StatusAppActions
) {
  switch (action.type) {
    case EstatusApp.StatusAppUpdate:
      return { ...state, ready: action.payload };
    case EstatusApp.Session:
      return { ...state, session: action.payload };
    default:
      return state;
  }
}
