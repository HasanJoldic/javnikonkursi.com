import React from "react";

import SearchSelect, { ReactSelectMaterialUiProps } from "react-select-material-ui";

interface IProps extends ReactSelectMaterialUiProps {}

export const MultipleSearchSelectInput = ({ SelectProps, ...props }: IProps) => {
  return (
    <SearchSelect
      {...props}
      SelectProps={{
        ...SelectProps,
        isMulti: true,
      }}
    />
  );
};
