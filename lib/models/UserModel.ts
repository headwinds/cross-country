import { Record } from "immutable";

// TODO: deprecrate immutable in favour of Typescript utility type Record
const UserModel = Record({
  id: "",
  isAuthenticated: "",
  access_token: "",
  refresh_token: "",
  admin: false,
  confirmed: false,
  confirmed_on: "",
  email: "",
  username: "",
});

// convert this to Typescript Record
export type UserModelType = {
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

export default UserModel;
