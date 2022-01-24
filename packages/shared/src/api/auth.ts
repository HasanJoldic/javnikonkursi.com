export enum EUserRole {
  APP_USER = "app_user",
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
}

export interface IRegisterRequestBody {
  email: string;
  password: string;
  fullName: string;
}

export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface ILogoutRequestBody {
  accessToken: string;
}

export interface IAuthResponseBody {
  user: {
    id: string;
    email: string;
    fullName: string;
    role: EUserRole;
  };
  accessToken: string;
}
