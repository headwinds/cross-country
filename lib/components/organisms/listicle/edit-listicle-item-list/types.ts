export type ListicleItemType = {
  url: string;
  title?: string;
  category?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  status: "unsaved" | "update" | "saved";
};
