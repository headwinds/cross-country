import { Record } from "immutable";

const EmailModel = Record({
  email_id: "",
  to: "",
  from: "",
  subject: "",
  body: "",
  date: "",
});

export type EmailModelType = {
  email_id: string;
  to: string;
  from: string;
  subject: string;
  body: string;
  date: string;
};

export default EmailModel;
