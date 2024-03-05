export interface UserProps {
  data?: unknown;
  isAnon?: boolean;
  onChange?: (data: {
    event: string;
    data: { id: string; value: string };
  }) => void;
}
