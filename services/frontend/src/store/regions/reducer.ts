import { Reducer } from "redux";

import { ERegionsActionType, IRegionsState } from "./types";
import { setRegions } from "./actions";

const INITIAL_STATE: IRegionsState = {
  data: [],
};

const reducer: Reducer<IRegionsState> = (
  state = INITIAL_STATE,
  action
): IRegionsState => {
  switch (action.type) {
    case ERegionsActionType.SET_REGIONS: {
      const { data } = (action as ReturnType<typeof setRegions>).payload;
      return { ...INITIAL_STATE, data: data || [] };
    }

    default:
      return state;
  }
};

export default reducer;
