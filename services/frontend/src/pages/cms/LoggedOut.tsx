import React from "react";

import { Main } from "components";
import { Auth } from "./auth";

export const LoggedOut = () => {
  return (
    <Main noMenu>
      <Auth />
    </Main>
  );
};
