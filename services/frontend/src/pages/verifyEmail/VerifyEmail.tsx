import React from "react";
import { useRouteMatch, useParams, useLocation } from "react-router-dom";

import { Typography } from "@mui/material";

export const VerifyEmail: React.FC = () => {
  let { search } = useLocation();

  const query = new URLSearchParams(search);
  const email = query.get("email");
  return (
    <>
      <Typography variant="h2">
        Molimo Vas da potvrdite Vas email racun.
      </Typography>
      <Typography variant="h4">
        Poslali smo email na <span style={{ fontWeight: 700 }}>{email}</span>.
        Molimo Vas da sacekate nekoliko minuta i provjerite inbox.
      </Typography>
    </>
  );
};
