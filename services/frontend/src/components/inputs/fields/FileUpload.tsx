import React from "react";
import { useField, FieldConfig, useFormikContext } from "formik";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  FormLabel,
} from "@mui/material";

import { grey } from "@mui/material/colors";

type TInputProps = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any>;

type TProps = TInputProps & {
  label: string;
};

export const FileUpload: React.FC<TProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const hasError = meta.touched === true && meta.error != null;
  const helperText = hasError ? meta.error : null;

  return (
    <FormControl>
      <div
        style={{
          padding: "20px 15px",
          border: `1px solid ${grey[400]}`,
          borderRadius: 4,
        }}
      >
        <FormLabel>{label}</FormLabel>
        <br />
        <input
          // {...field}
          {...props}
          type="file"
          onChange={(event) => {
            // const fileReader = new FileReader();
            // fileReader.onload = (_event) => {
            //   const arr = (_event.target.result as string).split(",");
            //   const base64 = arr[1];
            //   setFieldValue(field.name, base64);
            // };
            // fileReader.readAsDataURL(event.target?.files?.[0]);
            setFieldValue(field.name, event.currentTarget.files[0]);
          }}
          accept=".jpg,.jpeg,.png,,.pdf"
        />
      </div>

      <FormHelperText error={hasError}>{helperText}</FormHelperText>
      <img src={field.value} />
    </FormControl>
  );
};
