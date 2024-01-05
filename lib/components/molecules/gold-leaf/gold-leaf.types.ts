import LeafModel from '../../../models/LeafModel';

export interface GoldLeafProps {
  goldLeafModel: LeafModel;
  dataTestId?: string;
  mode?: string;
  customClass?: string;
  customStyle?: any;
  onNoImageFoundCallback?: () => void;  
}
