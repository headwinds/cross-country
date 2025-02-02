import type {
  PortholeBranchModel,
  EmailModel,
} from "@headwinds/cross-country/models";

export interface GoldLeafViewProps {
  goldLeafModel?: PortholeBranchModel | EmailModel;
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
  customClass?: string;
  customStyle?: React.CSSProperties;
  variant?: "article" | "email";
}
