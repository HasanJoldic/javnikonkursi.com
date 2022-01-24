import React from "react";
import { useHistory } from "react-router";

import { Button, ButtonProps } from "@mui/material";

type TProps = ButtonProps & { id: string; link: string };

export const RouterButton: React.FC<TProps> = ({ id, link, ...props }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`#${id}`);
    history.push(link);
  };

  return <Button {...props} onClick={onClick} />;
};
