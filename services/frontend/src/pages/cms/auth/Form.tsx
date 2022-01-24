import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Grid, Avatar, Typography, Button, Link, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";

import { IAuthResponseBody, ILoginRequestBody, IRegisterRequestBody } from "@javnikonkursi/shared";

import { loginRequest, loginSuccess } from "store";
import { useApiClient } from "api";
import { TextInput } from "components";

export enum EAuthFormTab {
  LOGIN = 0,
  REGISTER = 1,
  FORGOT_PASSWORD = 2,
}

export const authFormTitles = {
  [EAuthFormTab.LOGIN]: "Prijava",
  [EAuthFormTab.REGISTER]: "Registracija",
  [EAuthFormTab.FORGOT_PASSWORD]: "Promjena sifre",
};

const initialValues = { email: "", password: "", fullName: "" };
const validationSchema = {
  [EAuthFormTab.LOGIN]: Yup.object({
    email: Yup.string().email("Pogresan format email adrese").required("Obavezno polje"),
    password: Yup.string().min(8, "Lozinka mora sadrzati najmanje 8 znakova").required("Obavezno polje"),
  }),
  [EAuthFormTab.REGISTER]: Yup.object({
    email: Yup.string().email("Pogresan format email adrese").required("Obavezno polje"),
    password: Yup.string().min(8, "Lozinka mora sadrzati najmanje 8 znakova").required("Obavezno polje"),
    fullName: Yup.string().required("Obavezno polje"),
  }),
  [EAuthFormTab.FORGOT_PASSWORD]: Yup.object({
    email: Yup.string().email("Pogresan format email adrese").required("Obavezno polje"),
  }),
};

interface IAuthFormProps {
  tab: EAuthFormTab;
  onChangeTab: (index: number) => void;
}

const AuthForm = (props: IAuthFormProps) => {
  const dispatch = useDispatch();
  const client = useApiClient();
  const { tab, onChangeTab } = props;

  const classes = useStyles();

  const handleLogin = React.useCallback(
    async ({ email, password }: ILoginRequestBody) => {
      dispatch(loginRequest());
      const res = await client.request({
        path: "/login",
        request: {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        errorMessage: "Doslo je do greske prilikom prijave.",
      });
      if (res) {
        const responseBody: IAuthResponseBody = await res.json();
        dispatch(loginSuccess(responseBody));
      }
    },
    [dispatch, client]
  );

  const handleRegister = React.useCallback(
    async ({ email, password, fullName }: IRegisterRequestBody) => {
      dispatch(loginRequest());
      const res = await client.request({
        path: "/register",
        request: {
          method: "POST",
          body: JSON.stringify({ email, password, fullName }),
          headers: {
            "Content-Type": "application/json",
          },
        },
        errorMessage: "Doslo je do greske prilikom registracije.",
      });
      if (res) {
        const responseBody: IAuthResponseBody = await res.json();
        dispatch(loginSuccess(responseBody));
      }
    },
    [dispatch, client]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[tab]}
      onSubmit={async ({ email, password, fullName }, { setSubmitting }) => {
        setSubmitting(true);
        if (tab === EAuthFormTab.REGISTER) {
          await handleRegister({ email, password, fullName });
        } else if (tab === EAuthFormTab.LOGIN) {
          await handleLogin({ email, password });
        }
        setSubmitting(false);
      }}
    >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {tab === EAuthFormTab.FORGOT_PASSWORD && (
          <>
            <Typography component="h1" variant="h5">
              Promjena sifre
            </Typography>
            <Typography component="div" variant="caption">
              Na ovu email adresu, ako postoji registrovan korisnik, cete dobiti link za promjenu sifre
            </Typography>
          </>
        )}
        <Form className={classes.form}>
          <Grid className={classes.inputFieldsContainer} container spacing={2}>
            <Grid item xs={12}>
              <TextInput
                name="email"
                type="email"
                placeholder="moja.adresa@domena.ba"
                textFieldProps={{
                  className: classes.textInput,
                  label: "Email adresa",
                  variant: "outlined",
                }}
              />
            </Grid>

            {tab !== EAuthFormTab.FORGOT_PASSWORD && (
              <Grid item xs={12}>
                <TextInput
                  name="password"
                  type="password"
                  textFieldProps={{
                    className: classes.textInput,
                    label: "Lozinka",
                    variant: "outlined",
                  }}
                />
              </Grid>
            )}

            {tab === EAuthFormTab.REGISTER && (
              <Grid item xs={12}>
                <TextInput
                  name="fullName"
                  type="text"
                  textFieldProps={{
                    className: classes.textInput,
                    label: "Ime i prezime",
                    variant: "outlined",
                  }}
                />
              </Grid>
            )}
          </Grid>

          {tab === EAuthFormTab.LOGIN && (
            <Grid container>
              <Grid item xs={6}>
                <Link href="#" onClick={() => onChangeTab(EAuthFormTab.FORGOT_PASSWORD)}>
                  Promjena sifre
                </Link>
              </Grid>
            </Grid>
          )}

          <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
            Posalji
          </Button>
        </Form>
      </div>
    </Formik>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    "& a": {
      display: "block",
    },
  },
  inputFieldsContainer: {
    marginBottom: "1rem",
  },
  textInput: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default AuthForm;
