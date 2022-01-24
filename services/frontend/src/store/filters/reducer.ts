import { Reducer } from "redux";

import { EFiltersActionTypes, IFiltersState } from "./types";
import { setFilters, updateFilters } from "./actions";

const INITIAL_STATE: IFiltersState = {
  regions: [],
  jobTypes: [],
  companies: [],
  shouldIncludeExpired: false,
};

const reducer: Reducer<IFiltersState> = (state = INITIAL_STATE, action): IFiltersState => {
  switch (action.type) {
    case EFiltersActionTypes.SET_FILTERS: {
      const { filters } = (action as ReturnType<typeof setFilters>).payload;
      return { ...INITIAL_STATE, ...filters };
    }

    case EFiltersActionTypes.UPDATE_FILTERS: {
      const { filters } = (action as ReturnType<typeof updateFilters>).payload;
      return { ...state, ...filters };
    }

    case EFiltersActionTypes.RESET_FILTERS: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};

export default reducer;
