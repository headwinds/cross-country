import LeafModel from '../../../models/LeafModel';

export interface GoldLeafViewProps {
  goldLeafModel: LeafModel;
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
}
