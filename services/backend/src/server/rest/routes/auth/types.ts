import { EUserRole } from "@javnikonkursi/shared";

enum EUserField {
  id = "id",
  role = "role",
  email = "email",
  is_email_verified = "is_email_verified",
  password = "password",
  full_name = "full_name",
  _created_at = "_created_at",
  _updated_at = "_updated_at",
}

export const dbUserReturnColumns = [
  EUserField.id,
  EUserField.role,
  EUserField.email,
  EUserField.password,
  EUserField.is_email_verified,
  EUserField.full_name,
  EUserField._created_at,
  EUserField._updated_at,
];

export interface IDBUser {
  [EUserField.id]: string;
  [EUserField.role]: EUserRole;
  [EUserField.email]: string;
  [EUserField.is_email_verified]: boolean;
  [EUserField.password]: string;
  [EUserField.full_name]: string;
  [EUserField._created_at]: string;
  [EUserField._updated_at]: string;
}
