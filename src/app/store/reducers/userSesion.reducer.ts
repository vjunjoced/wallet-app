import {
  UserSesionActions,
  EuserSesionActions,
} from '../actions/userSesion.actions';
import {
  UserSesionState,
  initialUserSesionState,
} from '../state/userSesion.state';

export function UserSesionReducer(
  state: UserSesionState = initialUserSesionState,
  action: UserSesionActions
) {
  switch (action.type) {
    case EuserSesionActions.update:
      return { ...state, user: action.payload };
    case EuserSesionActions.updateStats:
      return { ...state, stats: action.payload };
    default:
      return state;
  }
}
