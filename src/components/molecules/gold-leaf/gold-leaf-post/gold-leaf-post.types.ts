import LeafModel from '../../../../models/LeafModel';

export interface GoldLeafPostProps {
  goldLeafModel: LeafModel;
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
}
