export type UserModel = {
  id: string;
  isAuthenticated: string;
  access_token: string;
  refresh_token: string;
  admin: boolean;
  confirmed: boolean;
  confirmed_on: string;
  email: string;
  username: string;
};

// Default values for UserModel
export const defaultUserModel: UserModel = {
  id: "",
  isAuthenticated: "",
  access_token: "",
  refresh_token: "",
  admin: false,
  confirmed: false,
  confirmed_on: "",
  email: "",
  username: "",
};
