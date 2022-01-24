import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FormikConfig } from "formik";
import * as Yup from "yup";

import { gql, useMutation } from "@apollo/client";
import { UpdateCompanyMutation, UpdateCompanyMutationVariables, Company, UpdateCompanyInput } from "generated/types";

import { Grid } from "@mui/material";

import { IApplicationState } from "store";

import { TextInput } from "components";
import { useCmsContext } from "pages/cms";

import { Form, parseFormValues } from "../Form";
import { companiesUrl } from "./Routes";

export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($input: UpdateCompanyInput!) {
    updateCompany(input: $input) {
      company {
        id
      }
    }
  }
`;

export const EditCompany: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { refetchCompanies } = useCmsContext();

  const companies = useSelector((state: IApplicationState) => state.companies.data);
  const selectedCompany = companies.find((company) => company.id === id);

  const [updateCompany] = useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UPDATE_COMPANY);

  const handleSubmit = React.useCallback<FormikConfig<Company>["onSubmit"]>(
    async (values, { setSubmitting }) => {
      values = parseFormValues(values);
      setSubmitting(true);

      const updatedFields = Object.entries(values).reduce((sum, entry) => {
        const [key, value] = entry;
        if (selectedCompany[key] !== value) {
          sum[key] = value;
        }
        return sum;
      }, {} as UpdateCompanyInput["patch"]);

      const { data: updateData } = await updateCompany({
        variables: { input: { id: selectedCompany.id, patch: updatedFields } },
      });

      if (updateData?.updateCompany?.company) {
        refetchCompanies();
        history.push(`/cms/${companiesUrl}`);
      }

      setSubmitting(false);
    },
    [selectedCompany, updateCompany, history, refetchCompanies]
  );

  return (
    <Form
      initialValues={selectedCompany}
      validationSchema={Yup.object({
        title: Yup.string().min(5).required("Obavezno polje"),
        url: Yup.string().url("Mora biti url, npm: https://www.bhtelecom.ba/karijere.html").required("Obavezno polje"),
      })}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12}>
        <TextInput
          name="title"
          type="text"
          placeholder="BH Telecom d.d. Sarajevo"
          textFieldProps={{
            label: "Ime javne ustanove/preduzeca",
            variant: "outlined",
            fullWidth: true,
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          name="url"
          type="url"
          placeholder="https://www.bhtelecom.ba/karijere.html"
          textFieldProps={{
            label: "Web stranica",
            variant: "outlined",
            fullWidth: true,
          }}
        />
      </Grid>
    </Form>
  );
};
