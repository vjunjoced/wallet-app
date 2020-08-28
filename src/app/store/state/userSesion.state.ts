import { User } from 'src/app/class/user';

export interface UserSesionState {
  user: User;
}

export const initialUserSesionState: UserSesionState = {
  user: null,
};
