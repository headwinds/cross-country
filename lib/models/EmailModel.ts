import { Record } from "immutable";

const EmailModel = Record({
  email_id: 0,
  to: "",
  from: "",
  subject: "",
  body: "",
  date: new Date(),
});

export type EmailModelType = typeof EmailModel;

export default EmailModel;
