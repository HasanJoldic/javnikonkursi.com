import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FormikConfig } from "formik";
import * as Yup from "yup";

import { gql, useMutation } from "@apollo/client";
import { CreateCompanyMutation, CreateCompanyMutationVariables, Company, CreateCompanyInput } from "generated/types";

import { Grid } from "@mui/material";

import { IApplicationState } from "store";

import { AutoCompleteInput, ISelectOption, TextInput } from "components";
import { useCmsContext } from "pages/cms";

import { Form, parseFormValues } from "../Form";
import { companiesUrl } from "./Routes";

export const CREATE_COMPANY = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      company {
        id
      }
    }
  }
`;

const initialValues: Pick<Company, "title" | "url" | "regionId"> = {
  title: "",
  url: "",
  regionId: null,
};

export const AddCompany: React.FC = () => {
  const history = useHistory();
  const { refetchCompanies } = useCmsContext();

  const [regionOptions, setRegionOptions] = React.useState<ISelectOption[]>([]);
  const regions = useSelector((state: IApplicationState) => state.regions.data);

  React.useEffect(() => {
    setRegionOptions(
      regions.map((region) => ({
        label: region.title,
        value: region.id,
      }))
    );
  }, [setRegionOptions, regions]);

  const [CreateCompany] = useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CREATE_COMPANY);

  const handleSubmit = React.useCallback<FormikConfig<Company>["onSubmit"]>(
    async (values, { setSubmitting }) => {
      values = parseFormValues(values);
      setSubmitting(true);

      const { data: updateData } = await CreateCompany({
        variables: { input: { company: values } },
      });

      if (updateData?.createCompany?.company) {
        refetchCompanies();
        history.push(`/cms/${companiesUrl}`);
      }

      setSubmitting(false);
    },
    [CreateCompany, history, refetchCompanies]
  );

  return (
    <Form
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string().min(5).required("Obavezno polje"),
        url: Yup.string().url("Mora biti url, npm: https://www.bhtelecom.ba/karijere.html").required("Obavezno polje"),
        regionId: Yup.string().nullable(),
      })}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12}>
        <TextInput
          name="title"
          type="text"
          placeholder="BH Telecom d.d. Sarajevo"
          textFieldProps={{
            label: "Ime javne ustanove/preduzeća",
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
    </Form>
  );
};
