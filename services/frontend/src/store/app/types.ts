export enum EAppActionTypes {
  SET_IS_DRAWER_OPEN = "@@app/SET_IS_DRAWER_OPEN",
}

export interface IAppState {
  isDrawerOpen: boolean;
}
