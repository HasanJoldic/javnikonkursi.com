import React from "react";
import { useField, FieldConfig, useFormikContext } from "formik";

import { DatePicker, DatePickerProps } from "@mui/lab";
import { TextField } from "@mui/material";

type TInputProps = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any>;

type TProps = TInputProps & {
  datePickerProps: Omit<DatePickerProps, "value" | "onChange" | "renderInput">;
};

export const DateInput: React.FC<TProps> = (props) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const hasError = meta.touched === true && meta.error != null;
  // const helperText = hasError ? meta.error : null;
  const inputProps = { ...props };
  delete inputProps.datePickerProps;
  delete inputProps.color;

  return (
    <DatePicker
      {...props.datePickerProps}
      {...field}
      onChange={(val: Date) => {
        setFieldValue(field.name, val?.toISOString());
      }}
      renderInput={(params) => <TextField {...params} />}
      mask="__.__.____"
      inputFormat="dd.MM.yyyy"
    />
  );
};
