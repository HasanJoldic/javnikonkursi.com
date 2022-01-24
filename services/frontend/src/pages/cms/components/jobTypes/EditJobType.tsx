import React from "react";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
import { FormikConfig } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";

import { Grid } from "@mui/material";

import {
  UpdateJobTypeMutation,
  UpdateJobTypeMutationVariables,
  UpdateJobTypeInput,
  JobTypeInput,
} from "generated/types";

import { IApplicationState } from "store";

import { TextInput } from "components";
import { useCmsContext } from "pages/cms";

import { Form, parseFormValues } from "../Form";
import { jobTypesUrl } from "./Routes";

export const UPDATE_JOB_TYPE = gql`
  mutation UpdateJobType($input: UpdateJobTypeInput!) {
    updateJobType(input: $input) {
      jobType {
        id
      }
    }
  }
`;

export const EditJobType: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { refetchJobTypes } = useCmsContext();

  const companies = useSelector((state: IApplicationState) => state.companies.data);
  const selectedJobType = companies.find((company) => company.id === id);

  const [updateJobType] = useMutation<UpdateJobTypeMutation, UpdateJobTypeMutationVariables>(UPDATE_JOB_TYPE);

  const handleSubmit = React.useCallback<FormikConfig<JobTypeInput>["onSubmit"]>(
    async (values, { setSubmitting }) => {
      values = parseFormValues(values);
      setSubmitting(true);

      const { data: updateData } = await updateJobType({
        variables: { input: { id: selectedJobType, patch: values } },
      });

      if (updateData?.updateJobType?.jobType) {
        refetchJobTypes();
        history.push(`cms/${jobTypesUrl}`);
      }

      setSubmitting(false);
    },
    [updateJobType, selectedJobType, history, refetchJobTypes]
  );

  return (
    <Form
      initialValues={selectedJobType}
      validationSchema={Yup.object({
        title: Yup.string().min(5).required("Obavezno polje"),
        notes: Yup.string(),
      })}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12}>
        <TextInput
          name="title"
          type="text"
          placeholder="Doktor medicine"
          textFieldProps={{
            label: "Vrsta posla",
            variant: "outlined",
            fullWidth: true,
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          name="notes"
          type="text"
          textFieldProps={{
            label: "Opis",
            variant: "outlined",
            fullWidth: true,
          }}
        />
      </Grid>
    </Form>
  );
};
