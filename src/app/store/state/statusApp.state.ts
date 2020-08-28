export interface StatusApp {
  ready: boolean;
  session: boolean;
}

export const initialStatusAppState: StatusApp = {
  ready: true,
  session: false,
};
