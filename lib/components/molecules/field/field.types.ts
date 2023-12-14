export interface FieldProps {
    text?: string;
    onTextChange?: (text: string) => void;
    value?: string;
    type?: string;
    isValid?: boolean;
    isUntouched?: boolean;
}
