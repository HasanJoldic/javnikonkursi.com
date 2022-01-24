import * as Yup from "yup";

export const emailValidation = Yup.string().email("Pogresan format email adrese").required("Obavezno polje");

export const passwordValidation = Yup.string()
  .min(8, "Lozinka mora sadrzati najmanje 8 znakova")
  .required("Obavezno polje");
