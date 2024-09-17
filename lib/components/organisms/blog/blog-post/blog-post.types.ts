// TODO type check
// @ts-nocheck
import LeafModel from "../../../../models/LeafModel";
import UserModel from "../../../../models/UserModel";
import type { UserModelType } from "../../../../models/UserModel";

import { z } from "zod";

const StatusEnum = z.enum(["draft", "published", "archived"]);

// creating a schema for strings
const BlogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  blogpost_type: z.string(),
  slug: z.string(),
  user_account_id: z.string(),
  status: StatusEnum,
});

export type BlogPostSchemaType = z.infer<typeof GoldLeafPostSchema>;

export interface BlogPostProps {
  goldLeafModel?: typeof LeafModel;
  dataTestId?: string;
  mode?: string;
  children?: React.ReactNode | React.ReactNode[];
  onSaveClick?: (leafModel: LeafModel) => void;
  user: UserModelType | null;
}
