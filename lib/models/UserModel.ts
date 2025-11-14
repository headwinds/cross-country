export type UserModel = {
  id: string; // UUID
  isAuthenticated: boolean;
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
  isAuthenticated: false,
  access_token: "",
  refresh_token: "",
  admin: false,
  confirmed: false,
  confirmed_on: "",
  email: "",
  username: "",
};
