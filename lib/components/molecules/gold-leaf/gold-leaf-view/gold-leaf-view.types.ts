// TODO type check
// @ts-nocheck
// TODO: type this - this is an immutablejs record not a type
//import LeafModel from '../../../../models/LeafModel';

// goldLeaftModel can PortholeBranchModelType or EmailModelType
import { PortholeBranchModelType } from "@cross-country/models/PortholeBranchModel";
import { EmailModelType } from "@cross-country/models/EmailModel";

export interface GoldLeafViewProps {
  goldLeafModel?: PortholeBranchModelType | EmailModelType; // optionall for now to support <GoldLeafViewControls but should decide on a type
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
  customClass?: string;
  customStyle?: React.CSSProperties;
  variant?: "article" | "email";
}
