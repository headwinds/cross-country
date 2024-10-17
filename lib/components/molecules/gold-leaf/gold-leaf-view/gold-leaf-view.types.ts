import { PortholeBranchModelType } from "@cross-country/models/PortholeBranchModel";
import { EmailModelType } from "@cross-country/models/EmailModel";

export interface GoldLeafViewProps {
  goldLeafModel?: PortholeBranchModelType | EmailModelType;
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
  customClass?: string;
  customStyle?: React.CSSProperties;
  variant?: "article" | "email";
}
