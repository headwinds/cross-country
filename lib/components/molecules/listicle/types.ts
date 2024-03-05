type listicleStatus = "unsaved" | "saved" | "updated" | "deleted";

export type ListicleItem = {
  id: number;
  value: string;
  category: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  status: listicleStatus;
};

export type Listicle = {
  listicleItems: ListicleItem[];
};
