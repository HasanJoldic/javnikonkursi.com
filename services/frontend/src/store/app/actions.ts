import { EAppActionTypes } from "./types";

export const setIsDrawerOpen = (isDrawerOpen: boolean) => ({
  type: EAppActionTypes.SET_IS_DRAWER_OPEN,
  payload: { isDrawerOpen },
});
