import { SceneModel } from "@/models/SceneModel";

export interface PageModel {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  scene: SceneModel;
}