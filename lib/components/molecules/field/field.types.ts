export interface FieldProps {
  customClass?: string;
  customStyle?: React.CSSProperties;
  id?: string;
  text?: string;
  onTextChange?: (text: string) => void;
  value?: string;
  type?: string;
  isValid?: boolean;
  isUntouched?: boolean;
}
