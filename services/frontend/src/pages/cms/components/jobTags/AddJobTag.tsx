import React from "react";
import { useHistory } from "react-router-dom";
import { FormikConfig } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";

import { Grid } from "@mui/material";

import { CreateJobTagMutation, CreateJobTagMutationVariables, CreateJobTagInput } from "generated/types";

import { TextInput } from "components";
import { useCmsContext } from "pages/cms";

import { Form, parseFormValues } from "../Form";
import { jobTagsUrl } from "./Routes";

export const CREATE_JOB_TYPE_TAGS = gql`
  mutation CreateJobTag($input: CreateJobTagInput!) {
    createJobTag(input: $input) {
      jobTag {
        id
      }
    }
  }
`;

const initialValues = {
  title: "",
  notes: "",
};

export const AddJobTag: React.FC = () => {
  const history = useHistory();
  const { refetchJobTags } = useCmsContext();

  const [CreateJobTag] = useMutation<CreateJobTagMutation, CreateJobTagMutationVariables>(CREATE_JOB_TYPE_TAGS);

  const handleSubmit = React.useCallback<FormikConfig<typeof initialValues>["onSubmit"]>(
    async (values, { setSubmitting }) => {
      values = parseFormValues(values);
      setSubmitting(true);

      const { data: updateData } = await CreateJobTag({
        variables: { input: { jobTag: values } },
      });

      if (updateData?.createJobTag?.jobTag) {
        refetchJobTags();
        history.push(`/cms/${jobTagsUrl}`);
      }

      setSubmitting(false);
    },
    [CreateJobTag, history, refetchJobTags]
  );

  return (
    <Form
      initialValues={initialValues}
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
