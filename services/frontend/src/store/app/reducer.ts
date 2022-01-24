import { Reducer } from "redux";

import { EAppActionTypes, IAppState } from "./types";
import { setIsDrawerOpen } from "./actions";

const INITIAL_STATE: IAppState = {
  isDrawerOpen: false,
};

const reducer: Reducer<IAppState> = (state = INITIAL_STATE, action): IAppState => {
  switch (action.type) {
    case EAppActionTypes.SET_IS_DRAWER_OPEN: {
      const { payload } = action as ReturnType<typeof setIsDrawerOpen>;
      return { ...INITIAL_STATE, ...payload };
    }

    default:
      return state;
  }
};

export default reducer;
