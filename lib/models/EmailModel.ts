import { PortholeBranchModel } from "./PortholeBranchModel";

export type EmailModel = PortholeBranchModel & {
  email_id: string;
  to: string;
  from: string;
  subject: string;
  body: string;
  date: string;
};

