import React from "react";
import { Formik, Form as FormikForm, FormikProps, FormikConfig } from "formik";

import { Box, Grid } from "@mui/material";

import { LoadingButton } from "components";

interface IProps<T extends object> {
  initialValues: T;
  validationSchema: FormikConfig<T>["validationSchema"];
  onSubmit: FormikConfig<T>["onSubmit"];
}

export const Form = <T extends object>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: React.PropsWithChildren<IProps<T>>): React.ReactElement => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, isValid }: FormikProps<any>) => (
        <div>
          <FormikForm>
            <Grid container spacing={2}>
              {children}
            </Grid>
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <LoadingButton
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                loading={isSubmitting}
                disabled={!isValid}
              >
                Zapamti
              </LoadingButton>
            </Box>
          </FormikForm>
        </div>
      )}
    </Formik>
  );
};

export function parseFormValues(input: object) {
  return Object.keys(input).reduce((sum, curr) => {
    sum[curr] = input[curr]?.value || input[curr];
    if (sum[curr] === "") {
      sum[curr] = null;
    }
    return sum;
  }, {} as any);
}
