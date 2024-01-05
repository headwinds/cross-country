// TODO: type this - this is an immutablejs record not a type
//import LeafModel from '../../../../models/LeafModel';

export interface GoldLeafViewProps {
  goldLeafModel?: any; // optionall for now to support <GoldLeafViewControls but should decide on a type
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
  customClass?: string;
  customStyle?: React.CSSProperties;
}
