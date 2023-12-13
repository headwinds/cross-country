import { Record } from 'immutable';

const UserModel = Record({
  id: '',
  isAuthenticated: '',
  access_token: '',
  refresh_token: '',
  admin: false,
  confirmed: false,
  confirmed_on: '',
  email: '',
  username: '',
});

export default UserModel;
