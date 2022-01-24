import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { SelectOption } from "react-select-material-ui";
import { FormikConfig } from "formik";
import * as Yup from "yup";

import { gql, useMutation } from "@apollo/client";
import { Job, UpdateJobInput, UpdateJobMutation, UpdateJobMutationVariables } from "generated/types";

import { Grid } from "@mui/material";

import { useApiClient } from "api";
import { IApplicationState } from "store";

import { TextInput, AutoCompleteInput, DateInput, FileUpload } from "components";
import { useCmsContext } from "pages/cms";

import { Form, parseFormValues } from "../Form";
import { jobsUrl } from "./Routes";

export const UPDATE_JOB = gql`
  mutation UpdateJob($input: UpdateJobInput!) {
    updateJob(input: $input) {
      job {
        id
      }
    }
  }
`;

export const EditJob: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const apiClient = useApiClient();
  const { refetchJobs } = useCmsContext();

  const [regionOptions, setRegionOptions] = React.useState<SelectOption[]>([]);

  const { companies, jobs, jobTypes, regions } = useSelector(
    (state: IApplicationState) => ({
      companies: state.companies.data,
      jobs: state.jobs.data,
      jobTypes: state.jobTypes.data,
      regions: state.regions.data,
    }),
    shallowEqual
  );

  const selectedJob = jobs.find((job) => job.id === id);

  React.useEffect(() => {
    setRegionOptions(
      regions.map((region) => ({
        label: region.title,
        value: region.id,
      }))
    );
  }, [setRegionOptions, regions]);

  const [updateJob] = useMutation<UpdateJobMutation, UpdateJobMutationVariables>(UPDATE_JOB);

  const handleSubmit = React.useCallback<FormikConfig<Job & { internalFile: File }>["onSubmit"]>(
    async ({ internalFile, ...values }, { setSubmitting }) => {
      setSubmitting(true);

      values = parseFormValues(values);

      let internalUrl: string;
      if (internalFile) {
        internalUrl = await apiClient.uploadFile({
          file: internalFile,
          fileName: `${selectedJob.id}`,
        });
      }

      const updatedFields = Object.entries(values).reduce((sum, entry) => {
        const [key, value] = entry;
        if (selectedJob[key] !== value) {
          sum[key] = value;
        }
        return sum;
      }, {} as UpdateJobInput["patch"]);
      if (internalUrl) {
        updatedFields.internalUrl = internalUrl;
      }

      const { data: updateData } = await updateJob({
        variables: { input: { id: selectedJob.id, patch: updatedFields } },
      });

      if (updateData?.updateJob?.job) {
        refetchJobs();
        history.push(`/cms/${jobsUrl}`);
      }

      setSubmitting(false);
    },
    [selectedJob, apiClient, updateJob, history, refetchJobs]
  );

  return (
    <Form
      initialValues={selectedJob}
      validationSchema={Yup.object({
        title: Yup.string().min(5).required("Obavezno polje"),
        jobTypeId: Yup.string(),
        companyId: Yup.string()
          .oneOf(companies.map((c) => c.id))
          .required("Obavezno polje"),
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
