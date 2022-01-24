import * as React from "react";

import { LoadingButton as MuiLoadingButton, LoadingButtonProps } from "@mui/lab";
import { Save as SaveIcon } from "@mui/icons-material";

interface IProps extends LoadingButtonProps {}

export const LoadingButton: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <MuiLoadingButton {...props} loadingPosition="start" startIcon={<SaveIcon />}>
      {children}
    </MuiLoadingButton>
  );
};
