import { IAuthResponseBody } from "@javnikonkursi/shared";

import { EAuthActionTypes } from "./types";

export const loginRequest = () => ({
  type: EAuthActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (payload: IAuthResponseBody) => ({
  type: EAuthActionTypes.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: EAuthActionTypes.LOGIN_FAILURE,
});

export const logout = () => ({
  type: EAuthActionTypes.LOGOUT,
});
