import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { IApplicationState } from "store";

import { LoggedIn } from "./LoggedIn";
import { LoggedOut } from "./LoggedOut";

const selector = (state: IApplicationState) => ({
  accessToken: state.auth.accessToken,
  isEmailVerified: state.auth.user?.isEmailVerified,
});

export const Cms: React.FC = () => {
  const { accessToken } = useSelector<IApplicationState, ReturnType<typeof selector>>(selector, shallowEqual);

  return accessToken ? <LoggedIn /> : <LoggedOut />;
};
