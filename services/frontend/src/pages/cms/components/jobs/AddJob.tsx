import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SelectOption } from "react-select-material-ui";
import * as Yup from "yup";

import { gql, useMutation } from "@apollo/client";
import {
  CreateJobMutation,
  CreateJobMutationVariables,
  UpdateJobMutation,
  UpdateJobMutationVariables,
} from "generated/types";

import { Grid } from "@mui/material";

import { useApiClient } from "api";
import { IApplicationState } from "store";

import { TextInput, AutoCompleteInput, DateInput, FileUpload } from "components";
import { useCmsContext } from "pages/cms";

import { Form, parseFormValues } from "../Form";
import { jobsUrl } from "./Routes";
import { UPDATE_JOB } from "./EditJob";

const initialValues = {
  title: "",
  jobTypeId: "",
  companyId: "",
  regionId: "",
  startDate: null,
  endDate: null,
  externalUrl: "",
  internalFile: null,
};

const CREATE_JOB = gql`
  mutation CreateJob($input: CreateJobInput!) {
    createJob(input: $input) {
      job {
        id
      }
    }
  }
`;

export const AddJob: React.FC = () => {
  const history = useHistory();
  const apiClient = useApiClient();
  const { refetchJobs } = useCmsContext();

  const [regionOptions, setRegionOptions] = React.useState<SelectOption[]>([]);

  const { regions, companies, jobTypes } = useSelector(
    (state: IApplicationState) => ({
      regions: state.regions.data,
      companies: state.companies.data,
      jobTypes: state.jobTypes.data,
    }),
    shallowEqual
  );

  React.useEffect(() => {
    setRegionOptions(
      regions.map((region) => ({
        label: region.title,
        value: region.id,
      }))
    );
  }, [setRegionOptions, regions]);

  const [createJob] = useMutation<CreateJobMutation, CreateJobMutationVariables>(CREATE_JOB);

  const [updateJob] = useMutation<UpdateJobMutation, UpdateJobMutationVariables>(UPDATE_JOB);

  const handleSubmit = React.useCallback(
    async ({ internalFile, ...values }, { setSubmitting }) => {
      setSubmitting(true);

      values = parseFormValues(values);
      const { data } = await createJob({
        variables: { input: { job: values } },
      });
      const job = data?.createJob?.job;

      const internalUrl = await apiClient.uploadFile({
        file: internalFile,
        fileName: `${job.id}`,
      });

      if (typeof internalUrl === "string") {
        const { data: updateData } = await updateJob({
          variables: { input: { id: job.id, patch: { internalUrl } } },
        });

        if (updateData?.updateJob?.job) {
          refetchJobs();
          history.push(`/cms/${jobsUrl}`);
        }
      }
      setSubmitting(false);
    },
    [createJob, apiClient, updateJob, history, refetchJobs]
  );

  return (
    <Form
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string().min(5).required("Obavezno polje"),
        jobTypeId: Yup.string(),
        companyId: Yup.string().required("Obavezno polje"),
        regionId: Yup.string().required("Obavezno polje"),
        startDate: Yup.string().required("Obavezno polje"),
        endDate: Yup.date().required("Obavezno polje"),
        externalUrl: Yup.string()
          .url("Mora biti url, npm: https://www.bhtelecom.ba/karijere.html")
          .required("Obavezno polje"),
        internalFile: Yup.mixed().required(),
      })}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12}>
        <TextInput
          name="title"
          type="text"
          placeholder="Strucni saradnik za pravne poslove"
          textFieldProps={{
            label: "Naziv radnog mjesta",
            variant: "outlined",
            fullWidth: true,
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <AutoCompleteInput
          name="jobTypeId"
          autocompleteProps={{
            options: jobTypes.map((o) => ({
              value: o.id,
              label: o.title,
            })),
          }}
          textFieldProps={{
            label: "Vrsta posla",
            variant: "outlined",
            fullWidth: true,
            placeholder: "Doktor medicine",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <AutoCompleteInput
          name="companyId"
          autocompleteProps={{
            options: companies.map((o) => ({
              value: o.id,
              label: o.title,
            })),
          }}
          textFieldProps={{
            label: "Javna ustanova/preduzeće",
            variant: "outlined",
            fullWidth: true,
            placeholder: "https://www.bhtelecom.ba/karijere.html",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <AutoCompleteInput
          name="regionId"
          autocompleteProps={{
            options: regionOptions,
          }}
          textFieldProps={{
            label: "Regija",
            variant: "outlined",
            fullWidth: true,
            placeholder: "Tuzlanski Kanton",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <DateInput
          name="startDate"
          placeholder="01.01.2000"
          datePickerProps={{
            label: "Pocetak konkursa",
            // inputVariant: "outlined",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <DateInput
          name="endDate"
          placeholder="01.01.2000"
          datePickerProps={{
            label: "Kraj konkursa",
            // inputVariant: "outlined",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          name="externalUrl"
          type="url"
          placeholder="https://www.bhtelecom.ba/karijere.html"
          textFieldProps={{
            label: "Web stranica konkursa",
            variant: "outlined",
            fullWidth: true,
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <FileUpload name="internalFile" label="Interni dokument" />
      </Grid>
    </Form>
  );
};
