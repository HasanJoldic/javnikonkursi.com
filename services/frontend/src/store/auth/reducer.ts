import { Reducer } from "redux";

import { EAuthActionTypes, IAuthState } from "./types";
import { loginSuccess } from "./actions";

const INITIAL_STATE: IAuthState = {
  isLoading: null,
  accessToken: null,
  refreshToken: null,
  user: null,
};

const reducer: Reducer<IAuthState> = (state = INITIAL_STATE, action): IAuthState => {
  switch (action.type) {
    case EAuthActionTypes.LOGIN_REQUEST: {
      return { ...INITIAL_STATE, isLoading: true };
    }

    case EAuthActionTypes.LOGIN_SUCCESS: {
      const { payload } = action as ReturnType<typeof loginSuccess>;
      return { ...INITIAL_STATE, ...payload };
    }

    case EAuthActionTypes.LOGIN_FAILURE: {
      return INITIAL_STATE;
    }

    case EAuthActionTypes.LOGOUT: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};

export default reducer;
