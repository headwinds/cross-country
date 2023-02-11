import LeafModel from '../../../models/LeafModel';

export interface GoldLeafProps {
  goldLeafModel: LeafModel;
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
}
